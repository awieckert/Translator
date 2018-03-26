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

var germButton = document.getElementById("gb");
let spanButton = document.getElementById('sb');
let italButton = document.getElementById('ib');

germButton.addEventListener("click", function(){awesomeTranslator(germanObject)});
spanButton.addEventListener("click", function(){awesomeTranslator(spanishObject)});
italButton.addEventListener("click", function(){awesomeTranslator(italianObject)});


// germButton.addEventListener("click", (event) => {
//     awesomeTranslator(germanObject);
// });

const germanObject = {
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

const spanishObject = {
    id: "Spanish",
    we: "nosotros",
    wish: "deseo",
    you: "tu",
    a: "un",
    merry: "alegre",
    christmas: "navidad",
    happy: "feliz",
    new: "ano",
    year: "nuevo",
};

const italianObject = {
    id: "Italian",
    we: "noi",
    wish: "desiderio",
    you: "tu",
    a: "un",
    merry: "allegro",
    christmas: "natale",
    happy: "felice",
    new: "anno",
    year: "nuovo",
};

function awesomeTranslator (language) {
    var translatedText = document.getElementById('newWords');
    translatedText.value = "";
    var currentTextArea = document.getElementById('wordsNstuff').value.trim();
    var currentTextArray = currentTextArea.split(' ');
    currentTextArray.forEach(function (item) {
        for(var prop in language){
            if(item.toLowerCase() === prop) {
                translatedText.value += language[prop] + " ";
            }
        }
    });
}
