// 글로벌 변수 섹션
// Nav Variables
const navUl = document.querySelector(".nav__list");
const navItem = document.querySelectorAll(".nav__list-item");

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

// Carousel에서 clearInterval를 사용하기 위한 변수
let playTimer;

// 페이지 최상단으로 이동시키기 위해 사용되는 변수들
// Top-Btn
const moveToTopBtn = document.querySelector(".top-btn");
const carouselHeight = carouselWrapper.getBoundingClientRect().height;
console.log(carouselHeight);

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
    // 버튼클릭과 관련
    !!nextSlide && nextSlide !== (carouselRightBtn && carouselLeftBtn)
      ? nextSlide.classList.add("showing")
      : firstSlide.classList.add("showing");
    // 상태 알림과 관련
    !!nextStatus && nextStatus !== (playBtn || pauseBtn)
      ? nextStatus.classList.add("checked")
      : firstStatus.classList.add("checked");
  }
};

const handleWrapperHeight = (event) => {
  carouselWrapper.style.height = `${carouselImg.height}px`;
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
    !!prevSlide && prevSlide !== (carouselLeftBtn && carouselRightBtn)
      ? prevSlide.classList.add("showing")
      : lastSlide.classList.add("showing");
    // 상태 알림과 관련
    !!prevStatus && prevStatus !== (playBtn || pauseBtn)
      ? prevStatus.classList.add("checked")
      : lastStatus.classList.add("checked");
  }
};

// 플레이버튼과 퍼즈버튼을 클릭하면 버튼을 토글해주고, 타이머함수를 실행시켜주는 함수
const togglePlayAndPause = (event) => {
  playBtn.classList.toggle("is-active");
  pauseBtn.classList.toggle("is-active");
  if (pauseBtn.classList.contains("is-active")) {
    playTimer = setInterval(handleSlideRightBtn, 5000);
  }
  if (playBtn.classList.contains("is-active")) {
    clearInterval(playTimer);
  }
};

const hideMoveToTopBtn = () => {
  if (window.scrollY > carouselHeight / 2) {
    moveToTopBtn.classList.add("visible");
  } else {
    moveToTopBtn.classList.remove("visible");
  }
};

const moveToTop = () => {
  window.scrollTo(0, 0);
};

// 이벤트 핸들러 섹션
navUl.addEventListener("mouseover", handleNavUlMouseover);
navItem.forEach((element) => {
  element.addEventListener("submit", (event) => {
    console.log(event);
  });
});

sitemapBlock.addEventListener("mouseleave", handleNavUlMouseoverMouseleave);

// Carousel 메뉴의 이벤트 핸들러
carouselRightBtn.addEventListener("click", handleSlideRightBtn);
carouselLeftBtn.addEventListener("click", handleSlideLeftBtn);

// 리사이즈시 Carousel Wrapper의 height를 조정해주는 이벤트 핸들러
window.addEventListener("resize", handleWrapperHeight);

playBtn.addEventListener("click", togglePlayAndPause);
pauseBtn.addEventListener("click", togglePlayAndPause);

// Carousel 메뉴에서 자동으로 넘어가는 기능을 끄고 켜는 토글러
playTimer = setInterval(handleSlideRightBtn, 5000);

// 페이지 최상단으로 이동시켜주는 이벤트 핸들러
moveToTopBtn.addEventListener("click", moveToTop);
document.addEventListener("scroll", hideMoveToTopBtn);
