alert('Господа проверяющие, если не трудно ,отложите проверку на последний день , так как из-за болезни не смог полностью успеть в реализации ')
const navburger = document.querySelector('.burger');
const burgerclose=document.querySelector('.burger-close-nav');
const navEl = document.querySelector('.Element1');
const navEl2 = document.querySelector('.Element3');
const navEl1 = document.querySelector('.Element2');
const logo =document.querySelector('.logoone1');
const navEl3 = document.querySelector('.Element4');
const navEl4 = document.querySelector('.Element5');
const create = document.querySelector('.Create');
const navigation1 = document.querySelector('.navigation');
const greyBg = document.querySelector('.greyform');
const conteiner = document.querySelector('.container');
const elementNavig = document.querySelector('.rr');
const text = document.querySelector(' .logotext1');
//burgerMenu/////
navburger.addEventListener('click', () => {
text.classList.add('logotext1__active');
greyBg.classList.add('greyform__active');
burgerclose.classList.add('burger-close-nav__active');
create.classList.add('Create__active');
navEl.classList.remove('Element1');
navEl1.classList.remove('Element2');
navEl1.classList.add('Element2__active');
elementNavig.classList.add('rr__active');
conteiner.classList.add('container__active');
navigation1.classList.add('navigation__active');
navEl2.classList.remove('Element3');
navEl2.classList.add('Element3__active');
navEl3.classList.remove('Element4');
navEl3.classList.add('Element4__active');
navEl4.classList.remove('Element5');
navEl4.classList.add('Element5__active');
});
burgerclose.addEventListener('click', () => {
    navigation1.classList.remove('navigation__active');
    greyBg.classList.remove('greyform__active');
    navEl.classList.add('Element1');
navEl1.classList.add('Element2');
navEl1.classList.remove('Element2__active');
elementNavig.classList.remove('rr__active');
conteiner.classList.remove('container__active');
navigation1.classList.remove('navigation__active');
navEl2.classList.add('Element3');
navEl2.classList.remove('Element3__active');
navEl3.classList.add('Element4');
navEl3.classList.remove('Element4__active');
navEl4.classList.add('Element5');
navEl4.classList.remove('Element5__active');
})
greyBg.addEventListener('click', () => {
    navigation1.classList.remove('navigation__active');
    greyBg.classList.remove('greyform__active');
    navEl.classList.add('Element1');
navEl1.classList.add('Element2');
navEl1.classList.remove('Element2__active');
elementNavig.classList.remove('rr__active');
conteiner.classList.remove('container__active');
navigation1.classList.remove('navigation__active');
navEl2.classList.add('Element3');
navEl2.classList.remove('Element3__active');
navEl3.classList.add('Element4');
navEl3.classList.remove('Element4__active');
navEl4.classList.add('Element5');
navEl4.classList.remove('Element5__active');
})



let items = document.querySelectorAll('.item');
let currentItem = 0; //index selected item
let isEnabled = true; 

function changeCurrentItem (n){
    currentItem = (n + items.length) % items.length;
} ;
function hideItem(direction){
    isEnabled=false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('active', direction);
    });
};

function showItem(direction){
    items[currentItem].classList.add('next',direction);
    items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isEnabled = true;
    });
};

function previousItem(n){
    hideItem('to-right');
changeCurrentItem(n - 1);
showItem('from-left');
};
function nextItem(n){
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
    };
document.querySelector('.leftStr').addEventListener('click', function(){
 if (isEnabled){
    previousItem(currentItem);
 } 
});
document.querySelector('.rightStr').addEventListener('click', function(){
    if (isEnabled){
       nextItem(currentItem);
    } 
   });

const op = document.querySelector(".op");
const inner = document.querySelector(".opinion")
const input = document.querySelector(".range");
let testimonialsItemGap = 29;
	let testimonialsItemWidth = 267;
    if (document.documentElement.clientWidth <= 1280) {
        testimonialsItemGap = 27;
        testimonialsItemWidth = 295;
        input.max = 4;
    }
    
    if (document.documentElement.clientWidth <= 980) {
        input.max = 5;
    }
    input.addEventListener('input', (e) => {
        const value = input.value;
		inner.style.transform = `translateX(-${
			value * (testimonialsItemWidth + testimonialsItemGap)
		}px)`;
	});
    const op3 = document.querySelector('.three');
    const op4 = document.querySelector('.four');
    const op1 = document.querySelector('.one');
    const pop1 = document.querySelector('.popup1');
    const pop2 = document.querySelector('.popup2');
    const pop3 = document.querySelector('.popup3');
    const over = document.querySelector('.overlay2');
    const closer = document.querySelector('.popup-close');
    const closer2 = document.querySelector('.popup-close2');
    const closer3 = document.querySelector('.popup-close3');
    op1.addEventListener('click', ()=>{
     over.classList.add("overlay2__active");
     pop1.classList.add('popup1__active');
    })
    op3.addEventListener('click', ()=>{
        over.classList.add("overlay2__active");
        pop2.classList.add('popup2__active');
       })
       op4.addEventListener('click', ()=>{
        over.classList.add("overlay2__active");
        pop3.classList.add('popup3__active');
       })
       over.addEventListener('click',()=>{
              pop1.classList.remove('popup1__active');
       pop2.classList.remove('popup2__active');
       pop3.classList.remove('popup3__active'); 
       over.classList.remove('overlay2__active');
       })
       closer.addEventListener('click', ()=>{
        pop1.classList.remove('popup1__active'); 
        over.classList.remove('overlay2__active');
       })
       closer2.addEventListener('click', ()=>{
        pop2.classList.remove('popup2__active'); 
        over.classList.remove('overlay2__active');
       })
       closer3.addEventListener('click', ()=>{
        pop3.classList.remove('popup3__active'); 
        over.classList.remove('overlay2__active');
       })
