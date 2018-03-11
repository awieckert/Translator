console.log("YAY!");

var testOfText = document.getElementById('wordsNstuff').innerHTML;

console.log("testOfText: ", testOfText);

var translator = [
    {
        id: "German",
    },
    {
        id: "Spanish",
    },
    {
        id: "Italian",
    },
];

function awesomeTranslator (language) {
   translator.forEach(prop in translator){
       if(prop === document.getElementById('wordsNstuff').innerHTML){
           var translatedText = doucment.getElementById('newWords');
           translatedText.innerHTML = prop.value;
       }
   }

}