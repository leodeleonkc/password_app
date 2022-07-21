"use strict";
const resizeOps = () => {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px"
  );
};

resizeOps();
window.addEventListener("resize", resizeOps);

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordEl = document.getElementById("password-el");
let copyPassEl = document.getElementById("copy-pass-el");
let copyCat = document.getElementById("copycat");

function randomCharacter() {
  return Math.floor(Math.random() * characters.length);
}

function generate() {
  let a = randomCharacter();
  let b = randomCharacter();
  let c = randomCharacter();
  let d = randomCharacter();
  let e = randomCharacter();
  let f = randomCharacter();
  let g = randomCharacter();
  let h = randomCharacter();
  let i = randomCharacter();
  let j = randomCharacter();
  let k = randomCharacter();
  let l = randomCharacter();
  let m = randomCharacter();
  let n = randomCharacter();
  passwordEl.textContent =
    characters[a] +
    characters[b] +
    characters[c] +
    characters[d] +
    characters[e] +
    characters[f] +
    characters[g] +
    characters[h] +
    characters[i] +
    characters[j] +
    characters[k] +
    characters[l] +
    characters[m] +
    characters[n];

  copyPassEl.innerHTML = `<i class="bi bi-caret-down"></i> Tap/Click to copy! <i class="bi bi-clipboard"></i>`;
  copyCat.value =
    characters[a] +
    characters[b] +
    characters[c] +
    characters[d] +
    characters[e] +
    characters[f] +
    characters[g] +
    characters[h] +
    characters[i] +
    characters[j] +
    characters[k] +
    characters[l] +
    characters[m] +
    characters[n];
}

function copyPassword() {
  copyCat.focus();
  copyCat.select();
  // copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyCat.value);
  copyPassEl.innerHTML = `Password Copied! <i class="bi bi-clipboard"></i>`;
  copyPassEl.classList.add("tap-animate");
}
