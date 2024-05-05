// given a menu option object with attributes id and href, add event listeners each option.
export const initDropdown = (menuOptions) => {
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
