function slasher(arr, howMany) {
	arr = arr.slice(howMany);
	return arr;
}

console.log(slasher([1, 2, 3], 2));