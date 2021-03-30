// 글로벌 변수 섹션
// Nav Variables
const navUl = document.querySelector(".nav__list");
const firstSlide = document.querySelector(".img-list:nth-child(1)");
const lastSlide = document.querySelector(".img-list:nth-child(5)");

const carouselWrapper = document.querySelector(".carousel-wrapper");
const carouselImg = document.querySelector(".img-box > img");
const carouselLeftBtn = document.querySelector(".carousel-wrapper > .left-btn");
const carouselRightBtn = document.querySelector(
  ".carousel-wrapper > .right-btn"
);

// Sitemap Variables
const sitemapBlock = document.querySelector(".header__sitemap");

// 함수 섹션
// 사이트맵을 보여주는 것과 관련 있는 함수
const handleNavUlMouseover = (event) => {
  sitemapBlock.style.display = "flex";
};

// Carousel 메뉴에서 인터랙션을 가능하게 해주는 함수
const handleSlideRightBtn = (event) => {
  const currentSlide = document.querySelector(".showing");
  if (currentSlide) {
    const nextSlide = currentSlide.nextElementSibling;
    currentSlide.classList.remove("showing");
    !!nextSlide &&
    nextSlide !== carouselRightBtn &&
    nextSlide !== carouselLeftBtn
      ? nextSlide.classList.add("showing")
      : firstSlide.classList.add("showing");
  }
};

const handleSlideLeftBtn = (event) => {
  const currentSlide = document.querySelector(".showing");
  if (currentSlide) {
    const prevSlide = currentSlide.previousElementSibling;
    currentSlide.classList.remove("showing");
    !!prevSlide &&
    prevSlide !== carouselLeftBtn &&
    prevSlide !== carouselRightBtn
      ? prevSlide.classList.add("showing")
      : lastSlide.classList.add("showing");
  }
};

const handleNavUlMouseoverMouseleave = (event) => {
  sitemapBlock.style.display = "none";
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
