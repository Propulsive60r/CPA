const $entry = document.querySelector('#entry');

// Create templates
const colorTemplate = [
    'color: red',
    'color: green',
    'color: blue',
    'color: black',
];

const fontSizeTemplate = [
    'font-size: 16px',
    'font-size: 24px',
    'font-size: 32px',
];

const marginTemplate = [
    '5px',
    '10px',
    '15px',
];

$entry.style.cssText = `
${colorTemplate[0]};
${fontSizeTemplate[0]}
`;

//$entry.innerHTML = 'Hello World';

class BlockInput {
    // price;
    // amount;

    constructor() {
        this.placeholder = ['Price coins', 'Amount coin'];
        // this.price = price;
        // this.amount = amount;
        this.blockPrice = document.createElement('input');
        this.blockAmount = document.createElement('input');
        this.blockAdd = document.createElement('span');
        this.blockDiv = document.createElement('div');
        this.arr = [this.blockPrice, this.blockAmount, this.blockAdd, this.blockDiv];
    };

    createBlockInput() {

        this.blockPrice.placeholder = this.placeholder[0];
        this.blockAmount.placeholder = this.placeholder[1];
        this.blockAdd.innerHTML = 'add'
        this.blockAdd.id = 'addBlock'
        //this.arr.forEach(e => $entry.after(e));
        this.arr.forEach(e => document.body.append(e));
        //this.arr.forEach(e => document.body.prepend(e));
    };

}


const block1 = new BlockInput();
block1.createBlockInput();
block1.blockAdd.addEventListener('click', () => {
    const block2 = new BlockInput();
    block2.createBlockInput();

})

