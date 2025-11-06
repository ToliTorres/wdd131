// Get the current year using the Date object
const currentYear = new Date().getFullYear();

// Output the year into the span with id="currentyear"
document.getElementById("currentyear").textContent = currentYear;

// Output the last modified date from the document object
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;
