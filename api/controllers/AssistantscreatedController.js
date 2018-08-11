/**
 * AssistantscreatedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async create (req, res) {
    if (req.headers['x-hook-secret']) {
      return res.set('x-hook-secret', req.headers['x-hook-secret']).send();
    }

    await Assistantscreated.create(req.body);

    return res.badRequest();
  }
};

