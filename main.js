/**************** Function 1. Print Out Five Three Times **********/

var tripleFive = function() {
	for(var i = 0; i < 3; i ++ )
		console.log("Five!");
}

tripleFive();


/**************** Function 2. Last Letter *******************/

var lastLetter = function(string) {
	console.log(string.charAt(string.length -1 ));
}

lastLetter("hello");

/**************** Function 3. Takes Argument ****************/

var square = function(number) {
	return number * number;
} 

square(3);

/**************** Function 4. Negate *******************/

var negate = function(number) {
	 var negative = -(number);
		return negative;
}

negate(-3);

/**************** Function 5. toArray *******************/

// var toArray = function(arg1, arg2, arg3) {
// 	//turn to string
// 	var turnString = (arg1 + ',' + arg2 + ',' + arg3);
// 	//turn to array 
// 	var turnToArray = turnString.split(' ');
// 	return turnToArray;
// }
// toArray(1,2,3);

			/********** better ***********/

var toArray = function(arg1, arg2, arg3) {
	// make a new array
	var newArray = [];
	// push arguments to that array
	var push = newArray.push(arg1, arg2, arg3);
	return newArray; 
}
toArray(1,2,3);


/**************** Function 6. toArray *******************/

var startsWithA = function(word) {
	if(word.charAt(0) === 'A'){
		return true;
	} else {
		return false;
	}

}

startsWithA('bear');

/**************** Function 7. Excite *******************/

var excite = function(word) {
	var newSentence = (word + "!!!");
	return newSentence;
};

excite("Sentence");


/**************** Function 8.  *******************/

// write function, use indexOf to return true when input sun

 var sunny = function(word, wordSum) {
 	// if indexOf finds the characters it will return 0, 
 	// if not it will return -1
	if( (word.indexOf(wordSum) !== -1)) {
	return true; 
	} else {
	return false
	}
};

sunny('asunder', 'frank');


/**************** Function 9.  *******************/

var tiny = function(number) {
	if( (number  > 0) && (number < 1) ){
		return true;
	} else {
		return false;
	}
}
tiny(1.5);

/**************** Function 10.  *******************/

var getSeconds = function(MMSS) {
	//get first character
	var firstChar = MMSS.charAt(0);
	//get second character
	var secondChar = MMSS.charAt(1);
	//put these two in a string together
	var hourString = firstChar + secondChar;
	//multiply this by 60
	var multiplier = (hourString * 60);
	//get second last character
	var lastChar = MMSS.charAt(MMSS.length-1);
	//get last character
	var secLastChar = MMSS.charAt(MMSS.length-2);
	// put into string
	var secString =  secLastChar + lastChar;
	// add these two together
	var total = Number(multiplier) + Number(secString);

	return total; 
}

getSeconds('11:30');

/*********************************************/






