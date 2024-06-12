const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  text_speak.rate = 1.5;
  text_speak.volume = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}
function wishMe() {
  var day = new Date();
  var hour = day.getHours();

  if (hour >= 0 && hour < 12) {
      speak("Hello");
  } else if (hour >= 12 && hour < 17) {
      speak("Good day, How are you doing?...");
  } else {
      speak("Good day...");
  }
}

window.addEventListener('load', () => {
  speak("Initializing GIDEON...");
  wishMe();
});
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    console.log("Transcript:", transcript);

    takeCommand(transcript.toLowerCase());
};
btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
   
    console.log("Received message:", message);
        if (message.includes('hey') || message.includes('hello')|| message.includes('hi')) {
            speak("Hello There, How May I Help You?");
        } else if (message.includes("open google")) {
            window.open("https://google.com", "_blank");
            speak("Opening Google...");
        } else if (message.includes("i am fine")) {
             speak("Great to hear, How may i help you?");
        } else if (message.includes("do you love me?")) {
             speak("I don't understand, why you will ask that..");
        } else if (message.includes("you are amazing")) {
             speak("Thank you, If you need any help. Please let me know");
        } else if (message.includes("who created you")) {
            speak("I am a bot, Made by Hephzibah. She is pretty cool, Here is her instagram");
            window.open("https://www.instagram.com/zee.morayo01?igsh=ZmJkbmlhYW04bmQ5&utm_source=qr", "_blank"); 
        } else if (message.includes("tell me about DevOps")) {
            speak("The key thing to know about DevOps is that it’s a cultural and professional movement that stresses communication, collaboration, integration, and automation to improve the flow of work between software developers and IT operations professionals.");
            window.open("https://www.google.com/search?q=tell+me%20about%20devops", "_blank"); 
        } else if (message.includes("open facebook")) {
            window.open("https://facebook.com", "_blank");
            speak("Opening Facebook...");
        } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "This is what I found on the internet regarding " + message;
            speak(finalText);
        } else if (message.includes('wikipedia')) {
            window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
            const finalText = "This is what I found on Wikipedia regarding " + message;
            speak(finalText);
        } else if (message.includes('time')) {
            const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
            const finalText = "The current time is " + time;
            speak(finalText);
        } else if (message.includes('date')) {
            const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
            const finalText = "Today's date is " + date;
            speak(finalText);
        } else if (message.includes('calculator')) {
            window.open('Calculator:///');
            const finalText = "Opening Calculator";
            speak(finalText);
        }else {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            const finalText = "I found some information for " + message + " on Google";
            speak(finalText);
        }
    }

    takeCommand(transcript.toLowerCase());



