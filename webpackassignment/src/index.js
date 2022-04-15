
import "./index.css"

import Icon from '../pic.png';

const myIcon = new Image();
myIcon.src = Icon;

myIcon.classList.add('text');

const input = document.createElement('input')

input.setAttribute('id','mytext')

const button = document.createElement('button')
button.innerHTML="submit"

button.addEventListener('click',()=>{
    const notes= document.querySelector('#mytext').value;
    document.querySelector('p').innerHTML=notes
})

const container = document.querySelector(".container")
container.append(myIcon,input,button)