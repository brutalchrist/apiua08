/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const sha256 = require('sha256');
const hat = require('hat');

module.exports = {
  async create (req, res) {
    const user = await Users.findOne({username: req.param('username')});

    if (user.password !== sha256(req.param('password'))) {
      return res.badRequest('The password is wrong');
    }

    const login = await Login.create({
      user: user.id,
      authtoken: hat()
    }).fetch();

    return res.json(login);
  }
};

