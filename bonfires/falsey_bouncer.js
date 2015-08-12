function bouncer(arr) {
	arr = arr.filter(function(value) {
		var filterArr = [false, 0, null, "", undefined, NaN];
		return filterArr.indexOf(value) === -1;
	});
	return arr;
}

console.log(bouncer([7, 'ate', '', false, 9]));