import nodemailer from "nodemailer";
import VERIFICATION_EMAIL_TEMPLATE from "../../emails/verificationEmailTemplete";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
) {
  try {
    console.log("verifyCode ", verifyCode);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      tls: {
        ciphers: "SSLv3",
      },
      auth: {
        user: "zaryabimran222@gmail.com",
        pass: "crfrkmtahuxjgkne",
      },
    });
    const mailOptions = {
      from: "zaryabimran222@gmail.com",
      to: email,
      subject: "Mystery Message | Verification Code",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verifyCode
      ).replace("{username}", username),
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Error while sending mail", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log("error", error);
  }
}
