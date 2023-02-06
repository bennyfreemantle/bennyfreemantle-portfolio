// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

async function sendEmail(data: {
  email: string;
  name: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    secure: true,
    port: 465,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_APP_PASSWORD,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: process.env.ZOHO_EMAIL,
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
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
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
