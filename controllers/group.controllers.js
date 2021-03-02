const Group = require('../models/group.models')

  exports.getUsersGroupById = (req, res) => {
    const id = req.params.uid
    Group.getById(id, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };

  exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const newUsersGroup = new Group({
        uid: req.body.uid,
        temporary: req.body.temporary,
        regular: req.body.regular,
        editors: req.body.editors,
        admin: req.body.admin
    });
  
    console.log(newUsersGroup)
    Group.giveUserGroup(newUsersGroup, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      else res.send(data);
    });
  };