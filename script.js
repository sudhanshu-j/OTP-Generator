function Generate() {
  let count = "0123456789";
  let otp = "";

  for (let i = 0; i < 6; i++) {
    otp += count[Math.floor(Math.random() * 10)];
  }
  let span = document.querySelector(".box span");
  span.innerHTML = otp;
}
