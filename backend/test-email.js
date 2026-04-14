require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function test() {
  try {
    await transporter.verify();
    console.log('✅ Email configured correctly!');
    console.log(`📧 Sending from: ${process.env.EMAIL_USER}`);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

test();