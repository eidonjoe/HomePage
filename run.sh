#! /bin/bash
set -e

SHELL_PATH=$(cd `dirname $0`; pwd)

build_local() {
	export PORT=8000
	export NODE_ENV=local

	nodemon app.js
	p1=$!

	echo "=> App running at: http://localhost:${PORT}/"

	wait $p1

	echo "over"
}
build_prod() {
	export NODE_ENV=prod
}

build_run() {
	node app.js
}


cd $SHELL_PATH
MODE=${1:-"local"}
"build_${MODE}";



