let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.add('active');
}

document.querySelector('#close-navbar').onclick = () => {
  navbar.classList.remove('active');
};

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () => {
  registerBtn.classList.add('active');
  loginBtn.classList.remove('active');
  document.querySelector('.account-form .login-form').classList.remove('active');
  document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () => {
  registerBtn.classList.remove('active');
  loginBtn.classList.add('active');
  document.querySelector('.account-form .login-form').classList.add('active');
  document.querySelector('.account-form .register-form').classList.remove('active');
};

let accountForm = document.querySelector('.account-form')

document.querySelector('#account-btn').onclick = () => {
  accountForm.classList.add('active');
}

document.querySelector('#close-form').onclick = () => {
  accountForm.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
});

var swiper = new Swiper(".home-courses-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".teachers-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco => {
  acco.onclick = () => {
    accordion.forEach(dion => dion.classList.remove('active'));
    acco.classList.toggle('active');
  };
});

document.querySelector('.load-more .btn').onclick = () => {
  document.querySelectorAll('.courses .box-container .hide').forEach(show => {
    show.style.display = 'block';
  });
  document.querySelector('.load-more .btn').style.display = 'none';
};
function enable_radio(status) {
  status = !status;
  document.getElementById("view").disabled = status;
}
function enable_radio1(status) {
  status = !status;
  document.getElementById("view1").disabled = status;
}
function enable_radio2(status) {
  status = !status;
  document.getElementById("view2").disabled = status;
}
function enable_radio3(status) {
  status = !status;
  document.getElementById("view3").disabled = status;
}
function enable_radio4(status) {
  status = !status;
  document.getElementById("view4").disabled = status;
}
function enable_radio5(status) {
  status = !status;
  document.getElementById("view5").disabled = status;
}
function enable_radio6(status) {
  status = !status;
  document.getElementById("view6").disabled = status;
}
function enable_radio7(status) {
  status = !status;
  document.getElementById("view7").disabled = status;
}
function enable_radio8(status) {
  status = !status;
  document.getElementById("view8").disabled = status;
}
function enable_radio9(status) {
  status = !status;
  document.getElementById("view9").disabled = status;
}
function enable_radio10(status) {
  status = !status;
  document.getElementById("view10").disabled = status;
}
function enable_radio11(status) {
  status = !status;
  document.getElementById("view11").disabled = status;
}
function enable_radio12(status) {
  status = !status;
  document.getElementById("view12").disabled = status;
}
function enable_radio13(status) {
  status = !status;
  document.getElementById("view13").disabled = status;
}
function enable_radio14(status) {
  status = !status;
  document.getElementById("view14").disabled = status;
}

