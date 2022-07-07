const entry = document.querySelector('#entry');

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

entry.style.cssText = `
${colorTemplate[1]};
${fontSizeTemplate[2]}
`;

entry.innerHTML = 'Hello World';

class Rectangle {
    width;
    height;

    constructor(w, h) {
        this.width = w;
        this.height = h;
    }

    calcArea () {
        return this.width * this.height;
    }
}

console.log(this)
class User {

    constructor(name) {
        console.log(this)
        this.name = name;
    }

    sayHi() {
        console.log(this);
    }

}

// Использование:
let user = new User("Иван");
user.sayHi();