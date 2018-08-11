/**
 * Subscriptions.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    resource: { type: 'string', required: true},
    events: { type: 'string', required: true},
    target: { type: 'string', required: true},
    active: { type: 'boolean', required: false, defaultsTo: true},
    secret: { type: 'string', required: false},
    last_status: { type: 'number', required: false},
    last_success_at: { type: 'string', required: false, allowNull: true},
    last_failure_at: { type: 'string', required: false, allowNull: true},
    last_failure_content: { type: 'string', required: false, allowNull: true}
  },
  customToJSON: function() {
    return _.omit(this, ['secret', 'createdAt', 'updatedAt'])
  }
};

