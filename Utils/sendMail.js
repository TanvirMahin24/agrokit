const path = require("path");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const hbs = require("nodemailer-express-handlebars");

// Config
const {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
  REDIRECT_URL,
  fromAdress,
  userMail,
} = process.env;

// Google API client
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Send Mail Method
const sendMail = async (mailData) => {
  try {
    const gmailAccessTokhon = oauth2Client.getAccessToken();

    const transporter = nodemailer.createTransport(
      {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "oauth2",
          user: userMail,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: gmailAccessTokhon,
        },
      },
      {
        from: fromAdress,
      }
    );

    // Templating engine
    transporter.use(
      "compile",
      hbs({
        viewEngine: {
          partialsDir: path.resolve("View"),
          defaultLayout: false,
        },
        viewPath: path.resolve("View"),
      })
    );

    const result = await transporter.sendMail(mailData);

    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = sendMail;
