const express = require('express');
const router = express.Router();
const { supabaseAdmin } = require('../config/supabase');
const nodemailer = require('nodemailer');
const twilio = require('twilio');

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Initialize Twilio client (for WhatsApp notifications)
let twilioClient = null;
if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_ACCOUNT_SID !== 'your_account_sid_here') {
  twilioClient = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  console.log('✅ WhatsApp notifications enabled');
} else {
  console.log('⚠️ WhatsApp notifications disabled (configure Twilio to enable)');
}

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  const { name, email, projectType, message } = req.body;

  console.log('📨 Received submission from:', name);

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Name, email, and message are required' 
    });
  }

  try {
    // 1. Save to Supabase
    const { data, error } = await supabaseAdmin
      .from('contacts')
      .insert([
        {
          name: name.trim(),
          email: email.toLowerCase(),
          project_type: projectType || null,
          message: message.trim(),
          status: 'unread',
        },
      ])
      .select();

    if (error) throw error;

    console.log('✅ Saved to Supabase, ID:', data[0].id);

    // 2. Send Email Notification to YOU
    try {
      await transporter.sendMail({
        from: `"EA TechLabs Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `🔔 New Contact: ${name} wants to discuss a ${projectType || 'project'}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; }
              .container { max-width: 600px; margin: 0 auto; }
              .header { background: #0A192F; color: white; padding: 20px; text-align: center; }
              .content { padding: 20px; background: #f9f9f9; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #0A192F; }
              .value { margin-top: 5px; color: #333; }
              .message-box { background: white; padding: 15px; border-radius: 8px; margin-top: 10px; }
              .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📬 New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">💼 Project Type:</div>
                  <div class="value">${projectType || 'Not specified'}</div>
                </div>
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>Reply directly to this email to contact ${name}</p>
                <p>View all submissions in your Admin Dashboard</p>
              </div>
            </div>
          </body>
          </html>
        `,
      });
      console.log('📧 Email notification sent to:', process.env.EMAIL_USER);
    } catch (emailError) {
      console.error('❌ Email failed to send:', emailError.message);
    }

    // 3. Send Auto-reply to the person who contacted you
    try {
      await transporter.sendMail({
        from: `"EA TechLabs" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Thank you for contacting EA TechLabs',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #0A192F;">Thank you for reaching out!</h2>
            <p>Dear ${name},</p>
            <p>Thank you for contacting EA TechLabs. I have received your message regarding <strong>${projectType || 'your project'}</strong>.</p>
            <p>I will review your inquiry and get back to you within 24 hours.</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Your message:</strong></p>
              <p style="margin: 10px 0 0 0;">${message}</p>
            </div>
            <p>In the meantime, feel free to reach out via WhatsApp at +256 769 463 447 for urgent matters.</p>
            <br>
            <p>Best regards,<br>
            <strong>Erjok Agot</strong><br>
            Founder, EA TechLabs</p>
          </div>
        `,
      });
      console.log('📧 Auto-reply sent to:', email);
    } catch (autoReplyError) {
      console.error('❌ Auto-reply failed:', autoReplyError.message);
    }

    // 4. Send WhatsApp Notification to YOUR PERSONAL number (if Twilio is configured)
    if (twilioClient && process.env.NOTIFICATION_WHATSAPP) {
      try {
        await twilioClient.messages.create({
          body: `🔔 *NEW CONTACT FORM!*\n\n*Name:* ${name}\n*Email:* ${email}\n*Project:* ${projectType || 'Not specified'}\n*Message:* ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}\n\n📱 Respond from your business phone: +256 769 463 447`,
          from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
          to: `whatsapp:${process.env.NOTIFICATION_WHATSAPP}`,
        });
        console.log('📱 WhatsApp notification sent to personal number');
      } catch (whatsappError) {
        console.error('❌ WhatsApp notification error:', whatsappError.message);
      }
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you within 24 hours.',
    });

  } catch (error) {
    console.error('❌ Server error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Something went wrong. Please try again or email directly at erjokagottechlabs@gmail.com' 
    });
  }
});

// GET /api/contact - Get all contacts (for admin dashboard)
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabaseAdmin
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ success: false, error: error.message });
    }

    res.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch contacts' });
  }
});

// PUT /api/contact/:id/status - Update contact status (mark as read/unread)
router.put('/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const { data, error } = await supabaseAdmin
      .from('contacts')
      .update({ status: status })
      .eq('id', id)
      .select();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({ success: false, error: 'Failed to update status' });
  }
});

module.exports = router;