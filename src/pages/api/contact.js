
// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     // Log the incoming data
//     console.log('Incoming data:', req.body);

//     // Your existing Mailgun code
//     const mailgun = require("mailgun-js");
//     const DOMAIN = "sandbox0deea3ee92fe4043b135d482f56373aa.mailgun.org";
//     const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });

//     // Construct HTML content for the email
//     const htmlContent = `
//       <p>Name: ${req.body.name}</p>
//       <p>Email: ${req.body.email}</p>
//       <p>Phone: ${req.body.phone}</p>
//       <p>Subject: ${req.body.subject}</p>
//       <p>Message: ${req.body.message}</p>
//     `;

//     const data = {
//       from: "Mailgun Sandbox <postmaster@sandbox0deea3ee92fe4043b135d482f56373aa.mailgun.org>",
//       to: "sebastian.sibila@gmail.com",
//       subject: req.body.subject,
//       html: htmlContent, // Provide HTML content here
//     };

//     // Send email with HTML content
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
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
      } else {
        console.log('Email sent:', body);
        res.status(200).json({ message: 'Email sent successfully!' });
      }
    });
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

