function where(collection, source) {
	var arr = [];
	var keys = Object.keys(source);
	for (var i = 0; i < collection.length; i++) {
		for (var j = 0; j < keys.length; j++) {
			if (collection[i].hasOwnProperty(keys[j]) && collection[i][keys[j]] === source[keys[j]]) {
				arr.push(collection[i]);
			}
		}
	}
	return arr;
}

console.log(where([{
	first: 'Romeo',
	last: 'Montague'
}, {
	first: 'Mercutio',
	last: null
}, {
	first: 'Tybalt',
	last: 'Capulet'
}], {
	last: 'Capulet'
}));