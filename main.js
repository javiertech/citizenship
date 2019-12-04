
import {questions} from "/questions.js";

let questNumber;
console.log(Object.values(questions[0].answers));

init();



function init(){
    questNumber = 0;
    document.getElementById('title').textContent = questions[questNumber].title;
    
}

function populateAnswers(){
    let answers = "";
    let values = Object.values(questions[questNumber].answers);
    //console.log(Object.values(questions[questNumber].answers[1]).join(""));
    for(let i = 0; i < values.length; i++){
        answers += `<li> ${Object.values(questions[questNumber].answers[i]).join("")} </li>`;
    }
    document.getElementById('list').innerHTML = answers;
    
}

document.getElementById('control').addEventListener('click', clcickAction);

function clcickAction() {

    let actionBtn = document.getElementById('action-btn');
    
    if(actionBtn.textContent === 'Reveal'){
        populateAnswers();
        actionBtn.textContent = 'Next';
    } else if(actionBtn.textContent === 'Next') {

        document.getElementById('list').innerHTML = '';
        actionBtn.textContent = 'Reveal';
        questNumber++;
        if(questNumber >= 99){
            questNumber = 0;
        }
        document.getElementById('title').textContent = questions[questNumber].title;
    }
    
}