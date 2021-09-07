 SpeechRecognition = window.webkitSpeechRecognition;
 recognition = new SpeechRecognition();

 function start(){
    question();
     document.getElementById("Qus").innerHTML = "A _______ process is a method that converts a mixture or solution of chemical substances into two or more distinct product mixtures ?";
     setTimeout(function () {
    document.getElementById("textbox").innerHTML = null;
     recognition.start();
     },7000);
 }
 recognition.onresult = function(event){
     console.log(event);
     content = event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML = content;
     console.log(content);
     if(content == "separation"){
         console.log("taking selfie");
         Corret();
         window.location = "index ty.html";
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
    speak_data = "A process is a method that converts a mixture or solution of chemical substances into two or more distinct product mixtures ?";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}