const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');
console.log({h1,p,parrafito,pid,input});
console.log(input.value);
h1.innerHTML = 'Patito';
h1.innerText = 'patito <br> Feo';
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo');
h1.classList.add('rojo');
h1.classList.remove('verde');
input.value = "456";
const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/11390195/pexels-photo-11390195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
pid.innerHTML = "";
pid.appendChild(img);

