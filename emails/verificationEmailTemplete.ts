const VERIFICATION_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verify Your Email</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f4f4f9;
      }
      .header {
        background-color: #222;
        padding: 20px;
        text-align: center;
        border-radius: 8px 8px 0 0;
      }
      .header h1 {
        color: #fff;
        font-size: 24px;
        margin: 0;
      }
      .content {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      .content p {
        margin: 15px 0;
        font-size: 16px;
        color: #555;
      }
      .code-box {
        text-align: center;
        margin: 30px 0;
        padding: 10px;
        background-color: #f0f4f8;
        border-radius: 5px;
      }
      .code-box span {
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 5px;
        color: #222;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        color: #888;
        font-size: 0.8em;
      }
      .button {
        display: inline-block;
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 16px;
        color: #ffffff;
        background-color: #4caf50;
        text-align: center;
        text-decoration: none;
        border-radius: 5px;
      }
      .button:hover {
        background-color: #45a049;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>Verify Your Email</h1>
    </div>
    <div class="content">
      <p>Hello, {username}</p>
      <p>Thank you for signing up! Your verification code is:</p>
      <div class="code-box">
        <span>{verificationCode}</span>
      </div>
      <p>
        Enter this code on the verification page to complete your registration.
      </p>
      <p>This code will expire in 15 minutes for security reasons.</p>
      <p>If you didn't create an account with us, please ignore this email.</p>
      <p>Best regards,<br />Your App Team</p>
    </div>
    <div class="footer">
      <p>This is an automated message, please do not reply to this email.</p>
    </div>
  </body>
</html>
`;

export default VERIFICATION_EMAIL_TEMPLATE;
