//We used JavaScript to apply animation when passing through the circuit

window.addEventListener("scroll", function () {
  const element = document.getElementById("animated-text");
  const position = element.getBoundingClientRect();

  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    element.classList.remove("hidden"); // إزالة حالة الاختفاء
    element.classList.add("animate-fade-in-down"); // إضافة الحركة
  }
});

window.addEventListener("scroll", function () {
  const element = document.getElementById("animated-div");
  const position = element.getBoundingClientRect();

  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    element.classList.remove("hidden");
    element.classList.add("animate-fade-in-up");
  }
});

window.addEventListener("scroll", function () {
  const element = document.getElementById("animated-div-left");
  const position = element.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.remove("hidden");
    element.classList.add("animate-fade-in-left");
  }
});

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-element");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".hidden-child").forEach((element) => {
  observer.observe(element);
});
