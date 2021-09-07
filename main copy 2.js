 SpeechRecognition = window.webkitSpeechRecognition;
 recognition = new SpeechRecognition();

 function start(){
    question();
     document.getElementById("Qus").innerHTML = "The process of converting a liquid into vapour by heating is called ____?";
     setTimeout(function () {
    document.getElementById("textbox").innerHTML = null;
     recognition.start();
     },4000);
 }
 recognition.onresult = function(event){
     console.log(event);
     content = event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML = content;
     console.log(content);
     if(content == "evaporation"){
         console.log("taking selfie");
         Corret();
         window.location = "index copy 3.html";
     }
     else{
        tryAgain();
     }
 }

 function Corret(){
     synth = window.speechSynthesis;
     speak_data = "Bingo";
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
    speak_data = "The process of converting a liquid into vapour by heating is called ?";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}