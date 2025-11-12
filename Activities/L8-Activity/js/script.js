// Get the current time and hour
// HINT: you will have to first get the full date and then get the time and hour of the day
// You may explore the use of JS built-in functions
var now = new Date();
var hour = now.getHours();


// Create a variable to store your greeting message
var greeting = "";


// Based on the hour you get, you need to set the conditions you want your script to check
// in order to render a specific message
// for now we want to say 'Good Morning' if it is earlier than 12PM
if (hour < 12) {
    greeting = "Good Morning!";
}


// otherwise we want to check if it is earlier than 3PM and let the visitor know
// 'Hey! I think we are in class!'
else if (hour < 15) {
    greeting = "Hey! I think we are in class!";
}


// For any other time (i.e., later than 3PM, we just want to say 'Welcome'
else {
    greeting = "Welcome!";
}


// This is an example of an if statement, or a conditional statement
// the JS interpreter checks if a conditions is true, if it is then it executes the code
// If the condition is FALSE, then it skips the code and moves onto the next one (i.e., our else if conditional)
// If that second condition is also FALSE then it moves to our last conditional, our else statement
// IF statements always end in an ELSE statement, if you want to give options in-between we always use ELSE IF


// Then, we use the DOM, and calling the 'getElementById( )' method and its innerHTML property to add some HTML for us onto our webpage
// we basically want to show the return result in <h2 id="greeting"></h2>
document.getElementById("greeting").innerHTML = greeting;




// In this section of our script, we want to access the values the user entered into our form
// and add them together
// First we declare our variables for the two values
// Now, let's use the DOM now to access a value in our form and show it back to us in an alert( ) box
// First, we'll creatr a function to store the input values into the variables we declared
// We'll enclose that code block in a function, getNumbers( )

    // Store the values from the form into the variables we declared above




        // Call the getNumbers() function to import the values the user enteres into the form into
        // this function

        // We perform our addition on the two values


        // Display the result of the calculation

// ADDITION FUNCTION
function addition() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var result = Number(num1) + Number(num2);
    document.getElementById("result").innerHTML = "Result: " + result;
}

// SUBTRACTION FUNCTION
function subtraction() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var result = Number(num1) - Number(num2);
    document.getElementById("result").innerHTML = "Result: " + result;
}

// MULTIPLICATION FUNCTION
function multiplication() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var result = Number(num1) * Number(num2);
    document.getElementById("result").innerHTML = "Result: " + result;
}

// DIVISION FUNCTION
function division() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    if (Number(num2) == 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero!";
    } else {
        var result = Number(num1) / Number(num2);
        document.getElementById("result").innerHTML = "Result: " + result;
    }
}
