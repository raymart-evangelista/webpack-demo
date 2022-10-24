import _ from 'lodash';
import './style.css';
import myName from './myName';
import Icon from './corgi-icon.png';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.textContent = myName('Raymart');
  element.classList.add('hello');

  const corgi = new Image();
  corgi.src = Icon;

  element.appendChild(corgi);

  return element;
}

document.body.appendChild(component());