let languages = ['German', 
                 'French',
                 'Chinese',
                 'Dutch',
                 'Greek',
                 'Italian',
                 'Japanese',
                 'Portuguese',
                 'Russian',
                 'Spanish',
                 'Thai' 
                 ];
let audios = ['languageGuessingAudio/german.mp3', 
              'languageGuessingAudio/french.mp3',
              'languageGuessingAudio/chinese.mp3',
              'languageGuessingAudio/dutch.mp3',
              'languageGuessingAudio/greek.mp3',
              'languageGuessingAudio/italian.mp3',
              'languageGuessingAudio/japanese.mp3',
              'languageGuessingAudio/portuguese.mp3',
              'languageGuessingAudio/russian.mp3',
              'languageGuessingAudio/spanish.mp3',
              'languageGuessingAudio/thai.mp3'];

let numberOfLanguages = languages.length;
let currentLanguageIndex;
let dropdownLanguages;

window.onload = function() {

    dropdownLanguages = document.getElementById('subject');

    dropdownLanguages.options[0] = new Option('--Select the language--', '');
    for (i=0; i< numberOfLanguages; i++){
        dropdownLanguages.options[i+1] = new Option(languages[i], languages[i]);
    }

    let playButton = document.getElementById('playButton');
    if (playButton){
        
        playButton.addEventListener("click", playAudio);
    }

    let checkButton = document.getElementById('checkButton');
    checkButton.addEventListener("click", checkAnswer )

}

function playAudio(){
    currentLanguageIndex = Math.floor((Math.random() * numberOfLanguages));
    let sound = new Audio(audios[currentLanguageIndex]);
    sound.play();
}

function checkAnswer(){
    if (languages[currentLanguageIndex] == dropdownLanguages.value){
        alert('That is correct!');
    }
    else{
        alert('Maybe the next time!');
    }
}