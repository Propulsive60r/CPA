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

//=========================================
//Class DOM - layout
class Layout {
    constructor(div) {
        this.layout = document.createElement(div);
        document.body.append(this.layout);
    }
}

//=========================================
//Header Layout
const header = new Layout('header');
header.layout.innerHTML = 'Header';

//=========================================
//Main Layout
const main = new Layout('main');
main.layout.innerHTML = 'Main';

//=========================================
//Footer Layout
const footer = new Layout('footer');
footer.layout.innerHTML = 'Footer';

// $entry.style.cssText = `
// ${colorTemplate[0]};
// ${fontSizeTemplate[0]}
// `;

//=========================================
// general block class
class BlockInput {
    constructor() {
        this.placeholder = ['Price coins', 'Amount coin'];

        this.blockDiv = document.createElement('div');
        this.elementInputPrice = document.createElement('input');
        this.elementInputAmount = document.createElement('input');
        this.elementBlockAdd = document.createElement('span');
        this.elementBlockDelete = document.createElement('span');

        this.elementInputPrice.placeholder = this.placeholder[0];
        this.elementInputAmount.placeholder = this.placeholder[1];
        this.elementBlockAdd.innerHTML = 'add';
        this.elementBlockDelete.innerHTML = ' delete';
        this.elementBlockAdd.id = 'addBlock';
        this.elementBlockDelete.id = 'deleteBlock';
        //this.arr = [this.elementInputePrice, this.elementInputAmount, this.elementBlockAdd, this.elementBlockDelete];
        //this.arr.forEach(e => main.layout.insertAdjacentElement('beforeend', e));
    };


    createBlockInput() {

        main.layout.insertAdjacentElement('beforeend', this.blockDiv);
        this.blockDiv.insertAdjacentElement('beforeend', this.elementInputPrice);
        this.blockDiv.insertAdjacentElement('beforeend', this.elementInputAmount);
        this.blockDiv.insertAdjacentElement('beforeend', this.elementBlockAdd);
        this.blockDiv.insertAdjacentElement('beforeend', this.elementBlockDelete);

        // this.elementDiv.insertAdjacentElement('beforeend', this.elementBlockAdd);
        // this.elementDiv.insertAdjacentElement('beforeend', this.elementBlockDelete);
//        this.arr.forEach(e => main.layout.insertAdjacentElement('beforeend', e));
    };

    deleteBlockInput() {
        this.blockDiv.remove();
    }
}

//=========================================
// create array blocks
const arrayBlock = [];

//=========================================
// create start block
const blockStart = new BlockInput();
arrayBlock.push(blockStart);
blockStart.createBlockInput();
blockStart.elementBlockDelete.remove();
blockStart.elementInputPrice.style.background = 'cyan';

//=========================================
// create click block from block start

const addBlock = new Promise((resolve) => {
    blockStart.elementBlockAdd.addEventListener('click',
        () => {
            console.log('add block before click add', arrayBlock)
            arrayBlock.push(new BlockInput());
            arrayBlock[arrayBlock.length - 1].createBlockInput();
            console.log('add block after click add', arrayBlock)
            resolve(arrayBlock);
        });
});

//=========================================
// delete click block

const deleteBlock = new Promise((resolve) => {
    blockStart.elementBlockAdd.addEventListener('click',
        () => {
            array[arrayBlock.length - 1].elementBlockDelete.addEventListener('click', () => {
                console.log('delete block before click delete', arrayBlock)
                arrayBlock[arrayBlock.length - 1].deleteBlockInput();
                arrayBlock.pop();
                //const newArray = array.filter((f, index) => f !== 'two')
                console.log('delete block after click delete', arrayBlock)
                resolve();
            })
        })
});


addBlock.then(array => {
    return new Promise((resolve) => {


    })
