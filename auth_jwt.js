var passport = require('passport');
var jwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(new jwtStrategy(opts,
    function(username, password, done){
        var user = db.find(jwt_payload.id);
        if(user)
        {
            return done(null, user);
        }
        else{
            return done(null, false);
        }
    }
    ));


exports.isAuthenticated = passport.authenticate( 'jwt', {session: false});
exports.secret = opts.secretOrKey;