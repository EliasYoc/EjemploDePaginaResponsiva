let btnMEnu=document.querySelector('.btn-menu');
let menu=document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador=true;
//Menu de navegacion
//btnMEnu.addEventListener('click', ()=>{menu.classList.toggle('show')});
btnMEnu.addEventListener('click',()=>{
    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    if(activador){
        menu.style.left ="0";
        menu.style.transition = "0.5s";
        activador=false;
    }else{
        menu.style.left="-100%";
        activador=true;
    }

});
//Clase activo de los elementos a
let enlaces = document.querySelectorAll('.lists li a');
enlaces.forEach((element) => {
    element.addEventListener('click',(event) => {
        enlaces.forEach((link)=>{
            link.classList.remove('activo');
        });
        event.target.classList.add('activo')
    });
});

//efecto de scroll
let prevScrollPos=window.pageYOffset;//estas en una posicion en Y de la pagina
let goTop=document.querySelector('.go-top');
window.onscroll = ()=>{
    //mostrar y ocultar menu
    let currentScrollPos=window.pageYOffset;
    if(prevScrollPos>currentScrollPos){
        containerMenu.style.top = "0";
        containerMenu.style.transition="0.5s"
    }
    else{
        containerMenu.style.top="-60px"
        containerMenu.style.transition="0.5s"
    }
    prevScrollPos = currentScrollPos;
    
    let arriba= window.pageYOffset;
    if(arriba <= 600){
        containerMenu.style.borderBottom = "none";
        goTop.style.right="-12%";
    }else{
        containerMenu.style.borderBottom = "5px solid #ff2e63"
        goTop.style.right="0";
    }
}
goTop.addEventListener('click',()=>{
    document.body.scrollTop =0;
    document.documentElement.scrollTop =0;
});

let verAbajo = document.querySelector('#abajo');
verAbajo.addEventListener('click', ()=>{
    document.body.scrollTop =630;
    document.documentElement.scrollTop =630;
});