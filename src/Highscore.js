function Highscore() {
    // initially, load high score value from the local storage
    this.load();
}

Highscore.prototype.updateHighscore = function (score) {
    // check if we need to update high score
    if (score > this.highscore) {
        this.highscore = score;
        this.save();
    }

    // render the high score in the
    // id="highscore" element in the browser
    $("#highscore").text("HIGHSCORE: " + this.highscore);
};

Highscore.prototype.load = function () {
    // localStorage is storing everything as strings,
    // so we need to convert it to number
    this.highscore = parseFloat(localStorage.highscore);
};

Highscore.prototype.save = function () {
    localStorage.highscore = this.highscore;
};
