//prints first
console.log('Starting App');

// prints fourth
setTimeout(() => {
    console.log('Inside of callback');
}, 2000);


//prints third
setTimeout(() => {
    console.log('Inside setTimeout with 0ms');
}, 0);

// prints second
console.log('Finishing Up');