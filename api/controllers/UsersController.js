/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const sha256 = require('sha256');

module.exports = {
  async create (req, res) {
    if (!req.param('password')) {
      return res.badRequest('The password is required');
    }

    const password = sha256(req.body.password);

    const user = await Users.create({
      username: req.param('username'),
      email: req.param('email'),
      password: password
    }).fetch();

    return res.status(201).json(user);
  },
};

