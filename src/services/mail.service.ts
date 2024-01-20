import nodemailer, { Transporter } from 'nodemailer';
import { google } from 'googleapis';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transportFactory = (accessToken: string): SMTPTransport.Options => ({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USER,
    clientId: process.env.MAIL_CLIENT_ID,
    clientSecret: process.env.MAIL_CLIENT_SECRET,
    accessToken,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const mailFactory = async (
  callback: (transporter: Transporter) => void | Promise<void>
) => {
  const oauthClient = new google.auth.OAuth2({
    credentials: { refresh_token: process.env.OAUTH_REFRESH_TOKEN },
    clientId: process.env.MAIL_CLIENT_ID,
    clientSecret: process.env.MAIL_CLIENT_SECRET,
    redirectUri: process.env.OAUTH_REDIRECT_URL,
  });

  oauthClient.getAccessToken((err, token) => {
    if (err) {
      console.error(err);
      return;
    }
    const transport = transportFactory(token!);
    console.log(transport);
    callback(nodemailer.createTransport(transport));
  });
};

export const sendMail = async (
  subject: string,
  to: string,
  template: string
) => {
  await mailFactory(async (transport) => {
    try {
      await transport.sendMail({
        from: process.env.MAIL_USER,
        to: to,
        subject: subject,
        html: template,
      });
    } catch (e) {
      console.error(e);
    }
  });
};
