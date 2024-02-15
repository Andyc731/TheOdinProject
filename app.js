const express = require("express");
const session = require("express-session");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
require("dotenv").config();

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const User = mongoose.model(
  "User",
  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    member: { type: Boolean, required: true },
    admin: { type: Boolean, required: true },
  }),
);

const Message = mongoose.model(
  "Message",
  new Schema({
    text: { type: String, required: true },
    user: { type: String, required: true },
    date_created: { type: Date },
  }),
);

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.get("/", async (req, res) => {
  const [messageList, messageCount] = await Promise.all([
    Message.find().sort({ date_created: 1 }).exec(),
    Message.countDocuments().exec(),
  ]);
  res.render("index", {
    user: req.user,
    messageList: messageList,
    messageCount: messageCount,
  });
});
app.get("/sign-up", (req, res) => res.render("sign-up-form"));
app.post("/sign-up", async (req, res, next) => {
  try {
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      const user = new User({
        username: req.body.username,
        password: hashedPassword,
        member: false,
        admin: false,
      });
      const result = await user.save();
    });
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});

app.get("/message-create", (req, res) =>
  res.render("message-create", { user: req.user }),
);
app.post("/message-create", async (req, res, next) => {
  try {
    const message = new Message({
      text: req.body.text,
      user: req.user.username,
      date_created: new Date(),
    });
    await message.save();
  } catch (err) {
    return next(err);
  }
  res.redirect("/");
});

app.get("/sign-in", (req, res) => res.render("sign-in-form"));

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  }),
);

app.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.get("/become-member", (req, res) =>
  res.render("become-member-form", { user: req.user, error: null }),
);

const member_pass = process.env.MEMBER_PASS;

app.post("/become-member", async (req, res) => {
  if (req.body.member_pass === member_pass) {
    await User.findByIdAndUpdate(req.user._id, { member: true });
    res.redirect("/");
  } else {
    res.render("become-member-form", {
      user: req.user,
      error: "Wrong Password",
    });
  }
});

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) return done(null, user);
        else return done(null, false, { message: "Incorrect password" });
      });
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.listen(3000, () => console.log("app listening on port 3000!"));
