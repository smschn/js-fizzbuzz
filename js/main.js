const boxesNumber = parseInt(prompt('Quanti quadrati vuoi far magicamente apparire?'));

const containerDom = document.getElementById('container');

// for loop
for (i=1; i<=boxesNumber; i++) {

    if (i % 3 == 0 && i % 5 == 0) {

        const fizzBuzz = document.createElement('div');
        fizzBuzz.append(i);
        fizzBuzz.className = "box fizzBuzzClass";
        containerDom.append(fizzBuzz);

        fizzBuzz.innerHTML = 'fizzbuzz';

        console.log('FizzBuzz');

    } else if (i % 5 == 0) {

        const buzz = document.createElement('div');
        buzz.append(i);
        buzz.className = "box buzzClass";
        containerDom.append(buzz);

        buzz.innerHTML = 'buzz';

        console.log('Buzz');

    } else if (i % 3 == 0) {

        const fizz = document.createElement('div');
        fizz.append(i);
        fizz.className = "box fizzClass";
        containerDom.append(fizz);

        fizz.innerHTML = 'fizz';

        console.log('Fizz');

    } else {

        const newBox = document.createElement('div');
        newBox.append(i);
        newBox.className = "box";
        containerDom.append(newBox);

        console.log(i);
    }
}