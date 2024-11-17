let Y1 = document.getElementById("Year");
let M1 = document.getElementById("Month");
let D1 = document.getElementById("Day");

// ###############

let resultYear = document.querySelector(".Year span");
let resultMonth = document.querySelector(".Month span");
let resultDay = document.querySelector(".Day span");
let formAge = document.querySelector("form");
let result = document.querySelector(".result");
let nextBirthDayMsg = document.querySelector(".next-birthday");
let tryBtn = document.querySelector(".try-another-btn");
let errorMsg = document.querySelector(".error__msg");

// ###############

let date = new Date();
let Y2 = date.getFullYear();
let M2 = 1 + date.getMonth();
let D2 = date.getDate();
let Months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// ####### code ########

function counter(el, goal) {
  let count = setInterval(() => {
    if (el.textContent == goal) {
      clearInterval(count);
    } else {
      el.textContent++;
    }
  }, 2000 / goal);
}

Y1.addEventListener("input", () => {
  Y1.value = Y1.value.slice(0, 4);
});

M1.addEventListener("input", () => {
  M1.value = M1.value.slice(0, 2);
});

D1.addEventListener("input", () => {
  D1.value = D1.value.slice(0, 2);
});

// ###############

function logicCode() {
  let D3 = D2;
  let M3 = M2;
  let Y3 = Y2;

  if (D1.value > D3) {
    D3 = D3 + Months[M3 - 1];
    M3 = M3 - 1;
  }

  if (M1.value > M3) {
    M3 = M3 + 12;
    Y3 = Y3 - 1;
  }

  let AgeYear = Y3 - Y1.value;
  let AgeMonth = M3 - M1.value;
  let AgeDay = D3 - D1.value;

  counter(resultYear, AgeYear);
  counter(resultMonth, AgeMonth);
  counter(resultDay, AgeDay);

  // next BirthDay code

  let nextDay = D1.value;
  let nextMonth = M1.value;

  if (nextDay < D2) {
    nextDay = +nextDay + Months[M2 - 1];
    nextMonth = +nextMonth - 1;
  }

  if (nextMonth < M2) {
    nextMonth = +nextMonth + 12;
  }

  let nextBirthDay = nextDay - D2;
  let nextBirthMonth = nextMonth - M2;

  result.classList.add("open");
  nextBirthDayMsg.innerHTML = `Your Next Birthday in <span>${nextBirthMonth}</span> Months and <span>${nextBirthDay}</span> Days`;
  if (nextBirthDay == 0 && nextBirthMonth == 0) {
    nextBirthDayMsg.innerHTML = "Your Birthday is Today !! Happy Birthday 🎉🎂";
  }
}

// ##############

formAge.addEventListener("submit", (e) => {
  e.preventDefault();

  let error = "";

  if (Y1.value.length === 0 || M1.value.length === 0 || D1.value.length === 0) {
    error = "Make sure you enter Year, Month, and Day.";
  } else if (Y1.value.length !== 4) {
    error = "Year must be 4 characters.";
  } else if (Y1.value > Y2) {
    error = `Year must be less than or equal to ${Y2}.`;
  } else if (M1.value < 1) {
    error = "Month can't be equal to 0.";
  } else if (M1.value > 12) {
    error = "Month must be less than or equal to 12.";
  } else if (D1.value < 1) {
    error = "Day can't be equal to 0.";
  } else if (D1.value > 31) {
    error = "Day must be less than or equal to 31.";
  } else if (Y1.value == Y2 && M1.value > M2) {
    error = `Month must be less than or equal to ${M2}.`;
  } else if (Y1.value == Y2 && M1.value == M2 && D1.value > D2) {
    error = `Day must be less than or equal to ${D2}.`;
  }

  if (error.length !== 0) {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = error;
  } else {
    errorMsg.style.display = "none";
    logicCode();
  }
});

// ##############

tryBtn.onclick = () => window.location.reload();
