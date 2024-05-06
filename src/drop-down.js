function defineDropdownOptions() {
  const dropDownOptions = [];
  const homeOption = {
    id: 'home',
    href: 'index.html',
  };

  const shelfOption = {
    id: 'shelf',
    href: 'library.html',
  };

  const aboutOption = {
    id: 'about',
    href: 'https://github.com/jwsmith24?tab=repositories',
  };

  dropDownOptions.push(homeOption);
  dropDownOptions.push(shelfOption);
  dropDownOptions.push(aboutOption);

  return dropDownOptions;
}

export function getDropDownOptions() {
  return defineDropdownOptions();
}
