/*const para = document.querySelector('div.error');
console.log(para);

const paras = document.querySelectorAll('p') 
paras.forEach(para=>{
    console.log(para);
})


const errors = document.querySelectorAll('.error');
errors.forEach(err=>{
    console.log(err);
});

//console.log(errors);

// for each looping
let title = document.getElementById('page-title');
console.log(title);

let first = document.getElementsByClassName('first');
console.log(first);

let check = document.getElementsByClassName('error');
console.log(check);
console.log(check[0]);


let last = document.getElementsByTagName('div');
console.log(last);
*/
 //const para= document.querySelector('p');
 //para.innerHTML  = 'ninjas are pretty awesome!';


///const par= document.querySelectorAll('p'); 

////par.forEach(para=>{
    //console.log(para.innerText);
    //para.innerText += '   well done comrades';
//});


/* properties of innerHTML
const content = document.querySelector('.content');
//console.log(content.innerHTML);

content.innerHTML += '<h2>This is my first time learning about programming<h2>'
*/

/*  learning about innerHTML in adding something to the html file
let content = document.querySelector('.content');

let names = ['Abraham','David','Elon','Faith','Prince'];

names.forEach(name=>{
     //console.log(name)
      content.innerHTML +=`<p>${name}</p>`
});
*/
/* learning about setting attribute

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.salamatracker.tech');
link.innerText = 'Salama Tracker Website'


const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));

msg.setAttribute('class','success');
msg.setAttribute('style', 'color:green;')

*/

/*   changing style in html using html and js only
let title = document.querySelector('h1');
//title.setAttribute('style','margin:50px;');
console.log(title.style.color);

title.style.margin='50px';

title.style.color ='red';
title.style.fontSize ='60px';
title.style.backgroundColor='grey';

title.style.backgroundColor='';

*/

// adding class to html file using js 
//const content = document.querySelector('p');

//content.classList.add('success');



const par = document.querySelectorAll('p');

par.forEach( pars =>{
if(pars.textContent.includes('error')){
    pars.classList.add('error');
}
if(pars.innerText.includes('success')){
    pars.classList.add('success')
}
});


const title = document.querySelector('.title');

title.classList.toggle('test');


