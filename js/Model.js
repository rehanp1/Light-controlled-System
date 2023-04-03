const onbtn = document.getElementById("onbtn");
const offbtn = document.getElementById("offbtn");
const mybulb = document.getElementById("mybulb");
let arduinoBlinking = document.querySelector('#arduino-light');

let onbtnGlow  = `8px 8px 8px #73e873, 
                -8px 8px 8px #73e873, 
                8px -8px 8px #73e873, 
                -8px -8px 8px #73e873`;

let offbtnGlow = `8px 8px 8px #f07777, 
                -8px 8px 8px #f07777, 
                8px -8px 8px #f07777, 
                -8px -8px 8px #f07777`;



let mybulbOn= `images/bulb-on.png`;
let mybulbOff = `images/bulb-off.png`;

onbtn.addEventListener("click", () => {
    onbtn.style.boxShadow = onbtnGlow;
    offbtn.style.boxShadow = "none";
    mybulb.src = mybulbOn;
    
});

offbtn.addEventListener("click", () => {
    offbtn.style.boxShadow = offbtnGlow;
    onbtn.style.boxShadow = "none";
    mybulb.src = mybulbOff;
    
})

const connect = document.querySelector('.model .smartphone #nav #connect');
const connectBox = document.querySelector('.model .smartphone #nav .connectivity')

connect.addEventListener("click", () => {
    connectBox.style.zIndex = '1';
})

connectBox.querySelectorAll('.connect-option').forEach((item) => {
    item.onclick = () =>{
        let name = item.innerHTML.substring(32,);
        connect.innerHTML = name;
        connectBox.style.zIndex = '-1';
    }
})










