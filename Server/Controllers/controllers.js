const UserModel = require('../Model/User');
const bycript = require('bcryptjs');
const radomstring = require('randomstring');
const nodemailer = require('nodemailer');
exports.Register = async (req, res) => {
  // console.log(req.body);
  const { Fname, Lname, email, password, checkbox } = req.body;
  UserModel.findOne({ email: email }, async (err, user) => {
    if (user) {
      res.send({ message: 'User already exists ' });
    } else {
      bycript.hash(password, 12).then(async (hashedpassword) => {
        const User = new UserModel({
          Fname,
          Lname,
          email,
          password: hashedpassword,
          checkbox,
        });
        await User.save((err) => {
          if (!err) {
            res.send({ message: 'Register succesfully ' });
          } else {
            console.log(err);
          }
        });
      });
    }
  });
};
exports.Login = async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;
  UserModel.findOne({ email: email }, async (err, user) => {
    if (user) {
      const domatch = await bycript.compare(password, user.password);
      if (domatch) {
        res.send({ message: 'login successfully ', user: user });
      } else {
        res.send({ message: 'invalid Email or Password ' });
      }
    } else {
      res.send({ message: 'invalid Email or Password ' });
    }
  });
};

const sendnewpassword = async (name, email, token) => {
  try {
    const Transportor = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const MailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Reset password',
      html: `<p>Hi ${name} you requested for password reset <a href="http://localhost:3000/Newpassword/${token}">Click Here</a></p>
      `,
    };
    Transportor.sendMail(MailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('email sent' + info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
exports.Forget = async (req, res) => {
  // console.log(req.body);
  const { email } = req.body;
  try {
    UserModel.findOne({ email: email }, async (err, user) => {
      if (user) {
        const randomString = await radomstring.generate();
        sendnewpassword(user.Fname, user.email, randomString);
        await UserModel.updateOne(
          { email: user.email },
          { $set: { token: randomString } },
        );
        res.send({ message: 'Email sent check inbox' });
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
exports.update = async (req, res) => {
  const { data, token } = req.body;
  let password = data.password;
  try {
    UserModel.findOne(
      { token: token, expireToken: { $gt: Date.now() } },
      async (err, user) => {
        if (user) {
          bycript.hash(password, 12).then(async (hashedpassword) => {
            user.password = hashedpassword;
            user.token = '';
            await user.save((err) => {
              if (!err) {
                res.send({ message: 'Successfully Updated' });
              } else {
                console.log(err);
              }
            });
          });
        } else {
          res.send({ message: 'invalid token' });
        }
      },
    );
  } catch (error) {
    console.log(error);
  }
};
