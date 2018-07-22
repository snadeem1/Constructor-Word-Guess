var letter = function(value){
    this.value = value;
    this.appear = false;
    if (this.value = ' ')
    this.appear = true;
}

letter.prototype.showInfo = function(){
    if(this.appear) {
        return this.value;
    }
    return '_';
}

exports.letter = letter;