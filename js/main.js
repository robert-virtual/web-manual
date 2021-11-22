const div = document.createElement("div");
let current = document.createElement("a");
const links = Array.from(document.querySelectorAll(".menu a"));
let sections = document.querySelectorAll(".content section");

window.onhashchange = (e) => {
  console.log("change", location.hash);
  let a = links.find((e) => e.hash == location.hash);
  current.classList.remove("active");
  current = a;
  a.classList.add("active");
};
