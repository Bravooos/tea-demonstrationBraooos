// Helper function to calculate the square of a number
function square(number) {
  return number * number;
}

// Helper function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Main function to perform calculations and display results
function calculateAndDisplay(num) {
  console.log(`Square of ${num}: ${square(num)}`);
  
  if (isEven(num)) {
    console.log(`${num} is even.`);
  } else {
    console.log(`${num} is odd.`);
  }
}

// Example usage
const userInput = prompt('Enter a number:');
const num = parseInt(userInput);

if (!isNaN(num)) {
  calculateAndDisplay(num);
} else {
  console.log('Invalid input. Please enter a valid number.');
}
