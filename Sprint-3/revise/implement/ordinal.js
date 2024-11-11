function ordinal(num) {

	if(num % 11 === 0 || num % 12 === 0 || num % 13 === 0){
		return num.toString() + "th";
	}
	else if(num % 10 === 1){
		return num.toString() + "st";
	}
	else if(num % 10 === 2){
		return num.toString() + "nd";
	}
	else if(num % 10 === 3){
		return num.toString() + "rd";
	}
	else
		return num.toString() + "th";
}
export default ordinal;
