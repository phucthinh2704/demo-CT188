$(document).ready(() => {
    //   const goTop = document.querySelector("#go-top");
    //   goTop.addEventListener("click", () => {});
    $(window).scroll(function () {
      if ($(this).scrollTop()) {
        $("#go-top").fadeIn('fast');
      } else {
        $("#go-top").fadeOut('fast');
      }
    });
    $("#go-top").click(function (e) {
      e.preventDefault();
  
      $("html, body").animate({ scrollTop: 0 }, 800);
    });
  });
  
  let showImages = document.getElementsByClassName("show");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  let slideIndex = 0;
  function showSlide(index) {
    if (index < 0) slideIndex = 2;
    else if (index > 2) slideIndex = 0;
  
    const offset = -slideIndex * 100;
    for (let i = 0; i < showImages.length; i++) {
      showImages[i].style.transform = `translateX(${offset}%)`;
    }
  }
  let dot = document.getElementsByClassName("dot");
  function changeDot(slideIndex) {
    for (let i = 0; i < showImages.length; i++) {
      if (i == slideIndex) {
        dot[i].style.backgroundColor = "#111";
      } else {
        dot[i].style.backgroundColor = "#eee";
      }
    }
  }
  prev.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
    changeDot(slideIndex);
  });
  next.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
    changeDot(slideIndex);
  });

  