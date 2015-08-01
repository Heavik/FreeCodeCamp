function titleCase(str) {
  var words = str.split(' ');
  var upperCaseWords = [];
  for (var index = 0; index < words.length; index++) {
	  var upperCase = words[index].charAt(0).toUpperCase();
	  upperCaseWords.push(upperCase + words[index].substr(1).toLowerCase());
  }
  return upperCaseWords.join(' ');
}

console.log(titleCase("I'm a little teA pot"));