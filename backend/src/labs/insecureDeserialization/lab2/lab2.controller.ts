import { Request, Response } from 'express';

export const loginController = async (req: Request, res: Response) => {
  const { username, password, session } = req.body;

  // Handle "test" user login
  if (
    (username === 'test' && password === 'test') ||
    session ===
      'TyUzQTQlM0ElMjJVc2VyJTIyJTNBMyUzQSU3QnMlM0E4JTNBJTIydXNlcm5hbWUlMjIlM0JzJTNBMzIlM0ElMjIwOThmNmJjZDQ2MjFkMzczY2FkZTRlODMyNjI3YjRmNiUyMiUzQnMlM0E4JTNBJTIycGFzc3dvcmQlMjIlM0JzJTNBMzIlM0ElMjIwOThmNmJjZDQ2MjFkMzczY2FkZTRlODMyNjI3YjRmNiUyMiUzQnMlM0E3JTNBJTIyaXNBZG1pbiUyMiUzQmklM0EwJTNCJTdE=='
  ) {
    return res
      .status(200)
      .json({ message: 'Login successful', data: { username } });
  }
  // Handle "admin" user login
  if (
    (username === 'admin' && password === 'admin') ||
    session ===
      'TyUzQTQlM0ElMjJVc2VyJTIyJTNBMyUzQSU3QnMlM0E4JTNBJTIydXNlcm5hbWUlMjIlM0JzJTNBMzIlM0ElMjIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMyUyMiUzQnMlM0E4JTNBJTIycGFzc3dvcmQlMjIlM0JzJTNBMzIlM0ElMjIyMTIzMmYyOTdhNTdhNWE3NDM4OTRhMGU0YTgwMWZjMyUyMiUzQnMlM0E3JTNBJTIyaXNBZG1pbiUyMiUzQmklM0EwJTNCJTdE'
  ) {
    return res
      .status(200)
      .json({ message: 'Login successful', data: { username } });
  }

  // Invalid credentials
  return res.status(401).json({ error: 'Invalid username or password' });
};
