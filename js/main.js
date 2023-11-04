const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const namee = document.getElementById("name");
const labelSpan = document.querySelectorAll("label span");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const togglel = document.querySelector(".toggle-label");
const smalbox1 = document.querySelectorAll(".smalbox");
const step1 = document.querySelector(
  ".conta ul:nth-child(1) span:first-child"
).className;

const step2 = document.querySelector(
  ".conta ul:nth-child(2) span:first-child"
).className;
const step3 = document.querySelector(
  ".conta ul:nth-child(3) span:first-child"
).className;

let addMoree = [];
planArr = [];
let conter = 0;
const obj = new Object({});
const obj2 = new Object({});
const obj3plane = new Object({});
let arr;
let arr3;
if (sessionStorage.getItem("color")) {
  arr3 = JSON.parse(sessionStorage.getItem("color"));
} else {
  arr3 = [];
}

if (step2 === "activ") {
  arr3[0] = { color: true };
  sessionStorage.removeItem("color");
  sessionStorage.setItem("color", JSON.stringify(arr3));
}

if (step3 === "activ") {
  sessionStorage.removeItem("Online service");
  sessionStorage.removeItem("Larger storage");
  sessionStorage.removeItem("Customizable profile");
}
const spanmonth = document.querySelector(".togolrBoxx span:last-child");

if (sessionStorage.getItem("data")) {
  arr = JSON.parse(sessionStorage.getItem("data"));
  if (location.pathname === "/index.html") {
    namee.value = arr[arr.length - 1].name;
    email.value = arr[arr.length - 1].email;
    phone.value = arr[arr.length - 1].phone;
  }
} else {
  arr = [];
}

function toggleClass(theid) {
  smalbox1.forEach((e) => {
    e.classList.remove("active");
  });
  const theElment = document.getElementById(theid);
  theElment.classList.add("active");

  sessionStorage.removeItem("thePlan");
  planArr = [];
  obj3plane.plane = theid;
  planArr.push(theid);
  sessionStorage.setItem("thePlan", JSON.stringify(planArr));
}

function theChek(theId) {
  const elment = document.getElementById(theId);
  if (elment.value !== "") {
    elment.previousElementSibling.lastChild.style.display = "none";
  }
}

if (step1 === "activ") {
  btn.addEventListener("click", (e) => {
    let theName;
    let theEmail;
    let thePhone;

    if (namee.value !== "") {
      theName = true;
    } else if (namee.value === "") {
      e.preventDefault();
      theName = false;
      labelSpan[0].style.display = "inline-block";
    }
    if (email.value !== "") {
      theEmail = true;
    } else if (email.value === "") {
      e.preventDefault();
      theEmail = false;
      labelSpan[1].style.display = "inline-block";
    }
    if (phone.value !== "") {
      thePhone = true;
    } else if (phone.value === "") {
      e.preventDefault();
      thePhone = false;
      labelSpan[2].style.display = "inline-block";
    }

    if (theName === true && theEmail === true && thePhone === true) {
      // e.preventDefault();
      obj.name = namee.value;
      obj.email = email.value;
      obj.phone = phone.value;

      arr.push(obj);
      sessionStorage.setItem("data", JSON.stringify(arr));
      location.pathname = "SELECT PLAN.html";
    }
  });
}
function theToggol() {
  const theSpana = document.querySelectorAll(".theSpaan");
  const smalbox1 = document.querySelectorAll(".smalbox");
  const togolrBox = document.querySelector(".togolrBoxx span:first-child");
  const togolrBox2 = document.querySelector(".togolrBoxx span:last-child");
  const smallDi = document.querySelectorAll(".smallDiv p");
  const toggleSwitch = document.querySelector(".toggle-switch");
  const toggleInput = toggleSwitch.querySelector(".toggle-input");
  conter += 1;

  let arrMonth = ["$9/mo", "$12/mo", "$15/mo"];
  let arrYear = ["$90/yr", "$120/yr", "$150/yr"];
  if (toggleInput.checked) {
    for (let i = 0; i < theSpana.length; i++) {
      theSpana[i].style.display = "none";
      if (window.innerWidth < 900) {
        smalbox1[i].style.height = "80px";
      } else {
        smalbox1[i].style.height = "150px";
      }
      smallDi[i].innerHTML = arrMonth[i];
    }

    togolrBox.style.color = "hsl(213, 96%, 18%)";
    togolrBox2.style.color = "hsl(229, 24%, 87%)";
    obj2.color = true;
    arr3 = [];
    arr3.push(obj2);
    sessionStorage.removeItem("color");
    sessionStorage.setItem("color", JSON.stringify(arr3));
  } else {
    for (let i = 0; i < theSpana.length; i++) {
      theSpana[i].style.display = "block";
      if (window.innerWidth < 900) {
        smalbox1[i].style.height = "100px";
      } else {
        smalbox1[i].style.height = "170px";
      }
      smallDi[i].innerHTML = arrYear[i];
    }

    togolrBox2.style.color = "hsl(213, 96%, 18%)";
    togolrBox.style.color = "hsl(229, 24%, 87%)";
    obj2.color = false;
    arr3 = [];
    arr3.push(obj2);
    sessionStorage.removeItem("color");
    sessionStorage.setItem("color", JSON.stringify(arr3));
  }
}

const myCheckbox = document.querySelectorAll(".myCheckbox");

myCheckbox.forEach((elment) => {
  elment.addEventListener("click", (e) => {
    const thetxt =
      elment.nextElementSibling.firstChild.nextSibling.firstChild.nextSibling
        .innerHTML;
    const prices = elment.parentElement.lastChild.previousSibling.innerHTML;

    e.currentTarget.checked
      ? (elment.parentElement.style.border = "1px solid hsl(243, 100%, 62%)") &&
        sessionStorage.setItem(thetxt, prices)
      : (elment.parentElement.style.border = "1px solid hsl(229, 24%, 87%)") &&
        sessionStorage.removeItem(thetxt);
  });
});

if (arr3.length > 0) {
  if (step3 === "activ" && arr3[0].color === false) {
    let arr2 = ["+$10/yr", "+$20/yr", "+$20/yr"];
    const theeprice = document.querySelectorAll(".theeprice");
    for (let i = 0; i < theeprice.length; i++) {
      theeprice[i].innerHTML = arr2[i];
    }
  }
}
