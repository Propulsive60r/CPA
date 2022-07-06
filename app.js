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

