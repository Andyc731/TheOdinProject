const express = require("express");
const session = require("express-session");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const compression = require("compression");
const helmet = require("helmet");
const RateLimit = require("express-rate-limit");
require("dotenv").config();

const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const User = mongoose.model(
  "User",
  new Schema({
    display_name: { type: String, required: true },
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
    display_name: { type: String, required: true },
    date_created: { type: Date },
  }),
);

app.use(compression());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  }),
);
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
});
app.use(limiter);

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.get("/", async (req, res) => {
  const [messageList, messageCount, userCount] = await Promise.all([
    Message.find().sort({ date_created: -1 }).limit(20).exec(),
    Message.countDocuments().exec(),
    User.countDocuments().exec(),
  ]);
  res.render("index", {
    user: req.user,
    messageList: messageList,
    messageCount: messageCount,
    userCount: userCount,
  });
});
app.get("/sign-up", (req, res) => res.render("sign-up-form", { errors: null }));
app.post(
  "/sign-up",
  body("display_name")
    .isLength({ max: 20 })
    .withMessage("Display name must be at most 20 characters"),
  body("username")
    .isLength({ min: 4 })
    .withMessage("Username must be at least 4 characters")
    .isLength({ max: 16 })
    .withMessage("Username must be at most 16 characters")
    .custom(async (value) => {
      const user = await User.findOne({ username: value });
      if (user) {
        throw new Error("Username Exists");
      }
    }),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .isLength({ max: 20 })
    .withMessage("Password must be at most 20 characters"),
  body("confirm_password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return value === req.body.password;
  }),
  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("sign-up-form", {
        display_name: req.body.display_name,
        username: req.body.username,
        errors: errors.array(),
      });
    } else {
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        const user = new User({
          display_name: req.body.display_name,
          username: req.body.username,
          password: hashedPassword,
          member: false,
          admin: false,
        });
        await user.save();
      });
      res.redirect("/");
    }
  },
);

app.get("/message-create", (req, res) =>
  res.render("message-form", { title: "Create Message", user: req.user }),
);
app.post("/message-create", async (req, res, next) => {
  try {
    const message = new Message({
      text: req.body.text,
      user: req.user.username,
      display_name: req.user.display_name,
      date_created: new Date(),
    });
    await message.save();
  } catch (err) {
    return next(err);
  }
  res.redirect("/");
});

app.get("/message-edit/:id", async (req, res) => {
  const message = await Message.findById(req.params.id).exec();
  res.render("message-form", {
    title: "Edit Message",
    message: message,
    user: req.user,
  });
});

app.post("/message-edit/:id", async (req, res, next) => {
  try {
    const message = new Message({
      text: req.body.text,
      user: req.user.username,
      display_name: req.user.display_name,
      date_created: new Date(),
      _id: req.params.id,
    });
    await Message.findByIdAndUpdate(req.params.id, message, {});
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});

app.get("/log-in", (req, res) => {
  const messages = req.session.messages || [];

  req.session.messages = [];
  res.render("log-in-form", { errors: messages });
});

app.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/log-in",
    failureMessage: true,
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

const admin_pass = process.env.ADMIN_PASS;

app.get("/become-admin", (req, res) =>
  res.render("become-admin", { user: req.user }),
);
app.post("/become-admin", async (req, res) => {
  if (req.body.admin_pass === admin_pass) {
    await User.findByIdAndUpdate(req.user._id, { admin: true });
    res.redirect("/");
  } else {
    res.render("become-admin", {
      user: req.user,
      error: "Wrong Password",
    });
  }
});

app.get("/message-delete/:id", async (req, res) => {
  await Message.findOneAndDelete(req.params.id);
  res.redirect("/");
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
