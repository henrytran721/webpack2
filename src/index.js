import {fooString} from './foo';
import './style.css';
import Icon from './icon.png';
import {printMe} from './print'


fooString('Henry');
console.log('Hello, my name is Henry');

function component(){
  let element = document.createElement('div');
  const btn = document.createElement('button');
  element.innerHTML = "Hello webpack";
  element.classList.add('hello');

  btn.innerHTML = "click me and check the console!";
  btn.onclick = printMe;

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
