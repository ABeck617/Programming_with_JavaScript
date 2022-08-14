// function addTwoNums(a, b) {
//     try {
//         if(typeof(a) != 'number') {
//             throw new ReferenceError('the first argument is not a number')
//         } else if (typeof(b) != 'number') {
//             throw new ReferenceError('the second agrument is not a number')
//         } else {
//             console.log(a + b);
//         }
//     } catch(err) {
//         console.log("Error!", err)
//     }
// }
// addTwoNums(5, "5")
// console.log("It still works");


// Task 1: Build a function-based console log message generator
function consoleStyler() {
    console.log("This is an error")
    
}

// Task 2: Build another console log message generator
function celebrateStyler() {
    console.log("This is my first message")
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler();
celebrateStyler();


// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {
    console.log("Congrats on winning")
}
// Call styleAndCelebrate

styleAndCelebrate();