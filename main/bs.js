let age;
let savedAge = localStorage.getItem("age");

if (savedAge) {
  if (!canEnterSite(savedAge)) {
    //alert("You cannot enter website.");
    age = prompt("What is your age?");
    localStorage.setItem("age", age);
    if (!canEnterSite(age)) {
      window.location.href = "http://www.google.com";
    }
  }
} else {
  age = prompt("What is your age?");
  localStorage.setItem("age", age);

  if (age < 18) {
    //alert("You cannot enter website.");
    window.location.href = "http://www.google.com";
  } else {
    alert("Enjoy!");
  }
}

function canEnterSite(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
