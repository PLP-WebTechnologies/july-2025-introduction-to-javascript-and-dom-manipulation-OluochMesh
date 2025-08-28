// Part 1: Basic JavaScript
// Function to check if a number is positive or negative
function checkNumber() {
    // Get the input value
    const number = document.getElementById('numberInput').value;
    let result;
    
    // Conditional logic
    if (number > 0) {
        result = "The number is positive.";
    } else if (number < 0) {
        result = "The number is negative.";
    } else {
        result = "The number is zero.";
    }
    
    // Display the result
    document.getElementById('result1').textContent = result;
    console.log('Checked number:', number, '-', result);
}

// Part 2: Functions
// Function to calculate sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// Function to calculate average of two numbers
function calculateAverage(a, b) {
    return (a + b) / 2;
}

// Function to handle the calculation process
function calculate() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Use our functions to calculate results
    const sum = calculateSum(num1, num2);
    const average = calculateAverage(num1, num2);
    
    // Display the results
    document.getElementById('result2').textContent = 
        `Sum: ${sum}, Average: ${average}`;
    console.log('Sum:', sum, 'Average:', average);
}

// Part 3: Loops

// Function to generate multiplication table using a for loop
function generateTable() {
    const number = parseInt(document.getElementById('tableNumber').value);
    let tableHTML = `<h3>Multiplication Table for ${number}</h3>`;
    
    // For loop to generate the table
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<p>${number} × ${i} = ${number * i}</p>`;
        console.log(`${number} × ${i} = ${number * i}`);
    }
    
    // Display the table
    document.getElementById('result3').innerHTML = tableHTML;
}

// Function to demonstrate a while loop with countdown
function startCountdown() {
    let count = 10;
    let countdownHTML = "";
    
    // While loop for countdown
    while (count >= 0) {
        countdownHTML += `${count}... `;
        console.log('Countdown:', count);
        count--;
    }
    countdownHTML += "Blast off! 🚀";
    
    // Display the countdown
    document.getElementById('result4').textContent = countdownHTML;
    console.log('Blast off! 🚀');
}

// Part 4: DOM Manipulation
// Function to change text content
function changeText() {
    const textElement = document.getElementById('textToChange');
    textElement.textContent = "The text has been changed successfully!";
    console.log('Text changed.');
}

// Function to add items to a list
function addItem() {
    const newItemText = document.getElementById('newItem').value;
    
    if (newItemText.trim() !== "") {
        // Create a new list item
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        
        // Add it to the list
        document.getElementById('itemList').appendChild(newItem);
        
        // Clear the input field
        document.getElementById('newItem').value = "";
        console.log('Added item:', newItemText);
    }
}

// Function to toggle background color
function toggleBackground() {
    const sections = document.querySelectorAll('section');
    let isChanged = false;
    
    // Using forEach loop to iterate through all sections
    sections.forEach(section => {
        if (section.style.backgroundColor === 'lightblue') {
            section.style.backgroundColor = '';
        } else {
            section.style.backgroundColor = 'lightblue';
            isChanged = true;
        }
    });
    
    console.log('Background toggled:', isChanged ? 'lightblue' : 'default');
    return isChanged;
}