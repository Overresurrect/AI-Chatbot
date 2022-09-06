const Speech = window.SpeechRecognition || window.webkitSpeechRecognition; 
const recognition = new Speech();

document.querySelector('button').addEventListener('click', () => {recognition.start();});
recognition.addEventListener('result', (e) => {
    let last =e.results.length -1;
    let text = e.result[last][0].transcript;

    console.log('Confidence: '+ e.result[0][0].confidence);
});

const socket = io();
socket.emit('chat message', text);