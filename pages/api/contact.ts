// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

async function sendEmail(data: {
  email: string;
  name: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_APP_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const email = await transporter.sendMail({
    from: data.email,
    to: process.env.EMAIL_RECEIVER,
    subject: `${data.name} wants to connect!`,
    text: data.message,
    html: `
    <div>
    <h1>${data.name} wants to connect with you!</h1>
    <p>${data.message}</p>
    <p>${data.email}</p>
    </div>
    `,
  });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, message } = req.body;
  const data = {
    email,
    name,
    message,
  };

  if (req.method === "POST") {
    try {
      sendEmail(data);
      res.status(200).json({ message: "Email sent" });
    } catch (error) {
      console.log(error);
    }
  }
}
