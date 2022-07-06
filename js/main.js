let i;

const containerDom = document.getElementById('container');

// for loop
for (i=1; i<=100; i++) {

    // generate boxes for each iteration
    const newBox = document.createElement('div');
    newBox.append(i);
    newBox.className = "box";
    containerDom.append(newBox);

    if (i % 3 == 0 && i % 5 == 0) {

        const fizzBuzz = document.createElement('div');
        fizzBuzz.append(i);
        fizzBuzz.className = "box fizzBuzzClass";
        containerDom.append(fizzBuzz);

        console.log('FizzBuzz');

    } else if (i % 5 == 0) {

        const buzz = document.createElement('div');
        buzz.append(i);
        buzz.className = "box buzzClass";
        containerDom.append(buzz);

        console.log('Buzz');

    } else if (i % 3 == 0) {

        const fizz = document.createElement('div');
        fizz.append(i);
        fizz.className = "box fizzClass";
        containerDom.append(fizz);

        console.log('Fizz');

    } else {

        console.log(i);
    }
}
