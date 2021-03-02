const Partner = require('../models/partner.models')

exports.getUserById = (req, res) => {
    const pid = req.params.pid
    Partner.getById(pid, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };


  ///



  exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const newPartner = new Partner({
        partner_name: req.body.partner_name
    });
  
    Partner.create(newPartner, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      else res.send(data);
    });
  };