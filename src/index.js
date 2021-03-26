import './styles.css';

import menuListTemplate from './template/template.hbs';
import menuList from './menu.json';

const menuRef = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const checkRef = document.querySelector('#theme-switch-toggle');

const createmenuListMarkup = menuListTemplate(menuList);
menuRef.insertAdjacentHTML('beforeend',  createmenuListMarkup);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

bodyRef.classList.add(LIGHT)

console.log(localStorage);

checkRef.addEventListener('change', changeClass)

function changeClass  ()  {
    if (bodyRef.classList.contains(LIGHT)) {
        bodyRef.classList.remove(LIGHT);
        bodyRef.classList.add(DARK);
        localStorage.setItem('Theme', DARK);
    }
    else {
        bodyRef.classList.remove(DARK);
        bodyRef.classList.add(LIGHT);
        localStorage.setItem('Theme', LIGHT);
        
    };

}

if (localStorage.getItem('Theme')) {
    bodyRef.classList.add(localStorage.getItem('Theme'));
}
    


if (localStorage.getItem(DARK)) {
    checkRef.checked = true;
    //checkRef.setAttribute('checked', true)
} 

let y = checkRef.checked
console.log(y);

