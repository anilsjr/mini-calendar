const month = document.getElementById('month');
const year = document.getElementById('year');
const day = document.getElementById('day');
const date = document.getElementById('date');

const monthName =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayName =["Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Satuarday", "Sunday"];


const d = new Date();



month.innerHTML = monthName[d.getMonth()];
year.innerHTML = d.getFullYear();
date.innerHTML = d.getDate();
day.innerHTML = dayName[d.getDay()];



