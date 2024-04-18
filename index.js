$(function () {
  $(`.bars`).click(function () {
    $(`.mobile-tab`).toggleClass("active");
    $(`.bars`).toggleClass("active");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      //   console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  const hiddenElement = document.querySelectorAll(`.hidden`);
  hiddenElement.forEach((el) => observer.observe(el));

  const valueDisplay = document.querySelectorAll(".num");
  let interval = 5000;

  valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
      startValue++;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
});
