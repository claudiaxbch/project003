/*
Name: Your Name
File Name: script.js
Date: March 3, 2026
*/

function menu() {
  //Hamburger menu function
  var navlinks = document.getElementById("nav-links");
  var menuicon = document.getElementById("icon");
  if (navlinks.style.display === "block") {
    navlinks.style.display = "none";
    menuicon.style.color = "#2a1f14";
  } else {
    navlinks.style.display = "block";
    menuicon.style.color = "#f6eee4";
  }
}

// FAQ function
function showAnswer(num) {
  var answer = document.getElementById("answer-text");

  switch (num) {
    case 1:
      answer.textContent =
        "Step back and observe for a few minutes. Wait to see if a parent returns.";
      break;

    case 2:
      answer.textContent =
        "Do not approach the animal. Contact animal control immediately.";
      break;

    case 3:
      answer.textContent =
        "No, birds do not abandon babies if touched. You may gently return it to the nest.";
      break;

    case 4:
      answer.textContent = "Visit our Contact page to apply as a volunteer.";
      break;

    default:
      answer.textContent = "";
  }
}
