// Application entry point - home page

import './style.css';
import './index.html';
import { initDropdown } from 'drop-down-init';
import { initReel } from './reel';
import { getDropDownOptions } from './drop-down';

console.log('hi future home page');
const dropDownOptions = getDropDownOptions();
initDropdown(dropDownOptions);

document.addEventListener('DOMContentLoaded', () => initReel());
