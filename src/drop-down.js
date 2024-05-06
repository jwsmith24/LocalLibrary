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

  const signInOption = {
    id: 'signIn',
    href: 'login.html',
  };

  dropDownOptions.push(homeOption);
  dropDownOptions.push(shelfOption);
  dropDownOptions.push(aboutOption);
  dropDownOptions.push(signInOption);

  return dropDownOptions;
}

export function getDropDownOptions() {
  return defineDropdownOptions();
}
