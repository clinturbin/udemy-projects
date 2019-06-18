const greenBoxElement = document.querySelector('.green');

const greenBoxObject = {
    color: 'green',
    postion: 1,
    clickMe: function() {
        greenBoxElement.addEventListener('click', () => {
            let str = `This is box number ${this.postion} and it is ${this.color}.`;
            alert(str);
        })
    }
};

greenBoxObject.clickMe();

function Person(name) {
    this.name = name;
};

let friends = ['Bob', 'Jane', 'Mark'];

Person.prototype.myFriends = function(friends) {
    let arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

new Person('Mike').myFriends(friends);