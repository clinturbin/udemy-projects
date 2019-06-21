// const greenBoxElement = document.querySelector('.green');

// const greenBoxObject = {
//     color: 'green',
//     postion: 1,
//     clickMe: function() {
//         greenBoxElement.addEventListener('click', () => {
//             let str = `This is box number ${this.postion} and it is ${this.color}.`;
//             alert(str);
//         })
//     }
// };

// greenBoxObject.clickMe();

// function Person(name) {
//     this.name = name;
// };

// let friends = ['Bob', 'Jane', 'Mark'];

// Person.prototype.myFriends = function(friends) {
//     let arr = friends.map(el => `${this.name} is friends with ${el}`);
//     console.log(arr);
// }

// new Person('Mike').myFriends(friends);


///////////////////////////////////////////////
//     ES6 Arrays

const boxes = document.querySelectorAll('.box');

// convert the boxes node list to an array
const boxesArray = Array.from(boxes);

boxesArray.forEach(el => el.style.backgroundColor = 'dodgerBlue');
// Array.from(boxes).forEach(el => el.style.backgroundColor = 'dodgerBlue');

for (const cur of boxesArray) {
    if (cur.className.includes('blue') ) {
        continue // can't use break or continue in regulat forEach loop
    }
    cur.textContent = 'I changed to blue!';
};


/////////////////////////////////////////////
//       Spread Operator

// make function to add 4 numbers
const addFourAges = (a,b,c,d) => a + b + c + d;
let ages = [18, 30, 12, 21];
let sumAges = addFourAges(...ages);

// Join two arrays
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];

// Change text color of header and boxes
const header = document.querySelector('h1');
const allElements = [header, ...boxes];
Array.from(allElements).forEach(cur => cur.style.color = 'purple');


/////////////////////////////////////////////
//       Rest parameters

// Create a function that receives an arbitrary number of years 
// and then prints to the console whether each person corresponding to these years is a full age or not.

const isFullAge = (limit, ...years) => {
    // years is now an array
    years.forEach(year => console.log((2019 - year) >= limit));
};

isFullAge(18, 1990, 1999, 1965);


/////////////////////////////////////////////
//       Default parameters

const SmithPerson = (firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') => {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};

let john = new SmithPerson('John', 1990);
let emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');


/////////////////////////////////////////////
//       Maps

// Implement a quiz with 1 question to show how maps work

const question = new Map();
question.set('question', 'What is the official name of the latest JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Please try again');

// retrieve data
console.log(question.get('question'));  // prints the question to the console
console.log(question.size);  // prints 8 to the console since there are 8 key value pairs


// check and delete if question has a key of 4
if (question.has(4)) {
    question.delete(4);
}

question.clear(); // removes everything from the question map

// loop through a map
question.forEach((value, key) => console.log(`This is key ${key} and its set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const answer = parseInt(prompt('Write the correct answer'));

console.log(question.get(answer === question.get('correct')));


/////////////////////////////////////////////
//       Classes

class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    // static will not be inherited by instances
    static greeting(){
        console.log('Hey there');
    }
};

const john = new Person('John', 1990, 'teacher');

Person.greeting(); // john will not have access to greeting method, will only be available on Person (not really useful)


/////////////////////////////////////////////
//       Classes with SubClasses

class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
};

class Athlete extends Person {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
};

const johnAthlete = new Athlete('John', 1990, 'swimmer', 3, 10);

johnAthlete.wonMedal();  // prints 11 to the console
johnAthlete.calculateAge();  // prints johns age to the console