const y = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[y.getDay()];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[y.getMonth()];

document.getElementById("year").innerHTML = y.getFullYear();
document.getElementById("today").innerHTML = day;
document.getElementById("date").innerHTML = y.getDate();
document.getElementById("month").innerHTML = month;
document.getElementById("time").innerHTML = y.getHours() + ":" + y.getMinutes() + ":" + y.getSeconds();;
