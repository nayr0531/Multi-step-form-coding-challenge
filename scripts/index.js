import personalInfoForm from "../pages/personalInfoForm.js";
import planForm from "../pages/planForm.js";
import addsOnForm from "../pages/addsOnForm.js";
import summaryForm from "../pages/summaryForm.js";
import greetings from "../pages/greetings.js";

const btnCircles = document.querySelectorAll(".btn-circle");

const mainSection = document.querySelector(".main-section");
mainSection.innerHTML = planForm;
const inputList = document.querySelectorAll("input");
const check = (inputs) => {
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.length) {
        input.classList.add("valid");
      } else {
        input.classList.remove("valid");
      }
    });
  });
};
check(inputList);

btnCircles.forEach((btnCircle, index) => {
  btnCircle.addEventListener("click", () => {
    const pages = [personalInfoForm, planForm, addsOnForm, summaryForm];
    mainSection.innerHTML = pages[index];
  });
});

const btnPersonalInfo = document.querySelector(".btn-personal-info");
btnPersonalInfo?.addEventListener("click", () => {
  const error = document.querySelectorAll(".error");
  let valid = true;
  inputList.forEach((input, index) => {
    if (index === 0) {
      if (!input.value.length) {
        error[index].classList.add("active");
        input.classList.add("invalid");
        valid = false;
      } else {
        error[index].classList.remove("active");
        input.classList.remove("invalid");
        valid = true;
      }
    }
    if (index === 1) {
      if (!input.value.length) {
        error[index].classList.add("active");
        input.classList.add("invalid");
        valid = false;
      } else {
        error[index].classList.remove("active");
        input.classList.remove("invalid");
        valid = true;
      }
    }
    if (index === 2) {
      if (!input.value.length) {
        error[index].classList.add("active");
        input.classList.add("invalid");
        valid = false;
      } else {
        error[index].classList.remove("active");
        input.classList.remove("invalid");
        valid = true;
      }
    }
  });

  if (valid) {
    btnCircles[0].classList.remove("active");
    btnCircles[1].classList.add("active");
    mainSection.innerHTML = planForm;
    planFormFunc();
  }
});

const planOptions = document.querySelectorAll(".plan-options .option");

planOptions.forEach((option) => {
  option.addEventListener("click", () => {
    planOptions.forEach((option) => {
      option.classList.remove("active");
    });

    option.classList.add("active");
  });
});

const btnPlanPaying = document.querySelector(".btn-plan-paying");

btnPlanPaying.addEventListener("click", () => {
  const btnCircle = btnPlanPaying.querySelector(".btn-plan-paying-circle");
  btnCircle.classList.toggle("active");

  const payingOption = document.querySelectorAll(".paying-option");

  if (payingOption[0].classList.contains("active")) {
    payingOption[0].classList.remove("active");
    payingOption[1].classList.add("active");
  } else {
    payingOption[0].classList.add("active");
    payingOption[1].classList.remove("active");
  }

  //Take a break next = "Working on dynamic 2 months free"
});

const planFormFunc = () => {
  const btnPlan = document.querySelector(".btn-plan");
  btnPlan?.addEventListener("click", () => {
    btnCircles[2].classList.add("active");
    mainSection.innerHTML = addsOnForm;
    addsOnFunc();
  });
};

const addsOnFunc = () => {
  const btnAddsOn = document.querySelector(".btn-adds-on");
  btnAddsOn?.addEventListener("click", () => {
    btnCircles[3].classList.add("active");
    mainSection.innerHTML = summaryForm;
  });
};
