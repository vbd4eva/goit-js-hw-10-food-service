import localStorageAPI from './local-storage-api.js';

const Theme = {
  TOGGLE_EL_NAME: 'theme',

  LIGHT: 'light-theme',

  DARK: 'dark-theme',
  
  
};

let currentTheme = undefined;
let actionTheme = undefined;

// находит єл. - переключатель темы
const themeToggleEl = document.querySelector(`[name=${Theme.TOGGLE_EL_NAME}]`);

//проверяет ВебСторадж
//     устанавливает значение Theme.currentTheme = значению в сторадж
currentTheme = localStorageAPI.load(Theme.TOGGLE_EL_NAME);

//если currentTheme = undefined
//       -> получает значение нужной темы 
//else actionTheme = currentTheme
actionTheme = (!currentTheme) ? getThemeByCheckThemeToggleEl() : currentTheme;

//      -> візівает функцию смены_дизайна(actionTheme)
changeThemeDesign(actionTheme);

//Вешает слушатель на 'change' "themeToggleEl" с функцией: onChangeThemeToggleEl;
themeToggleEl.addEventListener('change', onChangeThemeToggleEl);



function onChangeThemeToggleEl() { 
  //Функция возвращает значение темы согласно порожения "тумблера"
  actionTheme = getThemeByCheckThemeToggleEl();
  //      -> візівает функцию смены_дизайна(actionTheme)
  changeThemeDesign(actionTheme);
}

//Функция возвращает значение темы согласно порожения "тумблера"
function getThemeByCheckThemeToggleEl() { 
  return (themeToggleEl.checked) ? Theme.DARK : Theme.LIGHT; 
}

// функция смены_дизайна(actionTheme)
function changeThemeDesign(actionTheme) { 
  // - если !actionTheme return
  if (!actionTheme) return false;

  // -  снимает с БОДИ.currentTheme
  document.body.classList.remove(currentTheme);

  // -  вешает на БОДИ.actionTheme
  document.body.classList.add(actionTheme);

  // -  переключает тумблер согласно теме....
  themeToggleEl.checked = (actionTheme === Theme.DARK) ? true : false;

  // -  записывает значение новой темы в локал сторадж
  localStorageAPI.save(Theme.TOGGLE_EL_NAME, actionTheme);

  // -  currentTheme = actionTheme;
  currentTheme = actionTheme;

  return true;
}
