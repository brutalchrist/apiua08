/**
 * SubscriptionsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const hat = require('hat');
const request = require('request');

module.exports = {
  async create(req, res) {
    const secret = hat();

    request.post({
      'headers': { 'x-hook-secret': secret },
      'url': req.param('target')
    }, (error, response, body) => {
      if (error) {
        return console.error(error);
      }

      if (response.headers['x-hook-secret'] !== secret) {
        return res.badRequest();
      }

      Subscriptions.create({
        resource: req.param('resource'),
        events: req.param('events'),
        target: req.param('target'),
        secret: secret,
        last_status: 200
      }).fetch().exec((err, subscription) => {
        if (err) {
          return console.error(err);
        }

        return res.json(subscription);
      });
    });
  }
};

