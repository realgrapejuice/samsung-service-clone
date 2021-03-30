// 글로벌 변수 섹션
// Nav Variables
const navUl = document.querySelector(".nav__list");

// Sitemap Variables
const sitemapBlock = document.querySelector(".header__sitemap");

// Carousel Variables
const carouselWrapper = document.querySelector(".carousel-wrapper");
const carouselImg = document.querySelector(".img-box > img");
const carouselLeftBtn = document.querySelector(".carousel-wrapper > .left-btn");
const carouselRightBtn = document.querySelector(
  ".carousel-wrapper > .right-btn"
);
const firstSlide = document.querySelector(".img-list:nth-child(1)");
const lastSlide = document.querySelector(".img-list:nth-child(5)");
const firstStatus = document.querySelector(
  ".carousel-wrapper .status:nth-child(1)"
);
const lastStatus = document.querySelector(
  ".carousel-wrapper .status:nth-child(5)"
);
const statusBox = document.querySelector(".carousel-wrapper .status-box");
const playBtn = document.querySelector(".carousel-wrapper .play");
const pauseBtn = document.querySelector(".carousel-wrapper .pause");

// 함수 섹션
// 사이트맵을 보여주는 것과 관련 있는 함수
const handleNavUlMouseover = (event) => {
  sitemapBlock.style.display = "flex";
};

// 사이트맵을 사라지게 하는 함수
const handleNavUlMouseoverMouseleave = (event) => {
  sitemapBlock.style.display = "none";
};

// Carousel 메뉴에서 인터랙션을 가능하게 해주는 함수
const handleSlideRightBtn = (event) => {
  const currentSlide = document.querySelector(".showing");
  const currentStatus = document.querySelector(".checked");
  if (currentSlide && currentStatus) {
    const nextSlide = currentSlide.nextElementSibling;
    const nextStatus = currentStatus.nextElementSibling;
    currentSlide.classList.remove("showing");
    currentStatus.classList.remove("checked");
    !!nextSlide && nextSlide !== (carouselRightBtn || carouselLeftBtn)
      ? nextSlide.classList.add("showing")
      : firstSlide.classList.add("showing");
    !!nextStatus && nextStatus !== (playBtn || pauseBtn)
      ? nextStatus.classList.add("checked")
      : firstStatus.classList.add("checked");
  }
};

const handleSlideLeftBtn = (event) => {
  const currentSlide = document.querySelector(".showing");
  const currentStatus = document.querySelector(".checked");
  if (currentSlide && currentStatus) {
    const prevSlide = currentSlide.previousElementSibling;
    const prevStatus = currentStatus.previousElementSibling;
    currentSlide.classList.remove("showing");
    currentStatus.classList.remove("checked");
    // 버튼클릭과 관련
    !!prevSlide && prevSlide !== (carouselLeftBtn || carouselRightBtn)
      ? prevSlide.classList.add("showing")
      : lastSlide.classList.add("showing");
    // 상태 알림과 관련
    !!prevStatus && prevStatus !== (playBtn || pauseBtn)
      ? prevStatus.classList.add("checked")
      : lastStatus.classList.add("checked");
  }
};

// 20210331, 플레이버튼과 퍼즈버튼을 토글하는 함수를 만들던 중 작업 종료
const togglePlayAndPause = (event) => {
  let play;
  console.log(event.target);
  switch (event.target.className) {
    case "":
      play = "null class";
      break;
    case "fa-play":
      play = "fa-play class";
      break;
    case "play":
      play = "play class";
      break;
  }
  console.log(play);
};

// 이벤트 핸들러 섹션
navUl.addEventListener("mouseover", handleNavUlMouseover);

sitemapBlock.addEventListener("mouseleave", handleNavUlMouseoverMouseleave);

// Carousel 메뉴의 이벤트 핸들러
carouselRightBtn.addEventListener("click", handleSlideRightBtn);
carouselLeftBtn.addEventListener("click", handleSlideLeftBtn);

// 리사이즈시 Carousel Wrapper의 height를 조정해주는 이벤트 핸들러
window.addEventListener("resize", () => {
  carouselWrapper.style.height = `${carouselImg.height}px`;
});

statusBox.addEventListener("click", togglePlayAndPause);

// Carousel 메뉴에서 자동으로 넘어가는 기능을 끄고 켜는 토글러
const moveToNextSlide = setInterval(handleSlideRightBtn, 5000);
const stopNextSlide = clearInterval(moveToNextSlide);
