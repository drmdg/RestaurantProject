
import { ids } from 'webpack';
import './style.css';


let content=document.getElementById('content');

let newdiv = document.createElement('div');

newdiv.classList.add('paginaprincipal');

let aux =document.createElement('div');

aux.classList.add('image');

let aux2=document.createElement('img');

aux2.setAttribute("src","/src/img/rest.jpg");

aux.appendChild(aux2);

newdiv.appendChild(aux);

content.appendChild(newdiv);
// -----------------------------------------
newdiv=document.createElement('div');

newdiv.classList.add('rightside');

let ul=document.createElement('ul');

let li2= document.createElement('li');

let li = document.createElement('li');

let link = document.createElement('a');

link.setAttribute("id","contato");

link.innerHTML="Contato";

link.addEventListener('click',()=>{
    let a1=document.getElementsByClassName('contatos')[0];
    a1.style.cssText="display:flex";
    let a2=document.getElementsByClassName('rightside')[0];
    a2.style.cssText="display:none";

});

li.appendChild(link);

ul.appendChild(li);

link = document.createElement('a');

link.setAttribute("id","menu");

link.innerHTML="Menu";

link.addEventListener('click',()=>{
    a1 = document.getElementsByClassName('menu')[0];
    a1.style.cssText="display:flex";
    a2 = document.getElementsByClassName('rightside')[0];
    a2.style.cssText="display:none";
});

li2.appendChild(link);

ul.appendChild(li2);

aux=document.createElement('div');

aux.appendChild(ul);

aux2=document.createElement('h1');

aux2.innerHTML="Odin's Restaurant";

newdiv.appendChild(aux2);

newdiv.appendChild(aux);

aux2=document.createElement('p');

aux2.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima exercitationem ratione tempora dolorem quaerat, nemo aliquid similique, sapiente impedit quis recusandae fugit temporibus deserunt ipsa, quibusdam quisquam. Architecto, corporis id."

newdiv.appendChild(aux2);

content.appendChild(newdiv);
// -------------------------------
newdiv=document.createElement('div');

newdiv.classList.add('menu');

let pratos=document.createElement('div');

aux=document.createElement('div');

aux.classList.add('prato');

aux.innerHTML="Prato 1";

pratos.appendChild(aux);

aux=document.createElement('div');

aux.classList.add('prato');

aux.innerHTML="Prato 2";

pratos.appendChild(aux);

aux=document.createElement('div');

aux.classList.add('prato');

aux.innerHTML="Prato 3";

pratos.appendChild(aux);

aux=document.createElement('div');

aux.classList.add('prato');

aux.innerHTML="Prato 4";

pratos.appendChild(aux);

ul=document.createElement('ul');

li=document.createElement('li');

li2=document.createElement('li');

link=document.createElement('a');

link.setAttribute("id","pagp");

link.innerHTML="Página principal";

link.addEventListener('click',()=>{
    a1 = document.getElementsByClassName('rightside')[0];
    a1.style.cssText="display:flex";
    a2 = document.getElementsByClassName('menu')[0];
    a2.style.cssText="display:none";
});

li.appendChild(link);

link=document.createElement('a');

link.setAttribute("id","contato");

link.innerHTML="Contato";

link.addEventListener('click',()=>{
    a1=document.getElementsByClassName('contatos')[0];
    a1.style.cssText="display:flex";
    a2=document.getElementsByClassName('menu')[0];
    a2.style.cssText="display:none";
});

li2.appendChild(link);

ul.appendChild(li);

ul.appendChild(li2);

aux=document.createElement('div');

aux.appendChild(ul);

aux2=document.createElement('h1');

aux2.innerHTML="Odin's Restaurant";

newdiv.appendChild(aux2);

newdiv.appendChild(aux);

newdiv.appendChild(pratos);
// ------------------------


newdiv=document.createElement('div');

newdiv.classList.add('contato');

pratos=document.createElement('div');

aux=document.createElement('div');

aux.classList.add('ctt');

aux.innerHTML="Face";

pratos.appendChild(aux);

aux=document.createElement('div');

aux.classList.add('ctt');

aux.innerHTML="Insta";

pratos.appendChild(aux);

aux=document.createElement('div');

aux.classList.add('ctt');

aux.innerHTML="Github";

pratos.appendChild(aux);

aux=document.createElement('div');

aux.classList.add('ctt');

aux.innerHTML="Phone";

pratos.appendChild(aux);

ul=document.createElement('ul');

li=document.createElement('li');

li2=document.createElement('li');

link=document.createElement('a');

link.setAttribute("id","pagp");

link.innerHTML="Página principal";

link.addEventListener('click',()=>{
    a1=document.getElementsByClassName('rightside')[0];
    a1.style.cssText="display:flex";
    a2=document.getElementsByClassName('contatos')[0];
    a2.style.cssText="display:none"
});

li.appendChild(link);

link=document.createElement('a');

link.setAttribute("id","menu");

link.innerHTML="Menu";

link.addEventListener('click',()=>{
   a1 =document.getElementsByClassName('menu')[0];
   a1.style.cssText="display:flex";
    a2=document.getElementsByClassName('contatos')[0];
    a2.style.cssText="display:none";
});

li2.appendChild(link);

ul.appendChild(li);

ul.appendChild(li2);

aux=document.createElement('div');

aux.appendChild(ul);

aux2=document.createElement('h1');

aux2.innerHTML="Odin's Restaurant";

newdiv.appendChild(aux2);

newdiv.appendChild(aux);

newdiv.appendChild(pratos);

