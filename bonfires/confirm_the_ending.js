function end(str, target) {
	var targetLength = target.length;
	if (str.substr(str.length - targetLength) === target) {
		return true;
	}
	return false;
}

console.log(end('Bastian', 'n'));