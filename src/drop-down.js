// given a menu option object with attributes id and href, add event listeners each option.
export const initDropdown = (menuOptions) => {
  const dropDownMenu = document.getElementById('drop-icon');
  dropDownMenu.addEventListener('click', () => {
    toggleDropDownVisibility();
  });

  dropDownMenu.addEventListener('mouseover', () => {
    toggleDropDownVisibility();
  });
  dropDownMenu.addEventListener('mouseout', () => {
    toggleDropDownVisibility();
  });

  menuOptions.forEach((element) => {
    linkButton(element.id, element.href);
  });
};

export function linkButton(buttonElementId, href) {
  console.log('Linking button with id: ' + buttonElementId);
  const button = document.getElementById(buttonElementId);
  button.addEventListener('click', () => {
    window.location.href = href;
  });
}

function toggleDropDownVisibility() {
  console.log('toggle visibility');
  const dropMenu = document.querySelector('.drop-menu');
  console.log(dropMenu);
  if (dropMenu.classList.contains('visible')) {
    dropMenu.classList.remove('visible');
  } else {
    dropMenu.classList.add('visible');
  }
}
