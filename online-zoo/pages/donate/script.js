const nav1 = document.querySelector('.burger-menu');
const navigation = document.querySelector('.navigation-menu');
const burgerclose=document.querySelector('.burger-close-nav');
const navEl1 = document.querySelector('.Element1');
const navEl2 = document.querySelector('.Element2');
const navEl3 = document.querySelector('.Element3');
const navEl4 = document.querySelector('.Element4');
const navEl5 = document.querySelector('.Element5');
const cont = document.querySelector('.container');
const Create = document.querySelector('.Create');
const closer = document.querySelector('.burger-close-nav');
const text111 = document.querySelector('.logotext1');
 const back = document.querySelector('.greyform');
const el1 = document.querySelector('.ee1');
const el2 = document.querySelector('.ee2');
const el3 = document.querySelector('.ee3');
const el4 = document.querySelector('.ee4');
const el5= document.querySelector('.ee5');
const el6 = document.querySelector('.ee6');
const el7 = document.querySelector('.ee7');
const el8 = document.querySelector('.ee8');
const roller = document.querySelector('.roller');
const roller1 = document.querySelector('.roller1');
const roller2= document.querySelector('.roller2');
const roller3 = document.querySelector('.roller3');
const roller4 = document.querySelector('.roller4');
const roller5 = document.querySelector('.roller5');
const roller6 = document.querySelector('.roller6');
const roller7 = document.querySelector('.roller7');
const roller8 = document.querySelector('.roller8');
const text1 = document.querySelector('.p1');
const text2 = document.querySelector('.p22');
const text3 = document.querySelector('.p3');
const text4 = document.querySelector('.p4');
const text5 = document.querySelector('.p5');
const text6 = document.querySelector('.p6');
const text7 = document.querySelector('.p7');
const text8 = document.querySelector('.p8');
const inp = document.querySelector('.in');

nav1.addEventListener('click', ()=>{
	text111.classList.add('logotext1__active');
	closer.classList.remove('burger-close-nav')
	closer.classList.add('burger-close-nav__active')
	navigation.classList.add('navigation-menu__active');
	navigation.classList.remove('navigation-menu');
	cont.classList.add('container__active');
	navEl1.classList.remove('Element1');
    navEl1.classList.add('Element1__active');
	navEl2.classList.add('Element2__active');
	navEl3.classList.add('Element3__active');
	navEl4.classList.add('Element4__active');
	navEl5.classList.add('Element5__active');
    Create.classList.add('Create__active');
	Create.classList.remove('Create');
	back.classList.add('greyform__active');

});
closer.addEventListener('click', ()=>{
	back.classList.remove('greyform__active');
	closer.classList.add('burger-close-nav')
	closer.classList.remove('burger-close-nav__active')
	navigation.classList.remove('navigation-menu__active');
	navigation.classList.add('navigation-menu');
	cont.classList.remove('container__active');
	navEl1.classList.add('Element1');
    navEl1.classList.remove('Element1__active');
	navEl2.classList.remove('Element2__active');
	navEl3.classList.remove('Element3__active');
	navEl4.classList.remove('Element4__active');
	navEl5.classList.remove('Element5__active');
    Create.classList.remove('Create__active');
	Create.classList.add('Create');
	text111.classList.remove('logotext1__active');
})
back.addEventListener('click', ()=>{
	text111.classList.remove('logotext1__active');
	back.classList.remove('greyform__active');
	closer.classList.add('burger-close-nav')
	closer.classList.remove('burger-close-nav__active')
	navigation.classList.remove('navigation-menu__active');
	navigation.classList.add('navigation-menu');
	cont.classList.remove('container__active');
	navEl1.classList.add('Element1');
    navEl1.classList.remove('Element1__active');
	navEl2.classList.remove('Element2__active');
	navEl3.classList.remove('Element3__active');
	navEl4.classList.remove('Element4__active');
	navEl5.classList.remove('Element5__active');
    Create.classList.remove('Create__active');
	Create.classList.add('Create');
})
// 




