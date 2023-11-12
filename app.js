var flag = 1
function sound(){
const welcome = new Audio('./media/welcome.mp3')
welcome.play()

}
const exit = new Audio('./media/exit.mp3')


function voice(){
    
// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang='en-GB';

// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};

    recognition.onnomatch = (event) => {
        setTimeout(voice,3000)
    };

// recognition.onspeechend = function() {
    
//     recognition.stop();
    
// }          
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    document.getElementById('box').value = transcript;
    
    if(transcript.split(" ").includes("bye")){
        
        recognition.stop();
        setTimeout(exit.play(),4000)
    }
    else{
        setTimeout(voice,2000)
    }
    
    
};

recognition.start(); 
 



}


voice()


// 2
// function voice(){
//     console.log('here')
//     var recognition = new window.webkitSpeechRecognition;
//     recognition.lang='en-GB';
//     recognition.onresult = function(event){
//     console.log(event.results[0][0].transcript)
//     document.getElementById('box').value = event.results[0][0].transcript;
//     }
//     recognition.start()
    
//     }


