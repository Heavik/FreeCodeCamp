function palindrome(str) {
  str = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  //console.log(str);
  for (var index = 0; index < str.length / 2; index++) {
	  if(str[index] !== str[str.length - index - 1]) {
		  return false;
	  }
  return true;
}}

console.log(palindrome("eye"));