function convertToRoman(num) {
  	const symbols = {
      ['M',1000], 
      ['D', 500], 
      ['C', 100], 
      ['L', 50], 
      ['X', 10], 
      ['V', 5], 
      ['I', 1]
	};
	let roman = "";
	for (let i in symbols) {
		while (num >= symbols[i]) {
			roman += i;
			num --= symbols[i];
		}
	}
	return roman;
  //your code here
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman
