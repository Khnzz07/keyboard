// const btn = document.querySelectorAll(".btn");
// let colors = ["red", "green", "blue", "violet"];
// document.body.addEventListener("keydown", function f(evt) {
//   console.log(evt.keyCode);
//   if (evt.keyCode === 70) {
//     let index = Math.floor(Math.random() * colors.length);
//     console.log(index);
//     document.querySelector("#f").style.backgrondcolor = "cyan";
//   }
// });
// document.body.addEventListener("keyup", function f(evt) {
//   //   console.log(evt.keyCode);
//   if (evt.keyCode === 70) {
//     document.querySelector("#f").style.backgrondcolor = "black";
//   }
// });
// // console.log(btns);
// const btn = document.querySelectorAll(".btn");
// let colors = ["red", "green", "blue", "violet"];

// document.body.addEventListener("keydown", function (evt) {
//   console.log(evt.keyCode);
//   if (evt.keyCode === 70) {
//     let index = Math.floor(Math.random() * colors.length);
//     console.log(index);
//     document.querySelector("#f").style.backgroundColor = colors[index];
//   }
// });

// document.body.addEventListener("keyup", function (evt) {
//   if (evt.keyCode === 70) {
//     document.querySelector("#f").style.backgroundColor = "black";
//   }
// });
const btns = document.querySelectorAll(".btn");
const colors = ["red", "green", "blue", "violet"];

function handleKeyDown(evt) {
  evt.preventDefault(); // Prevent the default behavior for some keys
  let key;

  if (evt.key === " ") {
    // Handle the space key
    key = document.getElementById("spc");
  } else {
    // Use evt.key.toLowerCase() for regular keys
    key =
      document.getElementById(evt.key.toLowerCase()) ||
      document.getElementById(evt.code.toLowerCase());
  }

  if (key) {
    const index = Math.floor(Math.random() * colors.length);
    key.style.backgroundColor = colors[index];
  }
}

function handleKeyUp(evt) {
  evt.preventDefault(); // Prevent the default behavior for some keys
  let key;

  if (evt.key === " ") {
    // Handle the space key
    key = document.getElementById("spc");
  } else {
    // Use evt.key.toLowerCase() for regular keys
    key =
      document.getElementById(evt.key.toLowerCase()) ||
      document.getElementById(evt.code.toLowerCase());
  }

  if (key) {
    key.style.backgroundColor = "black";
  }
}

document.body.addEventListener("keydown", handleKeyDown);
document.body.addEventListener("keyup", handleKeyUp);
