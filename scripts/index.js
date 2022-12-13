import personalInfoForm from "../pages/personalInfoForm.js";
import planForm from "../pages/planForm.js";
import addsOnForm from "../pages/addsOnForm.js";
import summaryForm from "../pages/summaryForm.js";

const btnCircles = document.querySelectorAll(".btn-circle");

const mainSection = document.querySelector(".main-section");
mainSection.innerHTML = personalInfoForm;
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
  // const error = document.querySelectorAll(".error");
  let valid = true;
  // inputList.forEach((input, index) => {
  //   if (index === 0) {
  //     if (!input.value.length) {
  //       error[index].classList.add("active");
  //       input.classList.add("invalid");
  //       valid = false;
  //     } else {
  //       error[index].classList.remove("active");
  //       input.classList.remove("invalid");
  //       valid = true;
  //     }
  //   }
  //   if (index === 1) {
  //     if (!input.value.length) {
  //       error[index].classList.add("active");
  //       input.classList.add("invalid");
  //       valid = false;
  //     } else {
  //       error[index].classList.remove("active");
  //       input.classList.remove("invalid");
  //       valid = true;
  //     }
  //   }
  //   if (index === 2) {
  //     if (!input.value.length) {
  //       error[index].classList.add("active");
  //       input.classList.add("invalid");
  //       valid = false;
  //     } else {
  //       error[index].classList.remove("active");
  //       input.classList.remove("invalid");
  //       valid = true;
  //     }
  //   }
  // });

  if (valid) {
    btnCircles[1].classList.add("active");
    mainSection.innerHTML = planForm;
    planFormFunc();
  }
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

// const btnCircles = document.querySelectorAll(".btn-circle");
