 SpeechRecognition = window.webkitSpeechRecognition;
 recognition = new SpeechRecognition();

 function start(){
    question();
     document.getElementById("Qus").innerHTML = "The separation method in which components of a mixture can be separated by just picking them out by hands?";
     setTimeout(function () {
    document.getElementById("textbox").innerHTML = null;
     recognition.start();
     },5500);
 }
 recognition.onresult = function(event){
     console.log(event);
     content = event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML = content;
     console.log(content);
     if(content == "hand picking"){
         console.log("taking selfie");
         Corret();
         window.location = "index copy.html";
     }
     else{
        tryAgain();
     }
 }

 function Corret(){
     synth = window.speechSynthesis;
     speak_data = "Correct answer";
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
    speak_data = "the separation method in which components of a mixture can be separated by just picking them out by hands?";
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}