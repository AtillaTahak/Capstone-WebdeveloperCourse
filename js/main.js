const moduleBars = document.querySelector("#mobile-menu");
const moduleOverlay = document.querySelector(".mobile-module-overlay");
const moduleMenu = document.querySelector(".desktop-module-nav");
const moduleMenuTimes = document.querySelector(".modal-1");


moduleBars.addEventListener('click',()=>{
    moduleOverlay.style.display ="block";
    moduleMenu.style.display ="block";

});
moduleMenuTimes.addEventListener('click',()=>{
    moduleOverlay.style.display ="none";
    moduleMenu.style.display ="none";
});
moduleOverlay.addEventListener('click',()=>{
    moduleOverlay.style.display ="none";
    moduleMenu.style.display ="none";
});