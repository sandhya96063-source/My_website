const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send", async (req, res) => {
  const { name, email, number, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sandhya96063@gmail.com",
      pass: "dvlsohwxuxhlnknm"
    }
  });

  const mailOptions = {
    from: email,s
    to: "yourgmail@gmail.com",
    subject: "Contact Form Message",
    text: `
Name: ${name}
Email: ${email}
Phone: ${number}
Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error sending email");
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});