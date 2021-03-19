const burger = document.getElementById('menu-burger');
const menuUn = document.getElementById("menu_link");
const menuDeux = document.getElementById("class_menu");
const sousMenu1 = document.getElementById('sous_menu1');
const sousMenu2 = document.getElementById('sous_menu2');
const monBonMenu = document.querySelector('.subMenu');
const space1 = document.getElementById("space1");
const space2 = document.getElementById("space2");
const space3 = document.getElementById("space3");

    burger.addEventListener('click',() => { 
        burger.classList.toggle('active');
        sousMenu1.appendChild(menuDeux);
        sousMenu2.appendChild(menuUn);
        menuUn.classList.toggle('active_menu');
        menuDeux.classList.toggle('active_menu1');
        monBonMenu.classList.toggle('monSousM');
        space1.classList.toggle('space1');
        space2.classList.toggle('space2');
})