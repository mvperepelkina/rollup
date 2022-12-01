import "./index.css";
import JS_IMAGE from './assets/javascriptimage.png';

console.log("Hello World");


const container = document.createElement('div');
container.className = 'container';

document.body.append(container);

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'I love JavaScript';

container.append(title);

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;

container.append(jsImageHTML);