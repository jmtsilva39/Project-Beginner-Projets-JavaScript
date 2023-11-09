const flashcards = document.getElementsByClassName("flashcards")[0];
const createBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

contentArray.forEach(divMaker)
function divMaker(text){
    var div = document.createElement("div");
    var h2_question  = document.createElement("h2");
    var h2_aswer = document.createElement("h2");

    div.className = 'flashcard';
}

function addFlashCard(){
    var flashcard_info = {
        'my_question' : question.ariaValueMax,
        'my_answer' : answer.value
    }
    contentArray.push(flashcard_info);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(contentArray[contentArray.length] -1);
    question.value = '';
    answer.value = '';
}


function delFlashcards(){
    localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function showCreateCardBox(){
    createBox.style.display = "block";
}

function hideCreateBox(){
    createBox.style.display = "none";
}