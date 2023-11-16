const inputEL = document.getElementById("input")
const convertBtn = document.getElementById("btn")
const lengthEL= document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEL = document.getElementById("mass")


convertBtn.addEventListener('click',function(){
    length();
    volume();
    mass();

})

function length(){
    let x  = inputEL.value 
    let feet = Number(x*3.281).toFixed(3);
    let meter = Number(x/3.281).toFixed(3);
    lengthEL.innerHTML = `${x} meters = ${feet} feet | ${x} feet =${meter} meters`
    return lengthEL
}
function volume(){
    let x  = inputEL.value 
    let gallon = Number(x*0.264).toFixed(3);
    let liter = Number(x/0.264).toFixed(3);
    volumeEl.innerHTML = `${x} liters = ${gallon} gallons | ${x} gallons =${liter} liters`
    return volumeEl
    
}

function mass(){
    let x  = inputEL.value 
    let pound = Number(x*2.204 ).toFixed(3);
    let kilo = Number(x/2.204 ).toFixed(3);
    massEL.innerHTML = `${x} kilos = ${pound} pounds | ${x} pounds =${kilo} kilos`
    return massEL 
}

