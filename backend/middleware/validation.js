const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;
  const errors = [];

  // Validate name
  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Please provide a valid email address');
  }

  // Validate message
  if (!message || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  next();
};

// Rate limiting for contact form
const rateLimit = require('express-rate-limit');

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per window
  message: { success: false, error: 'Too many requests. Please try again later.' },
});

module.exports = { validateContactForm, contactLimiter };