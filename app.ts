

class Dice {

    //static array of dices
    static diceGroup: Dice[] = [];

    //static method when 'generate' and 'rolling' button is clicked, it randomly gets values of dice
    static rollItUp() {
        Dice.diceGroup.forEach(die => {
            die.reRoll();

        });
    }

    //variable declaration
    div: JQuery<HTMLDivElement>;
    value: number;


    //constructor
    constructor() {
        this.value = this.randomNum();
        this.div = $(`<div class="die"> ${this.value}</div>`)
        this.render();
        this.addEvents();
        Dice.diceGroup.push(this);
    }

    //render method to append each div to the screen
    render() {

        $('#box').append(this.div);

    }

    //events method to make each die clickable and call the reRoll method
    addEvents() {
        this.div.click(() => this.reRoll());
    }

    //method to get a random number then append that number to the div
    reRoll(): void {
        this.value = this.randomNum();
        this.div.text(this.value);
    }


    //method to generate random number
    randomNum(): number {
        return Math.floor(Math.random() * 6) + 1;
    }

}


//click event when roll button is clicked, makes a new instance of class Dice
$('#rolling').click(() => Dice.rollItUp());


//click event when generate button is clicked, makes a new class of Dice and call getRandomValues method to get random value
$('#generate').click(() => new Dice());


//click event when sum button is clicked, sums die values and console logs the sum
$('#sum').click(() => {
    let total: number = 0;
    Dice.diceGroup.forEach(d => {
        total += d.value;
    })
    console.log(total);
});


