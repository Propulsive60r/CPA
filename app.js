//Class DOM - layout
class Layout {
    constructor(div) {
        this.layout = document.createElement(div);
        document.body.append(this.layout);
    }
}


//Header Layout
const header = new Layout('header');
header.layout.innerHTML = 'Header';

//Main Layout
const main = new Layout('main');
main.layout.innerHTML = 'Main';

//Footer Layout
const footer = new Layout('footer');
footer.layout.innerHTML = 'Footer';




main.layout.insertAdjacentHTML('afterend', '<h1>Article</h1>')







// // Create templates
// const colorTemplate = [
//     'color: red',
//     'color: green',
//     'color: blue',
//     'color: black',
// ];
//
// const fontSizeTemplate = [
//     'font-size: 16px',
//     'font-size: 24px',
//     'font-size: 32px',
// ];
//
// const marginTemplate = [
//     '5px',
//     '10px',
//     '15px',
// ];
//
// //header
// const $entry = document.querySelector('#entry');
// $entry.innerHTML = 'Entry point / Header';
// $entry.style.cssText = `
// ${colorTemplate[0]};
// ${fontSizeTemplate[0]}
// `;
// document.body.prepend($entry);
//
//
// // general block class
// class BlockInput {
//     // price;
//     // amount;
//
//     constructor() {
//         this.placeholder = ['Price coins', 'Amount coin'];
//         // this.price = price;
//         // this.amount = amount;
//         this.blockDiv = document.createElement('div');
//
//
//         this.elementInputePrice = document.createElement('input');
//         this.elementInputAmount = document.createElement('input');
//         this.elementBlockAdd = document.createElement('span');
//         this.elementBlockDelete = document.createElement('span');
//
//         this.elementInputePrice.placeholder = this.placeholder[0];
//         this.elementInputAmount.placeholder = this.placeholder[1];
//         this.elementBlockAdd.innerHTML = 'add';
//         this.elementBlockDelete.innerHTML = ' delete';
//         this.elementBlockAdd.id = 'addBlock';
//         this.elementBlockDelete.id = 'deleteBlock';
//
//
//         this.blockDiv.insertAdjacentElement('beforeend', this.elementInputePrice);
//         this.blockDiv.insertAdjacentElement('beforeend', this.elementInputAmount);
//         this.blockDiv.insertAdjacentElement('beforeend', this.elementBlockAdd);
//         this.blockDiv.insertAdjacentElement('beforeend', this.elementBlockDelete);
//
//
//         //this.arr = [this.elementInputePrice, this.elementInputAmount, this.elementBlockAdd, this.elementBlockDelete];
//     };
//
//     createBlockInput() {
// //const copyBlock = this.blockDiv.cloneNode();
//
//
//
//
//         //this.arr.forEach(e => document.body.append(e));
//     };
//
//     deleteBlockInput() {
//         this.blockDiv.remove();
//     }
//
// }
//
// const block1 = new BlockInput();
//
//
//
// //block1.createBlockInput();
// //  block1.elementBlockAdd.addEventListener('click', () => {
// //
// //      this.blockDiv.insertAdjacentHTML('afterend', '<div>AfterClick</div>');
// //  })
// // block1.elementBlockDelete.addEventListener('click', () => {
// //     //const block2 = new BlockInput();
// //     block1.deleteBlockInput();
// // })
//
//
//
//
// //footer
// document.body.insertAdjacentHTML('afterend', '<div>Footer</div>');