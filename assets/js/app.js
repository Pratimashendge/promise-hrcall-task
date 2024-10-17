const snackBar = (msg, icon) => {
  Swal.fire({
    title: msg,
    icon: icon,
    timer: 1500,
  });
};

hrCall = (skill) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = skill.toLowerCase().includes("angular") ? false : true;
      if (!err) {
        resolve("you are shortlisted for frist round");
      } else {
        reject("looking for angular developer");
      }
    }, 800);
  });
};

firstTechCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() >= 0.3 ? false : true;
      if (!err) {
        resolve("you are selected for second tech round");
      } else {
        reject("a candidate is not good in basic");
      }
    }, 600);
  });
};

secondTechCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() >= 0.3 ? false : true;
      if (!err) {
        resolve("you are selected for ml tech round");
      } else {
        reject("a candidate is not able to write code");
      }
    }, 500);
  });
};

mlCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let err = Math.random() >= 0.3 ? false : true;
      if (!err) {
        resolve("you are selected for salary nigotiation");
      } else {
        reject("a candidate is not able to explain previous project");
      }
    }, 400);
  });
};

hrCallForSal = () => {
  snackBar("you are selected!!!", "success");
};

hrCall("angular 14")
  .then((msg) => {
    console.log(msg);
    return firstTechCall();
  })
  .then((msg) => {
    console.log(msg);
    return secondTechCall();
  })
  .then((msg) => {
    console.log(msg);
    return mlCall();
  })
  .then((msg) => {
    snackBar(msg, "success");
    hrCallForSal();
  })
  .catch((err) => {
    console.log(err);
  });