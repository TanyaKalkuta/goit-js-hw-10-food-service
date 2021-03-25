import './styles.css';

import menuListTemplate from './template/template.hbs';
import menuList from './menu.json';

const menuRef = document.querySelector('.js-menu');

const createmenuListMarkup = menuListTemplate(menuList);
menuRef.insertAdjacentHTML('beforeend',  createmenuListMarkup);


