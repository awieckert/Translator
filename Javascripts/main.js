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

germButton.addEventListener("click", function(){awesomeTranslator(germanObject)});



// germButton.addEventListener("click", (event) => {
//     awesomeTranslator(germanObject);
// });

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
    var currentTextArea = document.getElementById('wordsNstuff').value.trim();
    var translatedText = document.getElementById('newWords');
    console.log("currentTextarea: ", currentTextArea);
    var currentTextArray = currentTextArea.split(' ');
    console.log(currentTextArray);
    currentTextArray.forEach(function (item) {
        for(var prop in language){
            if(item === prop) {
                translatedText.value += language[prop] + " ";
            }
        }
    });
    // for(var prop in language){
    //    if(currentTextArea.indexOf(prop) != -1){
    //        translatedText.value += language[prop] + " ";
    //    }
}


// switch(e.target.id){
//     case "spanish"

// }
// if(e.target.id === "spanish"){

// }

// germButton.addEventListener("click", function(){console.log("YAY!")});