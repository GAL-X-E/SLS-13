 SpeechRecognition = window.webkitSpeechRecognition;
 recognition = new SpeechRecognition();

 function start(){
    question();
     document.getElementById("Qus").innerHTML = "The process of separation an insoluble solid from a liquid by passing it through a muslin cloth is Kown as _____?";
     setTimeout(function () {
    document.getElementById("textbox").innerHTML = null;
     recognition.start();
     },6000);
 }
 recognition.onresult = function(event){
     console.log(event);
     content = event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML = content;
     console.log(content);
     if(content == "filtration"){
         console.log("taking selfie");
         Corret();
         window.location = "index copy 2.html";
     }
     else{
        tryAgain();
     }
 }

 function Corret(){
     synth = window.speechSynthesis;
     speak_data = "Bingo, Correct";
     utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
 }

 function tryAgain(){
    synth = window.speechSynthesis;
    speak_data = "tryAgain";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function question(){
    synth = window.speechSynthesis;
    speak_data = "The process of separation an insoluble solid from a liquid by passing it through a muslin cloth is Kown as ?";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}