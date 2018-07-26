var letter1 = require('./letter');

var word = function(value){
    this.value = value;
    this.letters = [];
    this.gusses = '';
    for (var i = 0; i < this.value.length; i++){
        this.letters.push(new letter1.letter(this.value[i]));
    }
};

word.prototype.checkLetters = function(){
    for( var i = 0; i <this.letters.length; i++){
        if(!this.letters[i].show) return false;

    }
    return true;
}
word.prototype.findLetter = function(letter){
	var lowerLetter = letter.toLowerCase();
	if (this.guesses.indexOf(lowerLetter) != -1) {
		return console.log('\nDuplicate letter, try again.');
    } 
    this.guesses += lowerLetter; 
	for(var i=0; i<this.letters.length;i++){
		if(this.letters[i].value.toLowerCase() == lowerLetter){
		this.letters[i].show = true;
		}
	}
};

word.prototype.toString = function(){
    var output = '';
    for(var i=0; i<this.letters.length; i++){
      output += this.letters[i].printInfo();
    }
    return output;
  }
  
  exports.wordCons = word;