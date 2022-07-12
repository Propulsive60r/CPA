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
//main.layout.innerHTML = 'Main';

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
    // price;
    // amount;

    constructor() {
        this.placeholder = ['Price coins', 'Amount coin'];
        // this.price = price;
        // this.amount = amount;
        this.elementDiv = document.createElement('div');
        this.elementInputePrice = document.createElement('input');
        this.elementInputAmount = document.createElement('input');
        this.elementBlockAdd = document.createElement('span');
        this.elementBlockDelete = document.createElement('span');

        this.elementInputePrice.placeholder = this.placeholder[0];
        this.elementInputAmount.placeholder = this.placeholder[1];
        this.elementBlockAdd.innerHTML = 'add';
        this.elementBlockDelete.innerHTML = ' delete';
        this.elementBlockAdd.id = 'addBlock';
        this.elementBlockDelete.id = 'deleteBlock';
        //this.arr = [this.elementInputePrice, this.elementInputAmount, this.elementBlockAdd, this.elementBlockDelete];
        //this.arr.forEach(e => main.layout.insertAdjacentElement('beforeend', e));

    };

    createBlockInput() {
        main.layout.insertAdjacentElement('beforeend', this.elementDiv);
        this.elementDiv.insertAdjacentElement('beforeend', this.elementInputePrice);
        this.elementDiv.insertAdjacentElement('beforeend', this.elementInputAmount);
        // this.elementDiv.insertAdjacentElement('beforeend', this.elementBlockAdd);
        // this.elementDiv.insertAdjacentElement('beforeend', this.elementBlockDelete);
//        this.arr.forEach(e => main.layout.insertAdjacentElement('beforeend', e));
    };

    deleteBlockInput() {
        this.elementDiv.remove();
        // this.elementInputePrice.remove();
        // this.elementInputAmount.remove();
        // this.elementBlockAdd.remove();
        // this.elementBlockDelete.remove();
    }

}

//=========================================
// create start block
const block0 = new BlockInput();
block0.createBlockInput();
block0.elementInputePrice.style.background = 'yellow';
block0.elementDiv.insertAdjacentElement('beforeend', block0.elementBlockAdd);


//=========================================
// create click block

let counter = -1;
const arr2 = [];
console.log('Пустой массив', arr2);

const addBlock = new Promise((resolve) => {
    return block0.elementBlockAdd.addEventListener('click',
        () => {
            counter++;
            arr2[counter] = new BlockInput();
            arr2[counter].createBlockInput();
            arr2[counter].elementDiv.insertAdjacentElement('beforeend', arr2[counter].elementBlockAdd);
            arr2[counter].elementDiv.insertAdjacentElement('beforeend', arr2[counter].elementBlockDelete);
            console.log(`Создали блок -> ${counter + 1}`, `Ключ массива -> ${counter}`, arr2);
            resolve(arr2);
        });
});


//=========================================
// delete click block
addBlock.then(array  => {
    array[0].elementBlockDelete.addEventListener('click', () => {
        console.log(array);
        //console.log(`Блок перед удалением -> ${counter + 1}`, `Ключ массива -> ${counter}`, arr2);
        //arr2[counter].deleteBlockInput();
        //console.log(`Блок после удаления удалением -> ${counter + 1}`, `Ключ массива -> ${counter}`, arr2);
    })
})

// установить значение для ключа
//localStorage.test = 2;
