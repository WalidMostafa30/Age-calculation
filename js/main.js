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

  let nextd = D1.value;
  let nextm = M1.value;

  if (nextd < D2) {
    nextd = +nextd + Months[M2 - 1];
    nextm = +nextm - 1;
  }

  if (nextm < M2) {
    nextm = +nextm + 12;
  }

  let nextBirthDay = nextd - D2;
  let nextBirthMonth = nextm - M2;

  result.classList.add("open");
  nextBirthDayMsg.innerHTML = `Your Next Birthday in <span>${nextBirthMonth}</span> Months and <span>${nextBirthDay}</span> Days`;
  if (nextBirthDay == 0 && nextBirthMonth == 0) {
    nextBirthDayMsg.innerHTML =
      "Your Birthday is Today !! \n Happy Birthday 🎉🎂";
  }
}

// ##############

formAge.addEventListener("submit", (e) => {
  e.preventDefault();
  if (Y1.value.length !== 4) {
    alert(`year must be 4 character`);
  } else if (Y1.value > Y2) {
    alert(`year must be less than or equal to ${Y2}`);
  } else if (M1.value.length > 2) {
    alert(`month must be 1 or 2 character`);
  } else if (M1.value > 12) {
    alert(`month must be less than or equal to 12`);
  } else if (D1.value.length > 2) {
    alert(`day must be 1 or 2 character`);
  } else if (D1.value > 31) {
    alert(`day must be less than or equal to 31`);
  } else if (Y1.value == Y2 && M1.value > M2) {
    alert(`month must be less than or equal to ${M2}`);
  } else if (Y1.value == Y2 && M1.value == M2 && D1.value > D2) {
    alert(`day must be less than or equal to ${D2}`);
  } else {
    logicCode();
  }
});

// ##############

tryBtn.onclick = () => window.location.reload();
