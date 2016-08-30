module.exports.index = function* index(next) {
	this.body = {json: 'json ok'};
};