import _ from 'lodash';
import './style.css';
import myName from './myName';
import Icon from './corgi-icon.png';
import Data from './data.xml';
import Notes from './data.csv'

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.textContent = myName('Raymart');
  element.classList.add('hello');

  const corgi = new Image();
  corgi.src = Icon;

  element.appendChild(corgi);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());