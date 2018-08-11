/**
 * Users.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 /**
* @api {get} /users Request Users information
* @apiName GetUsers
* @apiGroup Users
*
* @apiSuccess {Object} user
* @apiSuccess {Number} user.id User id.
* @apiSuccess {String} user.username Username of the User.
* @apiSuccess {String} user.email Email of the User.
*/

/**
* @api {get} /users/:id Request User information
* @apiName GetUser
* @apiGroup Users
*
* @apiParam {Number} id User unique ID.
*
* @apiSuccess {Number} id User id.
* @apiSuccess {String} username Username of the User.
* @apiSuccess {String} email Email of the User.
*/

module.exports = {

  attributes: {
    username: { type: 'string', required: true },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true }
  },

  customToJSON: function() {
    return _.omit(this, ['password'])
  }
};

