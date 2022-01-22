const colors = [
    '#6f0000','#4568DC','#FFAFBD',
    '#E44D26','#B2FEFA','#FF8235',
    '#E29587','#cbb4d4','#C33764',
    '#44A08D'];
const btn = document.querySelector('.btn')
const color = document.querySelector('.color')

btn.addEventListener('click',function(){
    let randomNumber =getRandom();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent= colors[randomNumber]

})

function getRandom(){
    return Math.floor(Math.random()*colors.length) 
}