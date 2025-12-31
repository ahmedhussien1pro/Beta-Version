import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import type { Attachment } from 'nodemailer/lib/mailer';

const MAIL_BANNER_FILENAME = 'mail_photo.png';
const MAIL_BANNER_CID = 'cyberlabs-verification-banner';
const MAIL_BANNER_PATH = path.join(__dirname, 'assets', MAIL_BANNER_FILENAME);

class MailerClient {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.APP_PASSWORD,
            },
        });
    }

    async sendVerificationCode(toEmail: string, code: string): Promise<void> {
        const bannerAttachment = this.buildBannerAttachment();
        const attachments = bannerAttachment ? [bannerAttachment] : undefined;
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: toEmail,
            subject: 'Your Verification Code',
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(150deg, #0b1b3b, #114c8f); color: #f5f8ff; border-radius: 12px; overflow: hidden;">
                    <div style="background: #04102c; padding: 20px 30px;">
                        <h1 style="margin: 0; font-size: 28px; letter-spacing: 1px;">CyberLabs Verification</h1>
                        <p style="margin: 8px 0 0; color: #9fb4dd;">Secure your account in just one step.</p>
                    </div>
                    ${bannerAttachment ? `<img src="cid:${MAIL_BANNER_CID}" alt="CyberLabs Email Verification" style="display: block; width: 100%; max-height: 260px; object-fit: cover;" />` : ''}
                    <div style="padding: 30px;">
                        <p style="margin: 0 0 15px;">Hello,</p>
                        <p style="margin: 0 0 20px;">Use the one-time verification code below to finish setting up your CyberLabs account:</p>
                        <div style="background: #0b2447; border: 1px solid #1b4b8c; padding: 18px; text-align: center; font-size: 36px; font-weight: 700; letter-spacing: 8px; border-radius: 10px; color: #50c4ff;">
                            ${code}
                        </div>
                        <p style="margin: 24px 0 12px; color: #d0def5;">This code expires in 10 minutes. If you didn’t request it, you can safely ignore this email.</p>
                        <p style="margin: 0; color: #9fb4dd;">— The CyberLabs Security Team</p>
                    </div>
                </div>
            `,
            text: `Your verification code is: ${code}. This code will expire in 10 minutes.`,
            ...(attachments ? { attachments } : {}),
        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Verification email sent:', info.response);
        } catch (error) {
            console.error('Error sending verification email:', error);
            throw new Error('Failed to send verification email');
        }
    }

    async sendPasswordResetCode(toEmail: string, code: string): Promise<void> {
        const bannerAttachment = this.buildBannerAttachment();
        const attachments = bannerAttachment ? [bannerAttachment] : undefined;
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: toEmail,
            subject: 'Password Reset Code',
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(150deg, #0b1b3b, #114c8f); color: #f5f8ff; border-radius: 12px; overflow: hidden;">
                    <div style="background: #04102c; padding: 20px 30px;">
                        <h1 style="margin: 0; font-size: 28px; letter-spacing: 1px;">CyberLabs Password Reset</h1>
                        <p style="margin: 8px 0 0; color: #9fb4dd;">Reset your password securely.</p>
                    </div>
                    ${bannerAttachment ? `<img src="cid:${MAIL_BANNER_CID}" alt="CyberLabs Password Reset" style="display: block; width: 100%; max-height: 260px; object-fit: cover;" />` : ''}
                    <div style="padding: 30px;">
                        <p style="margin: 0 0 15px;">Hello,</p>
                        <p style="margin: 0 0 20px;">You requested a password reset. Enter the code below to continue:</p>
                        <div style="background: #0b2447; border: 1px solid #1b4b8c; padding: 18px; text-align: center; font-size: 36px; font-weight: 700; letter-spacing: 8px; border-radius: 10px; color: #50c4ff;">
                            ${code}
                        </div>
                        <p style="margin: 24px 0 12px; color: #d0def5;">This code expires in 10 minutes. If you didn’t request a reset, ignore this email and your password will remain unchanged.</p>
                        <p style="margin: 0; color: #9fb4dd;">— The CyberLabs Security Team</p>
                    </div>
                </div>
            `,
            text: `Your password reset code is: ${code}. This code will expire in 10 minutes.`,
            ...(attachments ? { attachments } : {}),
        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Password reset email sent:', info.response);
        } catch (error) {
            console.error('Error sending password reset email:', error);
            throw new Error('Failed to send password reset email');
        }
    }

    private buildBannerAttachment(): Attachment | undefined {
        if (!fs.existsSync(MAIL_BANNER_PATH)) {
            return undefined;
        }

        return {
            filename: MAIL_BANNER_FILENAME,
            path: MAIL_BANNER_PATH,
            cid: MAIL_BANNER_CID,
        };
    }
}

export const mailerClient = new MailerClient();
