let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

//loop trhough the images and set the display to none
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
    }
}

function startSlide(){  reset(); sliderImages[0].style.display = 'block'; }

startSlide();

arrowRight.addEventListener('click', function(){
reset();
if(current === sliderImages.length - 1) { 
    current = 0; 
    
    sliderImages[current].style.display = 'block';
}
else{ current++; sliderImages[current].style.display = 'block';}
});

arrowLeft.addEventListener('click', function(){
reset();

if(current === 0) { current = sliderImages.length-1; sliderImages[current].style.display = 'block';}
else{ current--; sliderImages[current].style.display = 'block';}
});