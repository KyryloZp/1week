const connection = require('../db')


const Group = function(group) {
    this.uid = group.uid;
    this.temporary = group.temporary;
    this.regular = group.regular;
    this.editors = group.editors;
    this.admin = group.admin;
  };


  Group.getById = (uid, result) => {
    connection.query(`SELECT *
                      FROM Group
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



  Group.giveUserGroup = (newGroups, result) => {

    connection.query("INSERT INTO Users SET ?", newGroups, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("user got a group: ", { uid: res.uid, ...newGroups });
      result(null, { uid: res.uid, ...newGroups });
    });
  };

  module.exports = Group;