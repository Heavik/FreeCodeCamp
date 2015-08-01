function findLongestWord(str) {
  var words = str.split(' ');
  var longestWord = words[0];
  for (var index = 1; index < words.length; index++){
	  if(words[index].length > longestWord.length) {
		  longestWord = words[index];
	  } 
  }
  return longestWord.length;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));