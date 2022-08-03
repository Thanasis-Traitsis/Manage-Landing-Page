const menu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('.menu-btn');
const navList = document.querySelector('.nav__list');
const bg = document.querySelector('.main');

// const btnSlide = document.querySelectorAll('.btnSl');
// const testContainer = document.querySelector('.testimonials__people');

// const btn1 = document.querySelector('.btnSl sl1');
// const btn2 = document.querySelector('.btnSl sl2');
// const btn3 = document.querySelector('.btnSl sl3');
// const btn4 = document.querySelector('.btnSl sl4');

// // Slide Show

// var i = 0;
// var time;

// function startSlide(){
//     time = setInterval("changeImage()" , 5000);
//     btnSlide[i].classList.add('active');
// }

// function changeImage(){

//     i++;
    
//     if(i>3){
//         i=0;
//         btnSlide[3].classList.remove('active');
//     }

//     testContainer.style.marginLeft = -(i*100) +"vw";
//     btnSlide[i].classList.add('active');
//     btnSlide[i-1].classList.remove('active');

// }

// btnSlide[i].addEventListener('click', addActive);

// function addActive(){
//     btnSlide[i].classList.add('active');
// }

// --------------------------

// Show navbar list when you click the burger button
let showMenu = false;

menu.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu) {

        for (var i = 0; i < menuBtn.length; i++) {
            menuBtn[i].classList.add('open');
        }

        navList.classList.add('open');
        bg.classList.add('open');

        showMenu = true;
    }

    else {
        for (var i = 0; i < menuBtn.length; i++) {
            menuBtn[i].classList.remove('open');
        }

        navList.classList.remove('open');
        bg.classList.remove('open');

        showMenu = false;
    }
}

// --------------------------

// YouTube Video Slide Show

    var counter = 1;

    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter ++;

        if(counter > 4){
            counter = 1; 
        }
    }, 5000)

// --------------------------