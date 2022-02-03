today = new Date();
var gra = new Date(today.getFullYear(), 9, 25);
if (today.getMonth() == 9 && today.getDate() > 28) {
  gra.setFullYear(gra.getFullYear()+1);
}
var one_day = 1000 * 60 * 60 * 24;
var free = (Math.ceil((gra.getTime()-today.getTime()) / (one_day)) + " days left until the freedom!");
document.getElementById("Freedom").innerHTML = free; 
