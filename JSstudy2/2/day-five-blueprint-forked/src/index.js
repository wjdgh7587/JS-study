import "./styles.css";

const xmasContainer = document.querySelector(".xmas-container"),
  xmasTitle = xmasContainer.querySelector(".xmas-title"),
  dayTitle = xmasContainer.querySelector(".day-title"),
  ddayTitle = xmasContainer.querySelector(".dday-title");

const xmasFunction = {
  xmasClock: function xmasClock() {
    console.log("xams btn test!");
    getTime();
    setInterval(getTime, 1000);
  }
};

// You're gonna need this
function getTime() {
  // Don't delete this.

  //##X-mas Calculate(Xmas)
  /**
   * Xmas : Month, Day, Hour, Minute, Second
   */
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const xmasMonth = xmasDay.getMonth();
  const xmasday = xmasDay.getDay() + 7;
  const xmasHour = xmasDay.getHours();
  const xmasMinute = xmasDay.getMinutes();
  const xmasSecond = xmasDay.getSeconds();

  //##Day Calculate(Today)
  /**
   * Today : Month, Day, Hour, Minute, Second
   */
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay() + 7;
  const hours = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  //##D-Day calculate
  /**
   * D-Day : Month, Day, Hour, Minute, Second
   */
  var dday = xmasDay - date;
  var dDay = Math.ceil(dday / (1000 * 60 * 60 * 24));
  var dHour = Math.ceil((dday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var dMinute = Math.ceil((dday % (1000 * 60 * 60)) / (1000 * 60));
  var dSecond = Math.ceil((dday % (1000 * 60)) / 1000);

  dayTitle.innerText =
    month +
    "Month " +
    day +
    "D " +
    hours +
    "H " +
    minute +
    "M " +
    second +
    "S -Now";
  xmasTitle.innerText =
    xmasMonth +
    "Month " +
    xmasday +
    "D " +
    xmasHour +
    "H " +
    xmasMinute +
    "M " +
    xmasSecond +
    "S -Xmas";

  ddayTitle.innerText =
    dDay + "Day " + dHour + "H " + dMinute + "M " + dSecond + "S";
}

function init() {
  xmasFunction.xmasClock();
}
init();
