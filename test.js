const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'test@example.com',
  from: 'your-verified-sender@yourdomain.com', // Use the email address you've verified with SendGrid
  subject: 'SendGrid Test',
  text: 'This is a test email from SendGrid',
};

sgMail.send(msg)
  .then(() => console.log('Email sent'))
  .catch((error) => console.error(error));