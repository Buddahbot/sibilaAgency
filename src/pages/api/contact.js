// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;

//     // Create Nodemailer transporter using SendGrid transport
//     const transporter = nodemailer.createTransport({
//       service: "MailGun",
//       auth: {
//         api_key:
//           "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",
//         // process.env.SENDGRID_API_KEY,
//       },
//     });

//     try {
//       // Send email
//       await transporter.sendMail({
//         from: email, // Use the email provided by the user as the "from" address
//         to: "sebastian.sibila@egmail.com", // Change this to the recipient's email address
//         subject: "New message from contact form",
//         // text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//         text: "hello",
//       });

//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       res.status(500).json({ success: false, error: "Failed to send email" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }

// const mailgun = require("mailgun-js");
// const DOMAIN = "sandbox0deea3ee92fe4043b135d482f56373aa.mailgun.org";
// const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });
// const data = {
//   from: "Mailgun Sandbox <postmaster@sandbox0deea3ee92fe4043b135d482f56373aa.mailgun.org>",
//   to: "sebastian.sibila@gmail.com",
//   subject: "Helloooo",
//   text: "Testing some Mailgun awesomness!",
// };
// mg.messages().send(data, function (error, body) {
//   console.log(body);
// });


// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     // Log the incoming data
//     console.log('Incoming data:', req.body);

//     // Your existing Mailgun code
//     const mailgun = require("mailgun-js");
//     const DOMAIN = "sandbox0deea3ee92fe4043b135d482f56373aa.mailgun.org";
//     const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });
//     const data = {
//       from: "Mailgun Sandbox <postmaster@sandbox0deea3ee92fe4043b135d482f56373aa.mailgun.org>",
//       to: "sebastian.sibila@gmail.com",
//       name: req.body.name,
//       email: req.body.email,
//       phone: req.body.phone,
//       subject: req.body.subject,
//       text: req.body.message,
//     };
//     mg.messages().send(data, function (error, body) {
//       console.log(body);
//     });

//     // Send a response
//     res.status(200).json({ message: 'Email sent successfully!' });
//   } else {
//     // Handle other HTTP methods
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Log the incoming data
    console.log('Incoming data:', req.body);

    // Your existing Mailgun code
    const mailgun = require("mailgun-js");
    const DOMAIN = "sandbox0deea3ee92fe4043b135d482f56373aa.mailgun.org";
    const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });

    // Construct HTML content for the email
    const htmlContent = `
      <p>Name: ${req.body.name}</p>
      <p>Email: ${req.body.email}</p>
      <p>Phone: ${req.body.phone}</p>
      <p>Subject: ${req.body.subject}</p>
      <p>Message: ${req.body.message}</p>
    `;

    const data = {
      from: "Mailgun Sandbox <postmaster@sandbox0deea3ee92fe4043b135d482f56373aa.mailgun.org>",
      to: "sebastian.sibila@gmail.com",
      subject: req.body.subject,
      html: htmlContent, // Provide HTML content here
    };

    // Send email with HTML content
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });

    // Send a response
    res.status(200).json({ message: 'Email sent successfully!' });
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

