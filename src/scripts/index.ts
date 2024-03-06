import * as _ from 'lodash';
import '../assets/scss/index.scss';
import { test } from './functions';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // call imported function
  test();

  return element;
}

document.body.appendChild(component());
