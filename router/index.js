/* create by eidonjoe*/

var parse = require('co-body');
var controllers = require('../controller/index');

module.exports.index = controllers.index;
module.exports.health = controllers.health.index;
module.exports.json = controllers.json.index;
module.exports.post = controllers.post.index;