const User = require("../models/user")

module.exports = {
  addUser:(req, res) => {
    User.create(req.body)
    .then(result => {
      res.send(result)
    })
  }
}
