// navbar    function
var menu = document.querySelector('#first-image');
var nav = document.querySelector('nav');
var onlist = document.querySelector('.onlist');

menu.onclick = function(){
    nav.classList.toggle("navlist");
    onlist.classList.toggle("on")
}


var main=document.querySelector(".slider");
var display = 0;
function hide(){
if(display == 1){
onlist.style.display="none";
display=0;
}
if(display=0){
    menu.style.display="block"
    display=0;
}
else{
    main.style.display="block";
    display=1;
}
};




// 'js/mian.js'
const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
if(slides.length){
	slides[slideindex].classList.add("displaySlide")
intervalId = setInterval(nextSlide,5000)
}

function showSlide(index){
if(index >= slides.length){
slideindex = 0;
}else if(index < 0){
slideindex =slides.length - 1;
}

slides.forEach(slide =>{
	slide.classList.remove("displaySlide")
});
slides[slideindex].classList.add("displaySlide")
}
function prevSlide(){
clearInterval(intervalId)	
slideindex--;
showSlide(slideindex)	
}
function nextSlide(){
	slideindex++
	showSlide(slideindex)
}


var slider_img = document.querySelector('.slider-img');
var images = ['bargur.png', 'nagtes.jpg', 'zinger.png', 'lopo.png', 'e.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = Image.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}

