var fs = require('fs');
var path = require('path');
exportsFile(__dirname);
function exportsFile(filePath, dirName) {
	var dir = fs.readdirSync(filePath);
	for (var i in dir) {
		if (!dir[i]) {
			console.log('break' , filePath);
			break;
		}
		var subPath = path.join(filePath,dir[i]);
		var pathType = typeJudge(subPath);
		if (pathType == 'file') {
			var file = require(subPath);
			var fileName = getFileName(subPath);
			if (fileName == 'index' && dirName) {
				var sameNameFile = path.join(path.dirname(subPath),dirName + '.js');
				var exportsName = dirName
				if (exists(sameNameFile)) {
					dirName + 'Index'
				}
				fileName = exportsName;
			}
			module.exports[fileName] = file;
			continue;
		} else if (pathType == 'dir') {
			exportsFile(subPath, dir[i]);
		}
	}
}
	
function exists(path) {
	return fs.existsSync(path);
}
function getFileName(file) {
	return path.basename(file,'.js');
}
function typeJudge(path) {
	var type = 'null'
	if (!exists(path)) return type;
	if (fs.statSync(path).isFile()) type = 'file';
	if (fs.statSync(path).isDirectory()) type = 'dir';
	return type;
}

module.exports.index = function* index(next) {
	this.body = 'hello index';
};