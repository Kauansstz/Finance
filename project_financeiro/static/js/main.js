document.addEventListener('DOMContentLoaded', function() {
    const ShowMenu = document.querySelector(".expanded");
    const MenuConteiner = document.querySelector(".menu-conteiner");
    const teste =  "menu-hidden";

    const Menu = () =>{
        MenuConteiner.classList.toggle(teste);
    };


    if (ShowMenu){
        ShowMenu.addEventListener('click', Menu);
    };

   
})