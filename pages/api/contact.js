import nodemailer from "nodemailer";
const getRecipientList = (phoneNo) => {
  const isTest = phoneNo === "0123456789";
  if (isTest) {
    return "singhvishal7688@gmail.com, digitalsbydeeksha@gmail.com";
  }
  return "digitalsbydeeksha@gmail.com";
};

export default async (req, res) => {
  const { name, email, phoneNo, companyName, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  if (true) {
    try {
      await transporter.sendMail({
        from: "Digitalsbydee<digitalsbydeeksha@gmail.com>",
        to: getRecipientList(phoneNo),
        cc: "",
        bcc: `vishal@headsupcorporation.com`,
        subject: `Received a mail from contact  Page`,
        html: `
        <h1>Message Received From promo ads Headsup Corporation page</h1>
        <label>Name : ${name} </label><br><br>
        <label>Email : ${email} </label><br><br>
        <label>Contact : ${phoneNo}</label><br><br>
        <label>Company Name : ${companyName} </label><br><br>
        <label>Message : ${message} </label><br><br>
      `,
      });
      return res.status(200).json({ success: "Mail Sent" });
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  }
};
