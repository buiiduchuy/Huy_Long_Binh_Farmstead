$(function () {
  // toggle menu header
  const iconNav = document.querySelector(".header .menu__icon");
  const element = document.querySelector(".header nav");
  iconNav.addEventListener("click", function () {
    element.classList.toggle("active");
  });

  // toggle theme
  const iconTheme = document.querySelectorAll(".header .theme");
  const body = document.querySelector("body");

  iconTheme.forEach((theme) => {
    theme.addEventListener("click", function () {
      body.classList.toggle("theme__dark");
    });
  });

  // handle ani scale input header
  const inputHeader = document.querySelector(".head__search");
  const elTheme = document.querySelector(".header .theme");
  document.addEventListener("click", function (e) {
    if (window.innerWidth < 768) {
      var isClickInside = inputHeader.contains(e.target);
      if (isClickInside) {
        iconNav.classList.add("off");
        elTheme.classList.add("off");
      } else {
        iconNav.classList.remove("off");
        elTheme.classList.remove("off");
      }
    }
  });

  //active menu
  const pageName = $("body").attr("id");
  $(".header").find(`.${pageName}`).children().addClass("active");

  window.addEventListener("scroll", function (event) {
    var top = this.scrollY;
    if (top > 20) {
      $(".header,.btn__top").addClass("fixed");
    } else {
      $(".header,.btn__top").removeClass("fixed");
    }
  });
});
