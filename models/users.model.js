const connection = require('../db')

// constructor
const User = function(user) {
    this.uid = user.uid;
    this.login = user.login;
    this.password = user.password;
    this.registration_date = user.registration_date;
    this.last_visit_date = user.last_visit_date;
    this.ip = user.ip;
    this.flag = user.flag;
  };


  //
  
  User.getAll = result => {
    connection.query("SELECT * FROM Users", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Users: ", res);
      result(null, res);
    });
  };

    
  User.getById = (uid, result) => {
    connection.query(`SELECT *
                      FROM Users
                      WHERE uid = ${uid}`
    , (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Users: ", res);
      result(null, res);
    });
  };


  //

  User.create = (newUser, result) => {
    connection.query("INSERT INTO Users SET ?", newUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created user: ", { id: res.uid, ...newUser });
      result(null, { id: res.uid, ...newUser });
    });
  };


  module.exports = User;