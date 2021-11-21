const div = document.createElement("div");
let current = document.createElement("a");
const links = Array.from(document.querySelectorAll(".menu a"));

// document.addEventListener("change", ({ target }) => {
//   if (target.matches(".menu a")) {
//     current.classList.remove("active");
//     current = target;
//     target.classList.add("active");
//   }
// });

window.onhashchange = (e) => {
  console.log("change", location.hash);
  //   let a = links.find((e) => e.hash == location.hash);
  links.forEach((e) => {
    if (e.hash == location.hash) {
      e.classList.add("active");
      console.log(e);
    }
  });
};
