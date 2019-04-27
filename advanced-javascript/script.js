//==========================================================
//       Advanced JavaScript - Objects and Functions
//==========================================================

//----------------------------------------------------------
//                  Coding Challenge
//----------------------------------------------------------

/*
    Let's Build a fin quiz game in the console

    1. Build a function constructor called Question to describe a question.
       A question should include:
       a) question itself
       b) the answers from which the player can choose the correct one
          (choose an adequate data structure here, array, object, etc)
       c) correct answer (I would use a number for this)

    2. Create a couple of qustions using the constructor

    3. Store the all inside the array

    4. Select one random question and log it to the console, together with the possible answers
       (each question shoudl have a number) (Hint: write a method for the Question objects for this task).

    5. Use the 'propmt' function to ask the user for the correct answer.
       The user should input the number of the correct answer as you displayed it on Task 4.

    6. Check if the answer is correct and print to the console whether the answer is correct or not.
       (Hint: write another method for this)

    7. Suppose this code would be a plugin for other programmers to use in their code.
       So make sure that all your code is private and doesn't interfere with the other programmers code
       (Hint: we learned a special technique to do exactly that).
*/

// (function() {
//     function Question(question, answers, correctAnswer) {
//         this.question = question;
//         this.answers = answers;
//         this.correctAnswer = correctAnswer;
//     }
    
//     Question.prototype.displayQuestion = function(){
//         console.log(this.question);
//         for (let i = 0; i < this.answers.length; i++) {
//             console.log(`${i}: ${this.answers[i]}`);
//         }
//     }
    
//     Question.prototype.checkAnswer = function(answer) {
//         answer === this.correctAnswer
//         ? console.log('Correct Answer')
//         : console.log('Wrong Answer. Try Again :)')
//     }
    
//     var question1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', "No"], 0);
//     var question2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
//     var question3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
//     var questions = [question1, question2, question3];
    
//     var n = Math.floor(Math.random() * questions.length);
    
//     questions[n].displayQuestion();
    
//     var answer = parseInt(prompt('Please select the correct answer'));
    
//     questions[n].checkAnswer(answer);
// })();

/* 
    Expert Level

    8. After you display the result, display the next random question, so that the game never ends
       (Hint: write a function for this and call it right after displaying the result)

    9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user
       writes "exit" instead of the answer. In this case, DON'T call the function from task 8.

    10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score
        (Hint: I'm going to use the power of closures for this, but you don't have to, 
        just do this with the tools you feel more comfortable at this point).

    11. Display the score in the console. Use yet another method for this.
*/

(function() {
    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for (let i = 0; i < this.answers.length; i++) {
            console.log(`${i}: ${this.answers[i]}`);
        }
    }
    
    Question.prototype.checkAnswer = function(answer, callBack) {
        var sc;
        if (answer === this.correctAnswer) {
            console.log('Correct Answer');
            sc = callBack(true);
        } else {
            console.log('Wrong Answer. Try Again :)');
            sc = callBack(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log(`Your current score is ${score}`);
        console.log('-----------------------------')
    }

    var question1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', "No"], 0);
    var question2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
    var question3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    var questions = [question1, question2, question3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
    
        var answer = prompt('Please select the correct answer');    

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
})();