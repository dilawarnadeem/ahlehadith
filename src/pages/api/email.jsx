// pages/api/contact.js
export default function (req, res) {
  let nodemailer = require("nodemailer");

  const EMAIL = "softsgens@gmail.com";
  const GMAIL_PASSWORD = "bczjxzfatgxsebrz";

  const adminEmails = ["softsgens@gmail.com", "mjah106@gmail.com"];

  // step-1
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL,
      pass: GMAIL_PASSWORD,
    },
    secure: true,
  });

  // step-2
  const mailData = {
    from: EMAIL,
    to: adminEmails.join(","), // Join admin emails with commas
    subject: `Message From ${
      req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1)
    }`,
    text: req.body.comment + " | Sent from: " + req.body.email,
    html: `
          <p><strong>Name: </strong> ${req.body.name}</p>
          <p><strong>Email: </strong> ${req.body.email}</p>
          <p><strong>Phone number: </strong> ${req.body.Address}</p>
          <p><strong>Comments: </strong> ${req.body.comment}</p> `,
  };

  // step-3
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(500).json({ message: "Failed to send email", error: err });
    } else {
      res.status(200).json({ message: "Email sent!", info });
    }
  });
}
