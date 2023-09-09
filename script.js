// ************* DISPLAY CURRENT DAY *************

// Get a reference to the currentDay span element
const currentDayElement = document.getElementById("currentDay");

// Create an array of day names
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the current date and time
const currentDate = new Date();

// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const currentDayIndex = currentDate.getDay();

// Get the name of the current day
const currentDayName = daysOfWeek[currentDayIndex];

// Display the current day in the HTML page
currentDayElement.textContent = currentDayName;

// ************* DISPLAY CURRENT UTC TIME *************

// Get a reference to the currentTime span element
const currentTimeElement = document.getElementById("currentTime");

// Get the current UTC time in milliseconds
function updateTime() {
  const currentUTCTimeMillis = new Date().getTime();
  // Display the current UTC time in milliseconds in the HTML page
  currentTimeElement.textContent = currentUTCTimeMillis;
}
// Call the updateTime function initially to display the time immediately
updateTime(currentTimeElement);

// Update the displayed time every second (1000 milliseconds)
setInterval(updateTime, 1000);
