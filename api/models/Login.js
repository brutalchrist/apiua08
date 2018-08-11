/**
 * Login.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: { type: 'string', required: true},
    authtoken: { type: 'string', required: true}
  },
  customToJSON: function() {
    return _.omit(this, ['id', 'createdAt', 'updatedAt'])
  }
};

