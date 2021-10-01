const quiz = [{
        "question": "What is my name ?",
        "a": "Tahir",
        "b": "Emil",
        "c": "Elcin",
        "d": "Elnur",
        "correct": "b"
    },
    {
        "question": "How old am i ?",
        "a": "13",
        "b": "14",
        "c": "15",
        "d": "16",
        "correct": "c"
    },
    {
        "question": "Where am i from ?",
        "a": "Azerbaijan",
        "b": "Turkey",
        "c": "United States",
        "d": "Great Britain",
        "correct": "a"
    }
];

let resultCounter = 0;

const answer = document.querySelectorAll(".answer");
const submitButton = document.getElementById("submit");
const question = document.getElementById("question");
const a = document.getElementById("a-text");
const b = document.getElementById("b-text");
const c = document.getElementById("c-text");
const d = document.getElementById("d-text");


let current = 0;


function loadQuiz() {
    if (current < quiz.length) {

        question.innerText = quiz[current].question;
        a.innerText = quiz[current].a;
        b.innerText = quiz[current].b;
        c.innerText = quiz[current].c;
        d.innerText = quiz[current].d;
    }

}
loadQuiz();
submitButton.addEventListener('click', function() {
    for (var i = 0; i < answer.length; i++) {
        if (answer[i].checked == true) {
            var selectedAnswer = answer[i];
        }
    }
    if (selectedAnswer.id == quiz[current].correct) {
        current++;
        resultCounter++;
        selectedAnswer.checked = false;
        if (current == quiz.length) {
            document.getElementById("section").innerHTML = "Your Score: " + resultCounter + "<br>" + "<br>" + "<button onclick = 'location.reload()' style='background: crimson; border: none; color: white;; padding: 0.5rem; border-radius: 0.5rem; font-family: inherit'>Reload</button>";
            document.getElementById("section").style.textAlign = "center";

        }
        loadQuiz();

    } else {
        current++;
        selectedAnswer.checked = false;
        if (current == quiz.length) {
            document.getElementById("section").innerHTML = "Your Score: " + resultCounter + "<br>" + "<br>" + "<button onclick = 'location.reload()' style='background: crimson; border: none; color: white;; padding: 0.5rem; border-radius: 0.5rem; font-family: inherit'>Reload</button>";
            document.getElementById("section").style.textAlign = "center";

        }
        loadQuiz();

    }

})