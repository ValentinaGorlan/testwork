"use strict";

window.addEventListener("DOMContentLoaded", () => {

// tabs 

function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  activeClass
) {
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
      item.classList.remove("animate__fadeIn");
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].style.display = "flex";
    tabsContent[i].classList.add("animate__fadeIn");
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    console.log(target);
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

tabs(
  '.dot',
  '.feedback_block',
  '.tab_dots',
  'dot_active'
)


// timer 

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const hoursSpan = clock.querySelector(".hours");
    const minutesSpan = clock.querySelector(".minutes");
    const secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
      const t = getTimeRemaining(endtime);

      if (t.total <= 0) {
        document.getElementById("countdown").className = "hidden";
        document.getElementById("deadline-message").className = "visible";
        clearInterval(timeinterval);
        return true;
      }

      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
  }
  let deadline = new Date(Date.parse(new Date()) + 60 * 1000 * 30);
  initializeClock("countdown", deadline);

  // form

  const checktextinputs = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach((input) => {
      input.addEventListener("keypress", function (e) {
        if (e.key.match(/[^а-яё a-z]/gi)) {
          e.preventDefault();
        }
      });
    });
  };

  const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach((input) => {
      input.addEventListener("keypress", function (e) {
        if (e.key.match(/[^0-9]/gi)) {
          e.preventDefault();
        }
      });
    });
  };

  checkNumInputs('[name = "phone"]');
  checktextinputs('[name="name"]');

// animate_price

  const newPrice = document.querySelector(".new");
  newPrice.classList.add("animate_animated");

  setInterval(() => {
    newPrice.classList.toggle("animate__flash");
  }, 1000);
});
