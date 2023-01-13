
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

/*

//hero slides
let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot")
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }


    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1
    }

    slides[slideIndex-1].style.display = "flex";

    

    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}
*/