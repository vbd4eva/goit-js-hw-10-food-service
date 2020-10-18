import menuItemsHtmlTpl from '../templates/menu-items.hbs';
import menuItemsData from '../json/menu.json';

const jsMenuEl = document.querySelector('.js-menu');
jsMenuEl.innerHTML = menuItemsHtmlTpl(menuItemsData);