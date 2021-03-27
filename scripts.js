const menuList = document.querySelector('.nav-list');
const menuImage = document.querySelector('.menu-image');
const menuClose = document.querySelector('.menu-close-icon');

menuImage.addEventListener('click', ()=>{
    if (menuList){
        menuList.style.pointerEvents = "All";
        menuList.style.opacity = "1";
        menuImage.style.display = "none";
        menuClose.style.display = "block";
    }

});

menuClose.addEventListener('click', ()=>{
    if (menuList){
        menuList.style.pointerEvents = "none";
        menuList.style.opacity = "0";
        menuImage.style.display = "block";
        menuClose.style.display = "none"
    }

});