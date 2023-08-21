let form = document.forms.signup;
let inps = document.querySelectorAll("input");
let successCount = document.querySelector(".success");
let errorCount = document.querySelector(".error");
let NeedInps = document.querySelectorAll(".necessarily");
let btn = document.querySelector("button");
let texts = document.querySelectorAll(".title");
let errorInp = 0;
let success = 0;
let error = false;
let patterns = {
  text: /[^/s]/,
  name: /^[a-z ,.'-]+$/i,
  phoneNum: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,
  age: /^\d+$/,
  email: /[^\s]*@[a-z0-9.-]*/i,
};
inps.forEach((inp) => {
  let names = inp.getAttribute("name");
  console.log(names);
  inp.onkeyup = () => {
    let pattern = patterns[names];
    console.log(pattern);
    if (pattern.test(inp.value) === true) {
      inp.style.borderColor = "green";
    } else {
      inp.style.borderColor = "red";
    }
  };
});
form.onsubmit = (event) => {
  event.preventDefault();
  error = false;
  success = 0;
  errorInp = 0;

  NeedInps.forEach((inp) => {
    let img = inp.nextElementSibling;
    if (inp.value.length === 0) {
      console.log(texts);
      error = true;
      inp.style.borderColor = "red";
      btn.style.backgroundColor = "red";
      errorInp++;
      img.style.display = "block";
    } else if (inp.value.length > 0) {
      if (inp.style.borderColor === "red") {
        error = true;
      } else {
        img.style.display = "none";
        inp.style.borderColor = "blue";
        success++;
      }
    }
  });
  if (error) {
  } else {
    submit();
  }
  successCount.innerHTML = `Success : ${success} / 7`;
  errorCount.innerHTML = `Error : ${errorInp} / 7`;
};
if (success === 7) {
  btn.style.backgroundColor = "blue";
}
function submit() {
  let user = {};
  let fm = new FormData(form);
  fm.forEach((value, key) => {
    user[key] = value;
  });
  console.log(user);
}
