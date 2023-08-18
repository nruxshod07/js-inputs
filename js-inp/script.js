let form = document.forms.signup;
let successCount = document.querySelector(".success");
let errorCount = document.querySelector(".error");
let NeedInps = document.querySelectorAll(".necessarily");
let btn = document.querySelector("button");
let success = 0;
let errorInp = 0;
form.onsubmit = (event) => {
  event.preventDefault();
  let error = false;
  success = 0;
  errorInp = 0;
  NeedInps.forEach((inp) => {
    if (inp.value.length === 0) {
      error = true;
      inp.style.borderColor = "red";
      errorInp++;
      btn.style.backgroundColor = "red";
    } else if (inp.value.length > 0) {
      inp.style.borderColor = "blue";
      success++;
    }
    successCount.innerHTML = `Success : ${success} / 7`;
    errorCount.innerHTML = `Error : ${errorInp} / 7`;
    if (error) {
    } else {
      submit();
    }
    if (success === 7) {
      btn.style.backgroundColor = "blue";
    }
  });
};
function submit() {
  let user = {};
  let fm = new FormData(form);
  fm.forEach((value, key) => {
    user[key] = value;
  });
  console.log();
}
