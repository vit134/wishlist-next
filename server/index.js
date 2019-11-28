const express = require('express');
const methodOverride = require('method-override');
const next = require('next');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); // part of next config
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Sessions = require('express-session');
const fileUpload = require('express-fileupload');

const userRoutes = require('./routes/user');
const loginRoutes = require('./routes/login');
const logotRoutes = require('./routes/logout');
const registrationRoutes = require('./routes/registration');

const wishesRoutes = require('./routes/wishes');

const logErrors = (err, req, res, next) => {
  console.error(chalk.red(err.stack));
  next(err);
};

const clientErrorHandler = (err, req, res, next) => {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
};

const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.render('error', { error: err });
};

nextApp.prepare().then(() => {
  const app = express();

  const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

    next();
  };

  app.use(allowCrossDomain);
  app.use(fileUpload());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(Sessions({
    secret: 'asdasd',
    cookie: {
      maxAge: 86400 * 1000, // 24 hours in milliseconds
    },
    resave: false,
    saveUninitialized: false,
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // passport config
  const Account = require('./models/account');
  passport.use(new LocalStrategy(Account.authenticate()));
  passport.serializeUser(Account.serializeUser());
  passport.deserializeUser(Account.deserializeUser());

  // Routes
  app.use('/api/user', userRoutes);
  app.use('/api/login', loginRoutes);
  app.use('/api/logout', logotRoutes);
  app.use('/api/registration', registrationRoutes);
  app.use('/api/wishes', wishesRoutes);

  // mongoose
  mongoose.connect(require('./config/db').url);
  mongoose.set('debug', false);

  app.get('*', (req, res) => {
    return handle(req, res); // for all the react stuff
  });

  console.log(chalk.red('server index.js', process.env.HEROKU_APP_NAME));
  console.log(chalk.red('server index.js', process.env.APP_URL));
  console.log(chalk.red('server index.js', process.env.BLA));

  app.use(methodOverride());
  app.use(logErrors);
  app.use(clientErrorHandler);
  app.use(errorHandler);

  app.listen(PORT, err => {
    if (err) throw err;
    console.log(chalk.green(`ready at http://localhost:${PORT}`));
  });
});