el1.addEventListener('click', ()=>{
	roller2.classList.add('roller2__active');
	roller3.classList.remove('roller3__active');
	roller.classList.remove('roller__active');
	roller4.classList.remove('roller4__active');
	roller5.classList.remove('roller5__active');
	roller1.classList.remove('roller1__active');
	roller7.classList.remove('roller7__active');
	roller8.classList.remove('roller8__active');
	text1.classList.add('p1__active');
	text2.classList.remove('p22__active');
	text3.classList.remove('p3__active');
	text4.classList.remove('p4__active');
	text5.classList.remove('p5__active');
	text6.classList.remove('p6__active');
	text7.classList.remove('p7__active');
	text8.classList.remove('p8__active');
	text6.classList.remove('p6_n__active');
	inp.value= '5000';
});
el2.addEventListener('click', ()=>{
	roller2.classList.remove('roller2__active');
	roller3.classList.add('roller3__active');
	roller.classList.remove('roller__active');
	roller4.classList.remove('roller4__active');
	roller5.classList.remove('roller5__active');
	roller1.classList.remove('roller1__active');
	roller7.classList.remove('roller7__active');
	roller8.classList.remove('roller8__active');
	text1.classList.remove('p1__active');
	text2.classList.add('p22__active');
	text3.classList.remove('p3__active');
	text4.classList.remove('p4__active');
	text5.classList.remove('p5__active');
	text6.classList.remove('p6__active');
	text7.classList.remove('p7__active');
	text8.classList.remove('p8__active');
	text6.classList.remove('p6_n__active');
	inp.value= '2000';
});
el3.addEventListener('click', ()=>{
	roller.classList.add('roller__active');
	roller2.classList.remove('roller2__active');
	roller3.classList.remove('roller3__active');
	roller4.classList.remove('roller4__active');
	roller5.classList.remove('roller5__active');
	roller1.classList.remove('roller1__active');
	roller7.classList.remove('roller7__active');
	roller8.classList.remove('roller8__active');
	text1.classList.remove('p1__active');
	text2.classList.remove('p22__active');
	text3.classList.add('p3__active');
	text4.classList.remove('p4__active');
	text5.classList.remove('p5__active');
	text6.classList.remove('p6__active');
	text7.classList.remove('p7__active');
	text8.classList.remove('p8__active');
	text6.classList.remove('p6_n__active');
	inp.value= '1000';
});
el4.addEventListener('click', ()=>{
	roller4.classList.add('roller4__active');
	roller2.classList.remove('roller2__active');
	roller3.classList.remove('roller3__active');
	roller.classList.remove('roller__active');
	roller5.classList.remove('roller5__active');
	roller1.classList.remove('roller1__active');
	roller7.classList.remove('roller7__active');
	roller8.classList.remove('roller8__active');
	text1.classList.remove('p1__active');
	text2.classList.remove('p22__active');
	text3.classList.remove('p3__active');
	text4.classList.add('p4__active');
	text5.classList.remove('p5__active');
	text6.classList.remove('p6__active');
	text7.classList.remove('p7__active');
	text8.classList.remove('p8__active');
	text6.classList.remove('p6_n__active');
	inp.value= '500';
});
el5.addEventListener('click', ()=>{
	roller5.classList.add('roller5__active');
	roller2.classList.remove('roller2__active');
	roller3.classList.remove('roller3__active');
	roller.classList.remove('roller__active');
	roller4.classList.remove('roller4__active');
	roller1.classList.remove('roller1__active');
	roller7.classList.remove('roller7__active');
	roller8.classList.remove('roller8__active');
	text1.classList.remove('p1__active');
	text2.classList.remove('p22__active');
	text3.classList.remove('p3__active');
	text4.classList.remove('p4__active');
	text5.classList.add('p5__active');
	text6.classList.remove('p6__active');
	text7.classList.remove('p7__active');
	text8.classList.remove('p8__active');
	text6.classList.remove('p6_n__active');
	inp.value= '250';
});
el6.addEventListener('click', ()=>{
	roller1.classList.add('roller1__active');
	roller2.classList.remove('roller2__active');
	roller3.classList.remove('roller3__active');
	roller.classList.remove('roller__active');
	roller4.classList.remove('roller4__active');
	roller5.classList.remove('roller5__active');
	roller7.classList.remove('roller7__active');
	roller8.classList.remove('roller8__active');
	text1.classList.remove('p1__active');
	text2.classList.remove('p22__active');
	text3.classList.remove('p3__active');
	text4.classList.remove('p4__active');
	text5.classList.remove('p5__active');
	text6.classList.add('p6__active');
	text7.classList.remove('p7__active');
	text8.classList.remove('p8__active');
	inp.value= '100';
});
el7.addEventListener('click', ()=>{
	roller7.classList.add('roller7__active');
	roller2.classList.remove('roller2__active');
	roller3.classList.remove('roller3__active');
	roller.classList.remove('roller__active');
	roller4.classList.remove('roller4__active');
	roller5.classList.remove('roller5__active');
	roller1.classList.remove('roller1__active');
	roller8.classList.remove('roller8__active');
	text1.classList.remove('p1__active');
	text2.classList.remove('p22__active');
	text3.classList.remove('p3__active');
	text4.classList.remove('p4__active');
	text5.classList.remove('p5__active');
	text6.classList.remove('p6__active');
	text7.classList.add('p7__active');
	text8.classList.remove('p8__active');
	text6.classList.remove('p6_n__active');
	inp.value= '50';
});
el8.addEventListener('click', ()=>{
	roller8.classList.add('roller8__active');
	roller2.classList.remove('roller2__active');
	roller3.classList.remove('roller3__active');
	roller.classList.remove('roller__active');
	roller4.classList.remove('roller4__active');
	roller5.classList.remove('roller5__active');
	roller1.classList.remove('roller1__active');
	roller7.classList.remove('roller7__active');
	text1.classList.remove('p1__active');
	text2.classList.remove('p22__active');
	text3.classList.remove('p3__active');
	text4.classList.remove('p4__active');
	text5.classList.remove('p5__active');
	text6.classList.remove('p6__active');
	text7.classList.remove('p7__active');
	text8.classList.add('p8__active');
	text6.classList.remove('p6_n__active');
	inp.value= '25';
});
 inp.addEventListener('input',()=>{

 })

$('body').on('input', 'input[type="number"][maxlength]', function(){
	if (this.value.length > this.maxLength){
		this.value = this.value.slice(0, this.maxLength);
	}
});