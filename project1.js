let a;
let date;
let time;


const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);

  let hours = String(a.getHours()).padStart(2, "0");
  let minutes = String(a.getMinutes()).padStart(2, "0");
  let second = String(a.getSeconds()).padStart(2, "0");

  time = hours + ":" + minutes + ":" + second;

  document.getElementById("time").innerHTML = time + "<br>on " + date;
}, 1000);
