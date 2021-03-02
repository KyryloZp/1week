const User = require('../models/users.model')

exports.findAll = (req, res) => {
    User.getById((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
  })
}

  exports.getUserById = (req, res) => {
    const id = req.params.uid
    User.getById(id, (err, data) => {
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
  
    let date = new Date
    const newUseruser = new User({
        login: req.body.login,
        password: req.body.password,
        registration_date: date.toDateString(),
        last_visit_date: date.toDateString(),
        ip: req.body.ip,
        flag: req.body.flag
    });
  
    User.create(newUseruser, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      else res.send(data);
    });
  };