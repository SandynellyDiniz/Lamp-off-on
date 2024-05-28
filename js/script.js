// Pick up the buttons and the lamp: 
const clickOn = document.getElementById('btn-on');
const clickOff = document.getElementById('btn-off');
const Lamp = document.getElementById('lamp');

function isLampBroken(){
    return Lamp.src.indexOf('Broken') > -1 
}

// Function on, if the lamp is not broken the image On will appear:
function lampOn(){
    if(!isLampBroken()){ 
     Lamp.src = 'assets/On.jpg'
    }
}

// Function off, if the lamp is not broken the image Off will appear:
function lampOff(){
    if(!isLampBroken()){
     Lamp.src = 'assets/off.jpg'
    }
}

// Broken function, if the button is clicked it will break, img broken:
function lampBroken(){
    Lamp.src = 'assets/broken.jpg'
}

// Click events:  
clickOn.addEventListener('click',lampOn);
clickOff.addEventListener('click',lampOff);
Lamp.addEventListener('click',lampBroken) 

