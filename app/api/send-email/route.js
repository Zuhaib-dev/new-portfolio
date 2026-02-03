import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to you (original functionality)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: 'zuhaibrashid01@gmail.com',
      subject: `🚀 New Portfolio Contact from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
            
            <!-- Header with gradient -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: white; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                ✨ New Contact Message
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                Someone wants to connect with you!
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Contact Info Card -->
              <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <div style="margin-bottom: 16px;">
                  <div style="display: inline-block; background: white; padding: 8px 16px; border-radius: 20px; margin-bottom: 8px;">
                    <span style="color: #667eea; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">👤 Name</span>
                  </div>
                  <p style="margin: 0; font-size: 18px; font-weight: 600; color: #2d3748;">${name}</p>
                </div>
                
                <div>
                  <div style="display: inline-block; background: white; padding: 8px 16px; border-radius: 20px; margin-bottom: 8px;">
                    <span style="color: #667eea; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">📧 Email</span>
                  </div>
                  <p style="margin: 0; font-size: 16px; color: #4a5568;">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-weight: 500;">${email}</a>
                  </p>
                </div>
              </div>

              <!-- Message Card -->
              <div style="background: #f7fafc; border-left: 4px solid #667eea; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                <div style="display: inline-block; background: white; padding: 8px 16px; border-radius: 20px; margin-bottom: 12px;">
                  <span style="color: #667eea; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">💬 Message</span>
                </div>
                <p style="margin: 0; color: #2d3748; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
              </div>

              <!-- CTA Button -->
              <div style="text-align: center; margin-top: 32px;">
                <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: transform 0.2s;">
                  Reply Now →
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #f7fafc; padding: 24px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #718096; font-size: 13px;">
                Sent from your portfolio at <strong style="color: #667eea;">zuhaibrashid.com</strong>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Confirmation email to user
    const mailOptionsToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '✨ Thanks for reaching out!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 30px; text-align: center; position: relative;">
              <div style="font-size: 48px; margin-bottom: 16px;">🎉</div>
              <h1 style="margin: 0; color: white; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                Message Received!
              </h1>
              <p style="margin: 12px 0 0 0; color: rgba(255,255,255,0.95); font-size: 16px; line-height: 1.5;">
                Thanks for reaching out, ${name}!
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Main Message -->
              <div style="text-align: center; margin-bottom: 32px;">
                <p style="margin: 0 0 16px 0; color: #2d3748; font-size: 17px; line-height: 1.7;">
                  I've received your message and I'm excited to connect with you! 🚀
                </p>
                <p style="margin: 0; color: #4a5568; font-size: 15px; line-height: 1.6;">
                  I'll review your message and get back to you as soon as possible, usually within <strong style="color: #667eea;">24-48 hours</strong>.
                </p>
              </div>

              <!-- Message Summary -->
              <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                <div style="text-align: center; margin-bottom: 16px;">
                  <span style="background: white; padding: 8px 20px; border-radius: 20px; color: #667eea; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">
                    📝 Your Message
                  </span>
                </div>
                <div style="background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                  <p style="margin: 0; color: #2d3748; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- What's Next -->
              <div style="background: #f7fafc; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                <h3 style="margin: 0 0 16px 0; color: #2d3748; font-size: 18px; font-weight: 600;">
                  ⏭️ What happens next?
                </h3>
                <ul style="margin: 0; padding-left: 20px; color: #4a5568; font-size: 14px; line-height: 1.8;">
                  <li style="margin-bottom: 8px;">I'll review your message carefully</li>
                  <li style="margin-bottom: 8px;">You'll receive a personalized response from me</li>
                  <li>We can discuss your project or opportunity in detail</li>
                </ul>
              </div>

              <!-- Social Links -->
              <div style="text-align: center; padding: 24px 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
                <p style="margin: 0 0 16px 0; color: #718096; font-size: 14px; font-weight: 600;">
                  Connect with me:
                </p>
                <div style="display: inline-block;">
                  <a href="https://github.com/Zuhaib-dev" style="display: inline-block; margin: 0 8px; color: #667eea; text-decoration: none; font-size: 13px; font-weight: 500;">
                    GitHub
                  </a>
                  <span style="color: #cbd5e0;">•</span>
                  <a href="https://www.linkedin.com/in/zuhaib-rashid-661345318/" style="display: inline-block; margin: 0 8px; color: #667eea; text-decoration: none; font-size: 13px; font-weight: 500;">
                    LinkedIn
                  </a>
                  <span style="color: #cbd5e0;">•</span>
                  <a href="https://x.com/xuhaibx9" style="display: inline-block; margin: 0 8px; color: #667eea; text-decoration: none; font-size: 13px; font-weight: 500;">
                    Twitter
                  </a>
                </div>
              </div>

              <!-- Signature -->
              <div style="margin-top: 32px; text-align: center;">
                <p style="margin: 0 0 8px 0; color: #2d3748; font-size: 16px;">
                  Best regards,
                </p>
                <p style="margin: 0; color: #667eea; font-size: 20px; font-weight: 700;">
                  Zuhaib Rashid
                </p>
                <p style="margin: 4px 0 0 0; color: #718096; font-size: 13px;">
                  Frontend Developer | React.js & Next.js Specialist
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background: #f7fafc; padding: 24px 30px; text-align: center;">
              <p style="margin: 0 0 8px 0; color: #4a5568; font-size: 13px; line-height: 1.6;">
                This is an automated confirmation. Please don't reply to this email.
              </p>
              <p style="margin: 0; color: #718096; font-size: 12px;">
                © 2026 Zuhaib Rashid • <a href="https://zuhaibrashid.com" style="color: #667eea; text-decoration: none;">zuhaibrashid.com</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsToYou),
      transporter.sendMail(mailOptionsToUser)
    ])

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    )
  }
}