var Dice = /** @class */ (function () {
    //constructor
    function Dice() {
        this.value = this.randomNum();
        this.div = $("<div class=\"die\"> " + this.value + "</div>");
        this.render();
        this.addEvents();
        Dice.diceGroup.push(this);
    }
    //static method when 'generate' and 'rolling' button is clicked, it randomly gets values of dice
    Dice.rollItUp = function () {
        Dice.diceGroup.forEach(function (die) {
            die.reRoll();
        });
    };
    //render method to append each div to the screen
    Dice.prototype.render = function () {
        $('#box').append(this.div);
    };
    //events method to make each die clickable and call the reRoll method
    Dice.prototype.addEvents = function () {
        var _this = this;
        this.div.click(function () { return _this.reRoll(); });
    };
    //method to get a random number then append that number to the div
    Dice.prototype.reRoll = function () {
        this.value = this.randomNum();
        this.div.text(this.value);
    };
    //method to generate random number
    Dice.prototype.randomNum = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    //static array of dices
    Dice.diceGroup = [];
    return Dice;
}());
//click event when roll button is clicked, makes a new instance of class Dice
$('#rolling').click(function () { return Dice.rollItUp(); });
//click event when generate button is clicked, makes a new class of Dice and call getRandomValues method to get random value
$('#generate').click(function () { return new Dice(); });
//click event when sum button is clicked, sums die values and console logs the sum
$('#sum').click(function () {
    var total = 0;
    Dice.diceGroup.forEach(function (d) {
        total += d.value;
    });
    console.log(total);
});
