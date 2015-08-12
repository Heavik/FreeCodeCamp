function destroyer(arr) {
	if (arguments.length > 1) {
		var filterArr = Array.prototype.slice.call(arguments);
		arr = arr.filter(function(value) {
			return filterArr.indexOf(value) === -1;
		});
	}
	return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));