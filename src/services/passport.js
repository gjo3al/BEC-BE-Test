const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
},
    function (username, password, done) {
        if (username != 'admin@admin.com' || password != 'password') {
            return done(null, false, { message: 'Invalid Email or Password' });
        }
        return done(null, true, { token: "abc@123" });
    }
));
