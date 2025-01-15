function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
	};
	let roman = '';
	for (let i = 0; i < Objects.keys(obj).length; i++) {
		while (num >= obj[i][1]) {
			roman += obj[i][0];
			num --= 4;
		}
		if (num === 4 && i === 4) {
			roman += 'IV';
			num -= 4;
		} else if(num === 9 && i === 4){
			roman += 'IX';
			num -= 9;
		}
		else if(num === 4 && i === 2){
			roman += 'CD';
			num-=400;
		}
		else if (num === 9 && i === 2) {
			roman += 'CM';
		    num -= 900;
	    }
	}
	return roman;
  //your code here
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line
console.log(convertToRoman(36));

// do not edit below this line
module.exports = convertToRoman
