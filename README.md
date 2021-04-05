# 삼성전자서비스 홈페이지 클론

*<a href="https://www.samsungsvc.co.kr/" target='_blank'>원본 홈페이</a>*

### 0. 목표로 삼은 부분

- 시맨틱한 마크업을 통해 기본적인 마크업이 가능하다는 것을 보여주기
- Flex를 이용해 기본적인 반응형 웹사이트를 구현하기
- Carousel 원리로 배너를 구현하고 setInterval와 clearInterval를 이용해 기본적인 동적 처리 구현하기
- Tab 키만 이용해도 전체적인 웹페이지 서핑이 가능하도록 구현해 웹접근성 높이기
- NVDA 스크린리더를 활용해 웹사이트를 이용해보고 설명이 부족한 부분에 ARIA를 사용해 웹접근성 높이기

### 1. 특징 및 기능

- 가장 기본적인 웹사이트를 시맨틱하게 구현해 프론트앤드의 기본인 HTML과 CSS 마크업을 볼 수 있다.
- 흔하게 사용되는 Carousel 메뉴나, 간단한 인터랙션을 추가해 유저의 편리함을 개선함
- Flex로 반응형 레이아웃을 구성함
- Tab 키만으로도 웹사이트를 이용하도록 구현해 웹접근성을 높임
- 스크린리더를 사용해보고 ARIA를 활용해 웹접근성을 높임

### 2. 사용 스택

해당 프로젝트는 **HTML**, **CSS**, **Vanila-Javascript**를 사용해서 만들었습니다.

### 3. 프로젝트 스크린샷

#### 3.1 전체 페이지

<p align="center">
<img src="" width="80%">
</p>

#### 3.2 Carousel 배너

|          Before          |          After           |
| :----------------------: | :----------------------: |
| <img src="" width="90%"> | <img src="" width="90%"> |

#### 3.3 아이콘 인터렉션

| Icon Interaction | Local Storage |
| :--------------: | :-----------: |
|   <img src="">   |

#### 3.4 Tab Index를 사용해 탭 이용 서핑 시 사용감을 개선함

<p align="center">
  <img src="" width="50%">
</p>

#### 3.5 ARIA를 사용해 스크린리더 사용 시 웹접근성을 개선함

### 4. 피드백 및 리뷰

#### 4.1 잘한 점

- 시멘틱하게 마크업을 하려고 노력해 최대한 의미적으로 부합하는 태그를 사용한 점
- 자바스크립트 코드에 주석을 사용해 설명을 자세히해 가독성을 높인 점
- 자바스크립트 코드에 변수, 함수, 이벤트 섹션으로 3분할하고 코딩해 모듈화하거나 클래스별로 분류하기에는 많지 않은 코드의 가독성을 높인 점
- 탭을 이용해 웹서핑이 가능하도록 구현해 웹접근성을 개선한 점
- 스크린리더를 사용해보고 ARIA를 사용해 웹접근성을 개선한 점

#### 4.2 아쉬운 점

- 네비게이션의 인터랙션을 구현할 때 탭으로 웹사이트를 이용하는 부분을 크게 고려하지 않아 자연스러운 이동이 가능하지 않았던 점
- 궁금하신 제품 섹션에서 Flex 레이아웃을 잡을 때 7개씩 고정되게 구현하는 부분에 어려움을 겪었던 부분을 통해 Flex 레이아웃을 잡는 방법에 대해 공부할 수 있는 계기가 됨
