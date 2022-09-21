import nodemailer from "nodemailer";

const smtpTransporter = nodemailer.createTransport({
  pool: true,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // use TLS later
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

console.log("[INFO] init mail client");

export default smtpTransporter;
