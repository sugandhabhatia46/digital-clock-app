function showtime() {
  var d = new Date;
  var hour = d.getHours();

  document.getElementById("hourValue").innerHTML = hour.toString();
  console.log(hour);

  var min = d.getMinutes();
  document.getElementById("minuteValue").innerHTML = min.toString();
  console.log(min);

  var sec = d.getSeconds();
  document.getElementById("secondValue").innerHTML = sec.toString();
  console.log(sec);
}

function myFunction() {
  setInterval("showtime()", 1000);
}


