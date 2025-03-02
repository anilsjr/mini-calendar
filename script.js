

const d = new Date();
const month = document.getElementById('month');
const year = document.getElementById('year');
const day = document.getElementById('day');
const date = document.getElementById('date');

const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

window.onload = function() {
  month.innerHTML = monthName[d.getMonth()];
  year.innerHTML = d.getFullYear();
  date.innerHTML = d.getDate();
  day.innerHTML = dayName[d.getDay()];
};
