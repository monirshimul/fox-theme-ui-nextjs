import smtpTransporter from "../../api/lib/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let info = await smtpTransporter.sendMail({
      from: `"Client Message 👻" <${req.body.email}>`, // sender address
      to: "nahid@foxcatcherits.com, mahbub@foxcatcherits.com, contact@foxcatcherits.com", // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.message, // plain text body
      html: `<b>${req.body.message}</b>`, // html body
    });

    console.log("[INFO] Message sent: %s", info.messageId);

    return res.status(200).json({
      message: "Request Successful",
      data: {
        id: info.messageId,
      },
    });
  } else {
    return res.status(404).json({
      message: "Request Method is not Allowed",
    });
  }
}
