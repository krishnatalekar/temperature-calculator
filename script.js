const calculate = document.getElementsByClassName('calculate')[0];
const result = document.getElementsByClassName('result')[0];

// formula: °F = °C * 9/5 + 32

calculate.addEventListener('click', function(e){
    e.preventDefault();
    const celsius = document.getElementById('celsius').value;
    result.innerText = (celsius * 9/5 + 32) + "°F";
})

const calculate1 = document.getElementsByClassName('calculate1')[0];
const result1 = document.getElementsByClassName('result1')[0];

// formula: °C = (°F - 32) ÷ 9/5

calculate1.addEventListener('click', function(e){
    e.preventDefault();
    const fahrenheit = document.getElementById('fahrenheit').value;
    result1.innerText = ((fahrenheit - 32) / 1.8) + "°C";
})

const clear = document.getElementsByClassName('clear')[0];

clear.addEventListener('click', function(){
    form.reset();
})


