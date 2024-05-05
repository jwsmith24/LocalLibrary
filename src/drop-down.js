/**
 * Creates a functional drop down menu given html elements and target path.
 *
 * Accepts an array of menu option objects in the format:
 *
 * {
 * id: <selector id>
 * href: <rel path to target>
 * }
 */
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

function linkButton(buttonElementId, href) {
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
