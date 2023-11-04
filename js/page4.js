///////////////////////////////// step 4 Finshing up
let thePlan = JSON.parse(sessionStorage.getItem("thePlan"))[0];
let yrMo = JSON.parse(sessionStorage.getItem("color"))[0].color;
let onlineService = sessionStorage.getItem("Online service");
let LargerStorge = sessionStorage.getItem("Larger storage");
let CustomizableProfile = sessionStorage.getItem("Customizable profile");
const step4 = document.querySelector(
  ".conta ul:nth-child(4) span:first-child"
).className;

let planMonth = ["$9/mo", "$12/mo", "$15/mo"];
let planYear = ["$90/yr", "$120/yr", "$150/yr"];
let twoplan;
let planprice;
let monthhh = "mo";
let monyer;

if (yrMo === true) {
  yrMo = "monthly";
  monthhh = "mo";
  monyer = "Total (per month)";
  if (thePlan === "arcade") {
    thePlan = thePlan.charAt(0).toUpperCase() + thePlan.slice(1);
    twoplan = planMonth[0];
    planprice = 9;
    // console.log(twoplan);
  } else if (thePlan === "advanced") {
    thePlan = thePlan.charAt(0).toUpperCase() + thePlan.slice(1);
    twoplan = planMonth[1];
    planprice = 12;
    // console.log(twoplan);
  } else if (thePlan === "pro") {
    thePlan = thePlan.charAt(0).toUpperCase() + thePlan.slice(1);
    twoplan = planMonth[2];
    planprice = 15;
    // console.log(twoplan);
  }
} else {
  monthhh = "yr";
  monyer = "Total (per year)";
  yrMo = "yearly";
  if (thePlan === "arcade") {
    thePlan = thePlan.charAt(0).toUpperCase() + thePlan.slice(1);
    twoplan = planYear[0];
    planprice = 90;
    // console.log(twoplan);
  } else if (thePlan === "advanced") {
    thePlan = thePlan.charAt(0).toUpperCase() + thePlan.slice(1);
    twoplan = planYear[1];
    planprice = 120;
    // console.log(twoplan);
  } else if (thePlan === "pro") {
    thePlan = thePlan.charAt(0).toUpperCase() + thePlan.slice(1);
    twoplan = planYear[2];
    planprice = 150;
    // console.log(twoplan);
  }
}

const yearly = `
<h2>Finishing up</h2>
            <p>Double-check everything look OK befor confirming.</p>

            <div class="finshUp">
              <div class="yearly-monthly">
                <span>${thePlan} (${yrMo})</span>
                <span id="mo-ye">${twoplan}</span>
              </div>
              <span id="changeP" class="changey">Change</span>
              <br />
              <br />
              <br />
              <hr width="95%" />
              <br />
              <div id="one">
               
              </div>
              <div id="two">
                
              </div>
              <div id="three">
               
              </div>
            </div>
            <div class="total">
              <p>${monyer}</p>
              <span id="totalprice">$120/yr</span>
            </div>
   
`;

const box2 = document.getElementById("box2");
let moreCharge = [];
box2.innerHTML = yearly;

if (onlineService) {
  const online = document.createElement("p");
  const ptxt = document.createTextNode("Online service");
  online.appendChild(ptxt);
  const onlinespan = document.createElement("span");
  const spantxt = document.createTextNode(onlineService);
  onlinespan.appendChild(spantxt);
  const one = document.getElementById("one");
  one.appendChild(online);
  one.appendChild(onlinespan);
  moreCharge.push(parseInt(extractNumbersFromMiddle(onlineService)));
}
if (LargerStorge) {
  const online = document.createElement("p");
  const ptxt = document.createTextNode("Larger storge");
  online.appendChild(ptxt);
  const onlinespan = document.createElement("span");
  const spantxt = document.createTextNode(LargerStorge);
  onlinespan.appendChild(spantxt);
  const one = document.getElementById("two");
  one.appendChild(online);
  one.appendChild(onlinespan);
  moreCharge.push(parseInt(extractNumbersFromMiddle(LargerStorge)));
}
if (CustomizableProfile) {
  const online = document.createElement("p");
  const ptxt = document.createTextNode("Customizable profile");
  online.appendChild(ptxt);
  const onlinespan = document.createElement("span");
  const spantxt = document.createTextNode(CustomizableProfile);
  onlinespan.appendChild(spantxt);
  const one = document.getElementById("three");
  one.appendChild(online);
  one.appendChild(onlinespan);
  moreCharge.push(parseInt(extractNumbersFromMiddle(CustomizableProfile)));
}

let theRuslt = 0;

for (let i = 0; i < moreCharge.length; i++) {
  theRuslt = theRuslt + moreCharge[i];
}

let theTotall = planprice + theRuslt;
// console.log(planprice);

// console.log(theTotall);

const totalprice = document.getElementById("totalprice");
totalprice.innerHTML = `$${theTotall}/${monthhh}`;

function extractNumbersFromMiddle(str) {
  // استخراج الأرقام من النص
  let numbers = str.match(/\d+/g);

  // إذا تم العثور على أرقام
  if (numbers) {
    // ارجع الأرقام
    return numbers;
  } else {
    // إذا لم يتم العثور على أرقام
    return "No Number";
  }
}

const changeP = document.getElementById("changeP");

changeP.onclick = function () {
  location.pathname = "SELECT PLAN.html";
};

const btn4 = document.getElementById("btn4");
if (step4 === "activ") {
  btn4.style.backgroundColor = "hsl(243, 100%, 62%)";
}
btn4.onclick = () => (location.pathname = "ThankYou.html");
