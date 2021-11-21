const div = document.createElement("div");
let current = document.createElement("a");
const links = Array.from(document.querySelectorAll(".menu a"));

document.addEventListener("change", ({ target }) => {
  if (target.matches(".menu a")) {
    current.classList.remove("active");
    current = target;
    target.classList.add("active");
  }
});

window.onhashchange = (e) => {
  console.log("change", location.hash);
  console.log(links);
  let a = links.find((e) => e.hash == location.hash);
  console.log(a);
};
