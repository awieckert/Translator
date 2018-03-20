// console.log("YAY!");

// var testOfText = document.getElementById('wordsNstuff').innerHTML;

// console.log("testOfText: ", testOfText);

// Merry, Christmas, Happy, New, Year, Have, A, And, Xmas, Holiday, We, Wish, You

// var translator = [
//     {
//         id: "German",
//         we: "wir",
//         wish: "wunsch",
//         you: "sie",
//         a: "ein",
//         merry: "frolich",
//         christmas: "weihnachten",
//         happy: "gulcklich",
//         new: "neu",
//         year: "jahr",
//     },
//     {
//         id: "Spanish",
//         we: ,
//         wish: ,
//         you: ,
//         a: ,
//         merry: ,
//         christmas: ,
//         happy: ,
//         new: ,
//         year: ,
//         have: ,
//     },
//     {
//         id: "Italian",
//         we: ,
//         wish: ,
//         you: ,
//         a: ,
//         merry: ,
//         christmas: ,
//         happy: ,
//         new: ,
//         year: ,
//         have: ,
//     },
// ];

// var germButton = document.getElementById("gb");
// germButton.addEventListener("click", awesomeTranslator(germanObject));

var germanObject = {
    id: "German",
    we: "wir",
    wish: "wunsch",
    you: "sie",
    a: "ein",
    merry: "frolich",
    christmas: "weihnachten",
    happy: "gulcklich",
    new: "neu",
    year: "jahr",
};

function awesomeTranslator (language) {
    var currentTextArea = document.getElementById('wordsNstuff').innerHTML;
    for(var prop in language){
       if(currentTextArea.indexOf(prop) != -1){
           var translatedText = document.getElementById('newWords');
           translatedText.innerHTML += language[prop] + " ";
       }
   }

}
var germButton = document.getElementById("gb");
germButton.addEventListener("click", function(){console.log("YAY!")});
// germButton.addEventListener("click", function(){awesomeTranslator(germanObject)});