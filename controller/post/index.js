var parse = require('co-body');
module.exports = {
	index: index,
	user: user
}
function *index(next) {
	if ('POST' != this.method) return yield next;
	var body = yield parse(this, {
		limit: '1kb'
	});
	this.body = body;
	console.log(this);
}
function *user(next) {
	if ('POST' != this.method) return yield next;
	var body = yield parse(this, {
		limit: '1kb'
	});
	this.body = body;
	console.log(this);
}