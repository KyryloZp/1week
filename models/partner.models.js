const connection = require('../db')

// constructor
const Partner = function(partn) {
    this.pid = partn.pid;
    this.partner_name = partn.partner_name;
  };


  Partner.getById = (pid, result) => {
    connection.query(`SELECT *
                      FROM Partners
                      WHERE uid = ${pid}`
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


  Partner.create = (partn, result) => {
    connection.query("INSERT INTO Users SET ?", partn, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created user: ", { id: res.pid, ...partn });
      result(null, { id: res.pid, ...partn });
    });
  };

  module.exports = Partner;