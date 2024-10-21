// app/api/sendEmail/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  const { username, email, message } = await request.json();

  // Configurer le transporteur de messagerie
  const transporter = nodemailer.createTransport({
    service: "gmail", // Utilise le service souhaité (Gmail, SendGrid, Mailgun)
    auth: {
      user: process.env.EMAIL_USER, // Ton email
      pass: process.env.EMAIL_PASS, // Ton mot de passe ou app password si Gmail
    },
  });

  try {
    // Envoi de l'email
    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVING_EMAIL, // Ton adresse pour recevoir les messages
      subject: `[Portfolio] - New message from ${username}`,
      text: message,
      html: `<p>Nouveau message provenant du portfolio:</p><p><strong>Name: </strong> ${username}</p><p><strong>Email: </strong> ${email}</p><p><strong>Message: </strong> ${message}</p>`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
