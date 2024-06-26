let otp;

const otpExpireElement = document.getElementById("otp-expire-id");

function expireOTP() {
  const totalTime = 15000;
  const intValTime = 1000;

  let time = totalTime / intValTime;
  const interVal = setInterval(function () {
    otpExpireElement.innerText = `OTP will expire in ${time} seconds`;
    time--;
  }, intValTime);

  const totalTimeOut =setTimeout(function () {
    otpExpireElement.innerText = `OTP has expired`;
    clearInterval(interVal);
    generateOTP();
  }, totalTime);

    const otpElement = document.getElementById("result-id");

    if (otpElement.innerText === "OTP has been validated successfully") {
      clearInterval(interVal);
      clearTimeout(totalTimeOut);
      otpExpireElement.innerText = `OTP has been validated`;
    }

   
 

}

function tackleOTPBoxes() {
  const boxes = document.getElementById("otp-box-list-id");

  boxes.addEventListener("input", (e) => {
    const target = e.target;
    const value = target.value;
    // console.log(target)
    // console.log(value);

    if (isNaN(value)) {
      target.value = "";
      return;
    }

    const nextElement = target.nextElementSibling;
    if (nextElement) {
      nextElement.focus();
    }
    OTPValidate();
  });
}

function generateOTP() {
  otp = Math.floor(1000 + Math.random() * 9000);
  const otpElement = document.getElementById("generated-otp-id");

  otpElement.innerText = `Your OTP: ${otp}`;
  expireOTP();
}

function OTPValidate() {
  let typeNumber = "";
  const boxListElement = document.getElementById("otp-box-list-id");
  //   const child = boxListElement.children;
  [...boxListElement.children].forEach((child) => {
    typeNumber = typeNumber + child.value;
  });

  const result = otp === parseInt(typeNumber, 10);
  const resultElement = document.getElementById("result-id");
  if (result) {
    resultElement.innerText = "OTP has been validated successfully";
    resultElement.style.color = "green";
  } else {
    resultElement.innerText = "OTP is invalid";
    resultElement.style.color = "red";
  }
}

tackleOTPBoxes();
setTimeout(generateOTP, 2000);
