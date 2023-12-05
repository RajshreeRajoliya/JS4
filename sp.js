// Get the reference to the div element
const myDiv = document.getElementById('myDiv');

// Array of CSS classes
const cssClasses = ['red-text', 'bold-text', 'highlight-background'];

// Apply CSS classes to the div using the spread operator
myDiv.classList.add(...cssClasses);
