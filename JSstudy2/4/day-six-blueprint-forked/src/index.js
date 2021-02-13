// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const option = document.querySelectorAll("option");
const selectValue = document.querySelector(".option-select");
const selectValue2 = document.querySelector("option");

const CURRENT_COUNTNRY = "currentCountry";


function selectedCountry(event) {
  const selectedCountry = localStorage.getItem("currentCountry");
  console.log(selectedCountry);
  console.log("test success");

  console.log(option);
  console.log(selectValue);

  for(var i = 0; i<option.length; i++){
    console.log(option[i].value)

    // setAttribute / classList
    if(selectedCountry === option[i].value){
      console.log("same");
      option[i].setAttribute("selected", true);
    }
  }
}

function checkCountry() {
  selectValue.addEventListener("change", function select(event) {
    event.preventDefault();

    console.log("localStroage setItem");

    localStorage.setItem(CURRENT_COUNTNRY, event.target.value);
    console.log(localStorage.getItem("currentCountry"));
  });
}
function loadCountry() {
  const loadCountryValue = localStorage.getItem("currentCountry");

  if (loadCountryValue === null) {
    checkCountry();
  } else {
    selectedCountry();
  }
}

function init() {
  loadCountry();
}

init();

// Solving
/**
 * 1. remember using localstorage
 * 2. remember how to get all options and find one things selelcted
 * 3. And save that option value into the local storage
 * ###############################
 * setItem(key), getItem(key)
 */
