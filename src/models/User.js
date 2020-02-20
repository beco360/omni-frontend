const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

/** Relations */
const Rol = require("../models").Rol;

const userSchema = new Schema(
  {
    name: {
      type: String,
      validate: {
        validator: function(v) {
          if (!v) {
            return true;
          } else {
            return v.length > 3;
          }
        },
        message: props => `${props.value} is not a valid name!`
      }
    },
    email: {
      type: String,
      validate: {
        validator: function(v) {
          if (!v) {
            return true;
          } else {
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(String(v).toLowerCase());
          }
        },
        message: props => `${props.value} is not a valid email!`
      }
    },
    password: {
      type: String
    },
    rol: {
      type: Schema.Types.ObjectId,
      ref: Rol.modelName
    },
    socket: {
      type: String,
      unique: true
    }
  },
  { timestamps: true }
);

userSchema.pre("save", function(next) {
  var user = this;
  if (!user.password) {
    next();
  } else {
    // only hash the password if it has been modified (or is new)
    if (!user.isModified("password")) return next();

    // generate a salt
    bcrypt.genSalt(process.env.SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
      });
    });
  }
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

const User = mongoose.model("User", userSchema);
module.exports = User;

/*
 USAGE = https://stackoverflow.com/questions/14588032/mongoose-password-hashing
var mongoose = require(mongoose),
    User = require('./user-model');

var connStr = 'mongodb://localhost:27017/mongoose-bcrypt-test';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

// create a user a new user
var testUser = new User({
    username: 'jmar777',
    password: 'Password123';
});

// save user to database
testUser.save(function(err) {
    if (err) throw err;
});

// fetch user and test password verification
User.findOne({ username: 'jmar777' }, function(err, user) {
    if (err) throw err;

    // test a matching password
    user.comparePassword('Password123', function(err, isMatch) {
        if (err) throw err;
        console.log('Password123:', isMatch); // -&gt; Password123: true
    });

    // test a failing password
    user.comparePassword('123Password', function(err, isMatch) {
        if (err) throw err;
        console.log('123Password:', isMatch); // -&gt; 123Password: false
    });
}); 

 */
