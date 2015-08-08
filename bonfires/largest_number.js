function largestOfFour(arr) {
  var largestArr = [];	
  for (var i = 0; i < arr.length; i++) {
  	var subArr = arr[i];
  	var max = subArr[0]
  	for (var j = 1; j < subArr.length; j++) {
  		if(max < subArr[j]) max = subArr[j];
  	};
  	largestArr.push(max);
  };
  return largestArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));