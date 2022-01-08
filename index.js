

function lightSwitch()
{
    
    var bulb = document.getElementById('bulb');

    if(bulb.innerHTML.endsWith('on.jpeg">')) bulb.innerHTML = '<img src="./assets/off.jpeg">';
    else bulb.innerHTML = '<img src="./assets/on.jpeg">';
}