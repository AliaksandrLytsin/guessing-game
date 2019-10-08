class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.guessNumber = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.guessNumber = this.min + Math.ceil((this.max - this.min) / 2);
    }

    lower() {
        this.max = this.guessNumber;
    }

    greater() {
        this.min = this.guessNumber;
    }    
}

module.exports = GuessingGame;
