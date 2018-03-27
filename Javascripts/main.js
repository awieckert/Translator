
const gb = {
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

const sb = {
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

const ib = {
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

var dictionaries = {
    ib, 
    sb, 
    gb
}

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

const convertEvent = (e) => {
    var language = window.dictionaries[e.target.id];
    awesomeTranslator(language);
}


var germButton = document.getElementById("gb");
let spanButton = document.getElementById('sb');
let italButton = document.getElementById('ib');

germButton.addEventListener("click", convertEvent);
spanButton.addEventListener("click", convertEvent);
italButton.addEventListener("click", convertEvent);


// germButton.addEventListener("click", (event) => {
//     awesomeTranslator(germanObject);
// });








