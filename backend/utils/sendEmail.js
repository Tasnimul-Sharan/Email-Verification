const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
    // auth: {
    //   user: process.env.EMAIL_USER,
    //   pass: process.env.EMAIL_PASS,
    // },
//   });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: options.to,
    subject: options.subject,
    text: options.text,
  };

//   await transporter.sendMail(mailOptions);
  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Email sending failed');
  }
};

module.exports = sendEmail;


// const nodemailer = require('nodemailer');

// const sendEmail = async (options) => {
//   // Create a transport object using Mailtrap SMTP settings
//   const transporter = nodemailer.createTransport({
//     host: 'sandbox.smtp.mailtrap.io',
//     port: 2525,
//     auth: {
//       user: 'c37b812bd5688a', // Replace with your Mailtrap user
//       pass: '618f04a7fac417', // Replace with your Mailtrap password
//     },
//   });

//   // Define the email options
//   const mailOptions = {
//     from: process.env.EMAIL_USER, // Your email address (can be any email for testing)
//     to: options.to,
//     subject: options.subject,
//     text: options.text,
//   };

//   try {
//     // Send the email
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error('Failed to send email:', error);
//     throw new Error('Email sending failed');
//   }
// };

// module.exports = sendEmail;
