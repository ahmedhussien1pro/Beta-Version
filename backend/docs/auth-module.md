# Authentication Module Overview

## Purpose
The authentication module centralizes all user authentication workflows for the application. It offers registration with email verification, login with access/refresh token issuance, logout, and token rotation via refresh tokens. This module layers responsibilities across routers, validation schemas, controllers, services, utilities, and middleware to keep concerns separated and maintainable.

## Directory Layout
```
src/auth/
├── auth.router.ts        # Express routes and rate limiting
├── auth.validator.ts     # Zod schemas + validation middleware
├── auth.controller.ts    # HTTP orchestration, cookies, responses
├── auth.service.ts       # Business logic and Prisma access
├── token.service.ts      # JWT + password helpers, refresh sessions
├── mailer.client.ts      # Email delivery for verification codes
├── assets/
│   └── mail_photo.png    # Embedded email banner artwork
├── middleware/
│   └── require-auth.ts   # Access-token verification middleware
└── index.ts              # Router export helper
```

## Core Concepts
- **Access Token (JWT)**: Expires after 15 minutes, issued on login/verification, returned to clients for authorization.
- **Refresh Token (JWT)**: Expires after 7 days, stored as an httpOnly cookie and rotated on each refresh. Hashed refresh token values are persisted in the Prisma `RefreshToken` model.
- **Verification Flow**: Users must confirm email via a 6-digit code sent by `mailerClient`. Pending registrations expire after 10 minutes and stale records are purged during verification.

## Endpoint Summary
All routes are mounted under `/api/auth` (see `src/auth/index.ts` and `src/index.ts`).

### POST `/api/auth/register`
Starts the registration process and emails a verification code.

- **Middleware**: `registerLimiter`; `validateRegister`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "name": "username",
    "password": "StrongPass123"
  }
  ```
- **Responses**:
  - `201 Created` on success:
    ```json
    {
      "success": true,
      "message": "Verification code sent to your email"
    }
    ```
  - `400 Bad Request` for validation errors or duplicates.

### POST `/api/auth/verify`
Completes registration by verifying the emailed code and issues tokens.

- **Middleware**: `verifyLimiter`; `validateVerify`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "code": "123456"
  }
  ```
- **Responses**:
  - `200 OK` on success (refresh token also set as `refreshToken` cookie):
    ```json
    {
      "success": true,
      "message": "Email verified successfully",
      "accessToken": "<jwt>",
      "refreshToken": "<jwt>",
      "user": {
        "id": "cl123",
        "email": "user@example.com",
        "name": "username",
        "role": "USER"
      }
    }
    ```
  - `400 Bad Request` for invalid/expired codes.

### POST `/api/auth/login`
Authenticates an existing user by email or username.

- **Middleware**: `loginLimiter`; `validateLogin`
- **Request Body**:
  ```json
  {
    "emailOrName": "user@example.com",
    "password": "StrongPass123"
  }
  ```
- **Responses**:
  - `200 OK` on success (refresh token also set as cookie):
    ```json
    {
      "success": true,
      "message": "Login successful",
      "accessToken": "<jwt>",
      "user": {
        "id": "cl123",
        "email": "user@example.com",
        "name": "username",
        "role": "USER"
      }
    }
    ```
  - `400 Bad Request` for invalid credentials or unverified accounts.

### POST `/api/auth/logout`
Revokes refresh tokens for the authenticated user.

- **Middleware**: `requireAuth`
- **Request Body** (optional):
  ```json
  {
    "refreshToken": "<jwt>"
  }
  ```
  If omitted, all sessions are revoked for the user; otherwise, only the supplied session is revoked.
- **Responses**:
  - `200 OK` on success:
    ```json
    {
      "success": true,
      "message": "Logged out successfully"
    }
    ```
  - `401 Unauthorized` if no user context is present.

### POST `/api/auth/refresh`
Rotates the refresh token and returns a new access token pair.

- **Middleware**: `refreshLimiter`; `validateRefresh`
- **Request Body** (refresh token may also be supplied via `refreshToken` cookie):
  ```json
  {
    "refreshToken": "<jwt>"
  }
  ```
- **Responses**:
  - `200 OK` on success (new refresh token set as cookie):
    ```json
    {
      "success": true,
      "message": "Token refreshed successfully",
      "accessToken": "<jwt>"
    }
    ```
  - `401 Unauthorized` for missing/invalid refresh token.

## Service Responsibilities (`auth.service.ts`)
- `startRegistration` – Validates uniqueness, cleans unfinished registrations, hashes password, stores verification code (expiring in 10 minutes), and triggers email send.
- `verifyRegistration` – Validates the submitted code within a Prisma transaction, marks user as verified, removes stale records, issues token pair, and returns sanitized user data.
- `login` – Fetches user by email or username, verifies password, updates login metadata, issues tokens.
- `logout` – Revokes a single refresh session (if token provided) or all sessions.
- `refresh` – Validates provided refresh token, rotates session by revoking previous hash and issuing a new pair.

## Token & Session Management (`token.service.ts`)
- Hashing helpers for passwords and refresh tokens (bcrypt).
- Generation/verification of access and refresh JWTs using `JWT_SECRET` and `JWT_REFRESH_SECRET` environment variables.
- `persistRefreshSession` stores hashed refresh tokens, expiry, user agent, and IP in `RefreshToken` table.
- `validateRefreshToken` verifies token signature, matches against non-revoked hashed entries, and returns associated session + user.
- `revokeRefreshToken` and `revokeAllUserRefreshTokens` mark sessions as revoked (no deletion).

## Middleware (`require-auth.ts`)
- Validates `Authorization` header bearer tokens via `verifyAccessToken`.
- Attaches `req.user` with id, email, and role for downstream handlers.
- Optionally enforces role requirements when provided a list of acceptable roles.

## Configuration
- Set environment variables: `JWT_SECRET`, `JWT_REFRESH_SECRET`, email transport credentials (`EMAIL_USER`, `APP_PASSWORD`, etc.).
- Optional rate-limit tuning via environment variables:
  - `AUTH_RATE_LIMIT_WINDOW_MINUTES` (default 15)
  - `AUTH_REGISTER_RATE_LIMIT_MAX` (default 5)
  - `AUTH_VERIFY_RATE_LIMIT_MAX` (default 5)
  - `AUTH_LOGIN_RATE_LIMIT_MAX` (default 5)
  - `AUTH_REFRESH_RATE_LIMIT_MAX` (default 10)
- Email templates embed the CyberLab banner (`src/auth/assets/mail_photo.png`) using CID attachments.
- Ensure Prisma schema includes `RefreshToken` model with fields `id`, `userId`, `tokenHash`, `expiresAt`, `revokedAt`, `userAgent`, `ip`.

## Operational Notes
- Refresh tokens rotate on every refresh call; new cookies must be persisted client-side.
- Verification codes expire after 10 minutes; stale requests are cleaned during verification and unverified accounts are removed.
- Rate limits mitigate brute force attacks; tune environment variables as needed.
- Controllers consistently return `success` indicators and descriptive messages for client UX.

## Future Enhancements
- Add automated tests covering service workflows and validator edge cases.
- Introduce optional multi-factor verification or resend-code endpoint.
- Expose session management endpoints for users to view/terminate active sessions.
- Move additional mailer branding to configuration for multi-tenant scenarios.
