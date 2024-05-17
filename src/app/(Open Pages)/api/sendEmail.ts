import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer'

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: "sabil.danish1997@gmail.com", // your email address to send from
        pass: "pudj tlpl wtfk pfln", // your email account password
      },
    });

    const mailOptions = {
      from: "sabil.danish1997@gmail.com", // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email: ', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default sendEmail;