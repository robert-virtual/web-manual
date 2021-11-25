let current = document.createElement("a");
const links = Array.from(document.querySelectorAll(".menu a"));
let sections = document.querySelectorAll(".content section");
console.log(links);
console.log(sections);
// the magic

const callCack = (entries) => {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("newcurrent:", entry.target.id);
      current.classList.remove("active");
      let newCurrent = links.find((link) => link.hash == "#" + entry.target.id);
      newCurrent.classList.add("active");
      current = newCurrent;
    }
  });
};

const observer = new IntersectionObserver(callCack, {
  rootMargin: "-250px",
});
sections.forEach((sec) => {
  observer.observe(sec);
});
