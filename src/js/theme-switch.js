import localStorageAPI from './local-storage-api.js';

const Theme = {
  TOGGLE_EL_NAME: 'theme',

  LIGHT: 'light-theme',

  DARK: 'dark-theme',  
};

let currentTheme;
let actionTheme;
onLoad();



function onLoad() { 
  Theme.toggleEl = document.querySelector(`[name=${Theme.TOGGLE_EL_NAME}]`);

  currentTheme = localStorageAPI.load(Theme.TOGGLE_EL_NAME);

  actionTheme = (!currentTheme) ? getThemeByCheckThemeToggleEl() : currentTheme;

  changeThemeDesign(actionTheme);

  Theme.toggleEl.addEventListener('change', onChangeThemeToggleEl);
}

function getThemeByCheckThemeToggleEl() { 
  return (Theme.toggleEl.checked) ? Theme.DARK : Theme.LIGHT; 
}

function changeThemeDesign(actionTheme) { 

  if (!actionTheme) return;

  document.body.classList.remove(currentTheme);
  document.body.classList.add(actionTheme);

  Theme.toggleEl.checked = (actionTheme === Theme.DARK);

  localStorageAPI.save(Theme.TOGGLE_EL_NAME, actionTheme);

  currentTheme = actionTheme;
}

function onChangeThemeToggleEl() { 

  actionTheme = getThemeByCheckThemeToggleEl();

  changeThemeDesign(actionTheme);
}



