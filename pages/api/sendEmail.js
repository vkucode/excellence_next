import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prenom, nom, email, telephone, type_projet, code_postal, message } =
      req.body;

    console.log("Received form data:", req.body);

    // Configurarea nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "contact@excellencebtp.com",
      subject: `Nouveau message de ${prenom} ${nom}`,
      text: `
                Prenom: ${prenom}
                Nom: ${nom}
                Email: ${email}
                Telefon: ${telephone}
                Tip Proiect: ${type_projet}
                Cod Postal: ${code_postal}
                Mesaj: ${message}
            `,
    };

    const confirmationOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Confirmation de réception du message",
      text: "Nous avons reçu votre message et vous contacterons sous peu. Merci!",
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: ", info.response);

      const confirmationInfo = await transporter.sendMail(confirmationOptions);
      console.log("Confirmation email sent: ", confirmationInfo.response);

      res.status(200).json({ message: "Email trimis cu succes" });
    } catch (error) {
      console.error("Error sending email: ", error);
      res.status(500).json({ error: "Eroare la trimiterea email-ului" });
    }
  } else {
    res.status(405).json({ error: "Metoda nu este permisă" });
  }
}
