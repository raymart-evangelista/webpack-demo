import _ from 'lodash';
import './style.css';
import myName from './myName';
import Icon from './corgi-icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.textContent = myName('Raymart');
  element.classList.add('hello');

  btn.innerHTML = 'Clickme and check the console!';
  btn.onclick = printMe;
  
  element.appendChild(btn);

  const corgi = new Image();
  corgi.src = Icon;

  element.appendChild(corgi);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());