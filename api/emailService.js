import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

/**
 * Sends customer enquiry email to Capsule Company official inbox
 */
export async function sendEnquiryEmail(data) {
  const {
    firstName,
    lastName,
    mobileNumber,
    altMobileNumber,
    email,
    locationAddress,
    source = 'Free Consultation',
  } = data;

  // Validate required 6 fields
  if (!firstName || !lastName || !mobileNumber || !altMobileNumber || !email || !locationAddress) {
    throw new Error('All 6 fields are mandatory: First Name, Last Name, Mobile Number, Alternative Mobile Number, Email Address, Location / Address.');
  }

  const toEmail = process.env.TO_EMAIL || 'Workscapsule@gmail.com';
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
  const smtpUser = process.env.SMTP_USER || 'Workscapsule@gmail.com';
  const smtpPass = process.env.SMTP_PASS;

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const subject = `[New Enquiry - ${source}] ${firstName} ${lastName} (${locationAddress})`;

  const textContent = `
=========================================
CAPSULE COMPANY - NEW CUSTOMER ENQUIRY
=========================================

Source / Button Used: ${source}
Submission Time: ${timestamp}

CUSTOMER DETAILS:
-----------------------------------------
• First Name: ${firstName}
• Last Name: ${lastName}
• Mobile Number: ${mobileNumber}
• Alternative Mobile Number: ${altMobileNumber}
• Email Address: ${email}
• Location / Address: ${locationAddress}

=========================================
Please respond to this customer promptly.
`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F3ED; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #E5DFD7; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
    .header { background-color: #0A0A0A; padding: 24px 32px; border-bottom: 3px solid #B86D43; }
    .header h1 { color: #ffffff; margin: 0 0 6px 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase; }
    .header p { color: #B86D43; margin: 0; font-size: 12px; letter-spacing: 1px; font-weight: bold; text-transform: uppercase; }
    .badge-bar { background: #F3ECE2; padding: 14px 32px; border-bottom: 1px solid #E5DFD7; }
    .badge { display: inline-block; background: #B86D43; color: #ffffff; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; }
    .content { padding: 32px; }
    .table { width: 100%; border-collapse: collapse; margin-top: 10px; }
    .table td { padding: 12px 14px; border-bottom: 1px solid #F0ECE4; font-size: 14px; vertical-align: top; }
    .table td.label { width: 38%; font-weight: bold; color: #4A4A4A; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
    .table td.val { color: #0A0A0A; font-weight: 500; }
    .highlight { color: #B86D43; font-weight: bold; }
    .footer { background-color: #FAF8F5; padding: 20px 32px; text-align: center; font-size: 11px; color: #888888; border-top: 1px solid #E5DFD7; }
    .btn { display: inline-block; background: #0A0A0A; color: #ffffff !important; padding: 8px 18px; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: bold; margin-top: 4px; }
    .btn-wa { background: #25D366; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>CAPSULE COMPANY</h1>
      <p>NEW WEBSITE ENQUIRY RECEIVED</p>
    </div>
    <div class="badge-bar">
      <span>Originating Action: </span>
      <span class="badge">${source}</span>
    </div>
    <div class="content">
      <table class="table">
        <tr>
          <td class="label">First Name</td>
          <td class="val"><strong>${firstName}</strong></td>
        </tr>
        <tr>
          <td class="label">Last Name</td>
          <td class="val"><strong>${lastName}</strong></td>
        </tr>
        <tr>
          <td class="label">Mobile Number</td>
          <td class="val">
            <a href="tel:${mobileNumber}" style="color: #0A0A0A; text-decoration: none; font-weight: bold;">${mobileNumber}</a>
            &nbsp;
            <a href="https://wa.me/91${mobileNumber.replace(/\D/g, '').slice(-10)}" class="btn btn-wa" style="font-size:10px; padding:3px 8px;" target="_blank">Chat WhatsApp</a>
          </td>
        </tr>
        <tr>
          <td class="label">Alternative Mobile</td>
          <td class="val"><a href="tel:${altMobileNumber}" style="color: #0A0A0A; text-decoration: none;">${altMobileNumber}</a></td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="val"><a href="mailto:${email}" style="color: #B86D43; text-decoration: underline;">${email}</a></td>
        </tr>
        <tr>
          <td class="label">Location / Address</td>
          <td class="val" style="line-height: 1.5;">${locationAddress}</td>
        </tr>
        <tr>
          <td class="label">Received At</td>
          <td class="val" style="color: #666; font-size: 12px;">${timestamp}</td>
        </tr>
      </table>
    </div>
    <div class="footer">
      This lead was automatically captured from <strong>capsulecompany.in</strong> enquiry form.<br/>
      Reply directly to this email to reach <strong>${firstName} ${lastName}</strong>.
    </div>
  </div>
</body>
</html>
`;

  // Always log lead to local backup json
  try {
    const backupFile = path.resolve(process.cwd(), 'scratch', 'enquiries_backup.json');
    fs.mkdirSync(path.dirname(backupFile), { recursive: true });
    let existing = [];
    if (fs.existsSync(backupFile)) {
      try { existing = JSON.parse(fs.readFileSync(backupFile, 'utf-8')); } catch (_) {}
    }
    existing.push({
      ...data,
      receivedAt: timestamp,
      id: `enquiry_${Date.now()}`
    });
    fs.writeFileSync(backupFile, JSON.stringify(existing, null, 2));
  } catch (err) {
    console.error('Failed to write backup log:', err);
  }

  // If SMTP password is not yet configured, log clearly and simulate delivery
  if (!smtpPass) {
    console.log('\n[ENQUIRY RECEIVED - SMTP_PASS not set in .env]');
    console.log(`To: ${toEmail}`);
    console.log(`Source: ${source}`);
    console.log(`Customer: ${firstName} ${lastName} | ${mobileNumber} | ${email} | ${locationAddress}`);
    console.log('[Note: Add SMTP_PASS to .env to deliver real emails to Workscapsule@gmail.com]\n');
    return {
      success: true,
      delivered: false,
      message: 'Enquiry recorded successfully. Set SMTP_PASS in .env for live inbox delivery.',
      lead: { firstName, lastName, mobileNumber, email, source }
    };
  }

  // Create real SMTP transport
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    // Useful for local environments or SSL certificate chains
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: `"Capsule Company Website" <${smtpUser}>`,
    to: toEmail,
    replyTo: `"${firstName} ${lastName}" <${email}>`,
    subject: subject,
    text: textContent,
    html: htmlContent,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log(`[ENQUIRY EMAIL SENT] Message ID: ${info.messageId} to ${toEmail}`);

  return {
    success: true,
    delivered: true,
    messageId: info.messageId,
  };
}
