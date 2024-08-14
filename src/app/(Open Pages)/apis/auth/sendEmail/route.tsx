import { NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { email } = await req.json();

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,//"sabil.danish1997@gmail.com", // your email address to send from
        pass: process.env.EMAIL_PASS//"pudj tlpl wtfk pfln", // your email account password
      },
    });

    const mailOptions = {
      from: "sabil.danish1997@gmail.com", // sender address
      to: email, // list of receivers
      subject: 'Email Received', // Subject line
      html: '<h1>Your Email is Received</h1><p>We have received your email: ' + email + '</p>'
    };

    try {
      let info = await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "success" }, { status: 200 });
    } catch (error) {
      console.error('Error sending email: ', error);
      return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
  } else {
    
  }
};
