function chunk(arr, size) {
	var result = [];
	for (var i = 0; i < arr.length; i += size) {
		var subArr = arr.slice(i, size + i);
		result.push(subArr);
	}
	return result;
}

console.log(chunk(['a', 'b', 'c', 'd'], 2));