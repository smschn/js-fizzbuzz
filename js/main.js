// define variables
const boxesNumber = parseInt(prompt('How many squares do you want?'));
const containerDom = document.getElementById('container');

// for loop - the number of total boxes is equal to the user input
for (i=1; i<=boxesNumber; i++) {

    // if number is a multiple of 3 and 5
    if (i % 3 == 0 && i % 5 == 0) {

        // creation of a <div> element, add css classes to it, write word inside it 
        const fizzBuzz = document.createElement('div');
        fizzBuzz.append(i);
        fizzBuzz.className = "box fizzBuzzClass";
        containerDom.append(fizzBuzz);

        fizzBuzz.innerHTML = 'fizzbuzz';

        console.log('FizzBuzz');

    // if number is a multiple of 5
    } else if (i % 5 == 0) {

        // creation of a <div> element, add css classes to it, write word inside it 
        const buzz = document.createElement('div');
        buzz.append(i);
        buzz.className = "box buzzClass";
        containerDom.append(buzz);

        buzz.innerHTML = 'buzz';

        console.log('Buzz');

    // if number is a multiple of 3
    } else if (i % 3 == 0) {

        // creation of a <div> element, add css classes to it, write word inside it 
        const fizz = document.createElement('div');
        fizz.append(i);
        fizz.className = "box fizzClass";
        containerDom.append(fizz);

        fizz.innerHTML = 'fizz';

        console.log('Fizz');

    // for all other cases
    } else {

        // creation of a <div> element, add css classes to it, write word inside it 
        const newBox = document.createElement('div');
        newBox.append(i);
        newBox.className = "box";
        containerDom.append(newBox);

        newBox.innerHTML = i;

        console.log(i);

    }
}