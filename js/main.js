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
        console.log('FizzBuzz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}
