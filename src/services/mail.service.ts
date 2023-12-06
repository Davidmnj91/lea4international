import nodemailer from 'nodemailer';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 1025,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});
export const sendMail = async (
  subject: string,
  to: string,
  template: string
) => {
  await transport.sendMail({
    from: process.env.MAIL_USER,
    to: to,
    subject: subject,
    html: template,
  });
};
