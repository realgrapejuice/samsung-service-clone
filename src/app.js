// 글로벌 변수 섹션
// Nav Variables
const navUl = document.querySelector(".nav__list");

// Sitemap Variables
const sitemapBlock = document.querySelector(".header__sitemap");

// 함수 섹션
const handleNavUlMouseover = (event) => {
  sitemapBlock.style.display = "flex";
};

const handleNavUlMouseoverMouseleave = (event) => {
  sitemapBlock.style.display = "none";
};

// 이벤트 핸들러 섹션
navUl.addEventListener("mouseover", handleNavUlMouseover);

sitemapBlock.addEventListener("mouseleave", handleNavUlMouseoverMouseleave);
