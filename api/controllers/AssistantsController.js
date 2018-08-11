/**
 * AssistantsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const request = require('request');

module.exports = {
  async create(req, res) {
    const assistant = await Assistants.create({
      name: req.param('name'),
      email: req.param('email')
    }).fetch();

    const subscriptions = await Subscriptions.find({events: 'create', resource: 'assistants'});

    subscriptions.forEach(element => {
      request.post({
        url: element.target,
        json: {
          event: {
              name: element.resource + '.' + element.events,
              resource: element.resource,
              resource_id: element.id
          },
          resource: assistant
      }
      }, (error, response, body) => {
        if (error) {
          return console.error(error);
        }
      });
    });

    return res.json(assistant);
  }
};

