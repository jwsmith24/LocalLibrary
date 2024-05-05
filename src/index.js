// Application entry point - home page

import '../style.css';
import { initDropdown } from './drop-down';

console.log('hi future home page');

const dropDownOptions = [];

function defineDropdownOptions() {
  const homeOption = {
    id: 'home',
    href: 'index.html',
  };

  const shelfOption = {
    id: 'shelf',
    href: 'https://mail.google.com',
  };

  const aboutOption = {
    id: 'about',
    href: 'https://github.com/jwsmith24?tab=repositories',
  };

  dropDownOptions.push(homeOption);
  dropDownOptions.push(shelfOption);
  dropDownOptions.push(aboutOption);
  console.log('Options: ');
  console.log(dropDownOptions);
}

defineDropdownOptions();
initDropdown(dropDownOptions);
