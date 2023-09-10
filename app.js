let li = document.querySelector(".circle");

let br = document.querySelector("input");

let con = "off";

let s = document.querySelector(".s");
let sw = document.querySelector(".switch");
sw.addEventListener("click", () => {
  if (con == "off") {
    con = "on";
  } else {
    con = "off";
  }
  if (con == "on") {
    sw.classList.add("switchon");
    s.classList.add("so");
    li.style.opacity = 1;
    br.addEventListener("input", () => {
      let val = br.value / 100;
      li.style.opacity = val;
    });
  } else {
    li.style.opacity = 0;
    sw.classList.remove("switchon");
    s.classList.remove("so");
    br.addEventListener("input", () => {
      li.style.opacity = 0;
    });
  }
});
if (con == "off") {
  li.style.opacity = 0;
}
