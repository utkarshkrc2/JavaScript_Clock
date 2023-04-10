const hour = document.querySelector(".Hour");
const minute = document.querySelector(".Minute");
const second = document.querySelector(".Second");

function setDate() {
  const now = new Date();        // Date is a Real-Time Fucntion in Javascript:   now is the reference name of Date()

  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;

  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);

