const startBtn  = document.getElementById('start-rotation');
const stopBtn   = document.getElementById('stop-rotation');
const bikeImage = document.getElementById('bike-image');

const popupMessage  = $('#popup')
const popupBackground = $('#popup-background')
const closePopup = $('#close-popup')
const practice = $('#practice')

let popupTimeHandler;
let popupVisible = false

let currentImg = 1;
const maxImg = 34;
let rotateHandler;
let animating = false;
const delay = 100;
let imgTimeHandler;

popupBackground.hide()

popupTimeHandler = setTimeout(function(){
    toggleFade()
}, 3000)

closePopup.click(function(){
    toggleFade()
})

displayCurrentImg(currentImg);

startBtn.addEventListener('click', function(){
    clearTimeout(popupTimeHandler)
    if(!animating){
        rotateHandler = requestAnimationFrame(rotate);
        animating = true;
    };
});
stopBtn.addEventListener('click', function(){
    clearTimeout(imgTimeHandler);
    console.log('stop');
    animating = false;
});

function toggleFade(){
    if(!popupVisible){
        popupBackground.fadeIn("1000")
        popupMessage.fadeTo("1000", 1)
        popupVisible = true
    }else if(popupVisible){
        popupBackground.fadeOut("1000")
        popupMessage.fadeTo("1000", 0)
        popupVisible = false
    }
}

function displayCurrentImg(imgNum){
    bikeImage.src = `../product-images/bike-${imgNum}.jpg`;
    console.log(imgNum);
};

function rotate(){
    imgTimeHandler = setTimeout(function(){
        if(currentImg == 34){
        currentImg = 0;
        };
        currentImg ++;
        displayCurrentImg(currentImg);
        rotateHandler = requestAnimationFrame(rotate);
    }, delay);

};







