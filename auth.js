// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth2').Strategy;



// passport.use(new GoogleStrategy({
//   clientID: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:3000/auth/google/callback",
//   passReqToCallback: true,
// },
// function(request, accessToken, refreshToken, profile, done) {
//   return done(null, profile);
// }));

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });


const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

// Load environment variables from .env file
require('dotenv').config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
