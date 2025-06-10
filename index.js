const slides = document.getElementsByClassName("carousel-item");
 let slidepostion = 0;
 const totalSlides = slides.length;

 const nextBtn = document.getElementById("carousel-btn-next");
 const prevBtn = document.getElementById("carousel-btn-prev");

nextBtn.addEventListener('click', movetoNextSlide);
prevBtn.addEventListener('click', movetoprevSlide);

function hideAllItems(){
    for(slide of slides){
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hide");
    }
}

function movetoNextSlide(){
    hideAllItems();
    if(slidepostion === totalSlides - 1){
        slidepostion = 0;
    }else{
        slidepostion++;
    }
    slides[slidepostion].classList.add("carousel-item-visible");
}

function movetoprevSlide(){
    hideAllItems();
    if(slidepostion === 0){
        slidepostion = totalSlides-1;
    }else{
        slidepostion--;
    }
    slides[slidepostion].classList.add("carousel-item-visible");
}