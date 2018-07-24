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