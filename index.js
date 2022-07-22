// taking the element from DOM using id
const timer = document.getElementById("my-watch");

// declaring the variable
// using "let" variable because we can redefine the value of "let" variable later.
let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;

let stoptime = true;

// function to start the timer
function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}

// function to stop the timer
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

// function to run the stopwatch
function timerCycle() {
  if (stoptime == false) {
    // parsing the values
    msec = parseInt(msec);
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    //start by adding values to the milisec
    msec = msec + 1;

    // because 100 milisec = 1 sec
    if (msec == 100) {
      sec = sec + 1;
      msec = 0;
    }

    // because 60 sec = 1 min
    if (sec == 60) {
      min = min + 1;
      sec = 0;
      msec = 0;
    }

    // because 60 min = 1 hr
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
      msec = 0;
    }

    // if milisec is less than 10 then we use 01,02,03 etc kind of format
    if (msec < 10 || msec == 0) {
      msec = "0" + msec;
    }

    // if sec is less than 10 then we use 01,02,03 etc kind of format
    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }

    // if min is less than 10 then we use 01,02,03 etc kind of format
    if (min < 10 || min == 0) {
      min = "0" + min;
    }

    // if hour is less than 10 then we use 01,02,03 etc kind of format
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    // using interpolation we can embed variable in the string or static html data.
    const html = `<div id="box">
    <div id="timer-top"></div>
    <div class="time">${hr}:${min}:${sec}:<span id="mili">${msec}</span></div>
    </div>`;

    // here we put back the running timer values in the DOM id
    timer.innerHTML = html;

    // here we call the setTimeout function which calls a function after a number of milliseconds.
    setTimeout("timerCycle()", 10);
  }
}

// this function basically reset the timer
function resetTimer() {
  // using interpolation we can embed variable in the string or static html data.
  const html = `<div id="box">
  <div id="timer-top"></div>
  <div class="time">00:00:00:<span id="mili">00</span></div>
  </div>`;

  // here we put back the running timer values in the DOM id
  timer.innerHTML = html;

  // reseting the values of variables to 0.
  stoptime = true;
  hr = 0;
  min = 0;
  sec = 0;
  msec = 0;
}
