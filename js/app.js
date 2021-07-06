const slides=document.querySelectorAll('.slide')
const img=document.querySelectorAll('.slide img')
const nextbtn=document.querySelector('.next')
const prevbtn=document.querySelector('.prev')
const bottomclick=document.querySelector('.bottomclick');
let actived=true;
let lis;
slides.forEach((value, index) => {
let imgAttr=img[index].getAttribute('src')
bottomclick.innerHTML+=`  <li class="btn_clik ${actived ? 'active':""} "><img
src="${imgAttr}"
alt=""></li>`
actived=false;

})
lis=document.querySelectorAll('.btn_clik')
let currentSlide=0;
function changeSlide(){
    slides.forEach((slide,index) => {
    if(slide.classList.contains('active')){
        currentSlide=index
    }


})

slides[currentSlide].classList.remove('active')
lis[currentSlide].classList.remove('active')
if(currentSlide==slides.length-1){
    slides[0].classList.add('active')
    lis[0].classList.add('active')

}else{
    slides[currentSlide+1].classList.add('active')
    lis[currentSlide+1].classList.add('active')
}

}
let interval=setInterval(changeSlide,1000);


const nextslider=()=>{
clearInterval(interval);
slides.forEach((v,index) => {
   
        v.classList.remove('active')

})
lis.forEach((v,index) => {
v.classList.remove('active')
})
slides[currentSlide].classList.remove('active')
lis[currentSlide].classList.remove('active')

if(currentSlide==slides.length-1){
    slides[0].classList.add('active')
    lis[0].classList.add('active')
    currentSlide=0;
}else{
    slides[currentSlide+1].classList.add('active');
    lis[currentSlide+1].classList.add('active')
    currentSlide=currentSlide+1;
}
 
interval=setInterval(changeSlide,1000);
}



const previousSlide=()=>{
clearInterval(interval);
slides.forEach((slide,index) => {
    
        slide.classList.remove('active')
   

})
lis.forEach((v,index) => {
    
        v.classList.remove('active')
   

})
slides[currentSlide].classList.remove('active')
lis[currentSlide].classList.remove('active')

if(currentSlide==0){
    slides[slides.length-1].classList.add('active')
    lis[currentSlide].classList.add('active')
    currentSlide=slides.length-1;
}else{
    slides[currentSlide-1].classList.add('active');
    lis[currentSlide-1].classList.add('active')
    currentSlide=currentSlide-1;
}
 interval=setInterval(changeSlide,1000);

}
lis.forEach(function(value,index){
    value.addEventListener('click', function(){
        clearInterval(interval);
        slides.forEach(e=>{
            e.classList.remove('active')
        })
        lis.forEach(e=>{
            e.classList.remove('active')
        })
       slides[index].classList.add('active');
       lis[index].classList.add('active')
       currentSlide=index 
       interval=setInterval(changeSlide,1000);
    })
})

nextbtn.addEventListener('click',nextslider)
prevbtn.addEventListener('click',previousSlide)