let idade = prompt("Digite sua idade: ")

if (idade >= 12){
    BemVindo()
}

else{
    window.location.replace("https://google.com")
}

function BemVindo(){
    alert()
    alert("Bem vindo ao site da SAVE!")
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage()
}, 4000)

function nextImage(){
    count ++;
    if (count > 3){
        count = 1
    }

    document.getElementById(`radio${count}`).checked = true;
}

let menuMobile = document.querySelector(".menu-mobile")

function mobileMenu(){

    if (menuMobile.classList.contains("invisivel")){
        menuMobile.classList.remove("invisivel");
        menuMobile.classList.add("visivel");
    }
     
    else{
        menuMobile.classList.add("invisivel");
        menuMobile.classList.remove("visivel");
    }
}

if (window.innerWidth < 750){
    menuMobile.classList.add("invisivel");
    menuMobile.classList.remove("visivel");
}