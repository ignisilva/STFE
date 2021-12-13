# 초격차 정리

## Part 1. HTML/CSS/JS

### 개요

#### 웹앱 동작원리

1. 클라 URL을 통해 서버에 request
2. 서버 request에 대해 html만 response
3. 클라 HTML 확인 후, script/img 태그 등을 읽고 서버에 재요청
4. 서버 추가 응답(css, js, images...)

#### 웹표준 / 브라우저

##### 웹표준?

웹에서 사용되는 표준 기술이나 규칙  
W3C의 표준화 제정단계의 '권고안(REC)'에 해당하는 기술을 의미

W3C의 표준화 제정단계?  
초안(WD) / 후보 권고안(CR) / 제안 권고안(PR) / 권고안(REC)

##### 브라우저

크로스 브라우징?

여러 브라우저에서 동일한 사용자 경험을 줄 수 있도록 제작하는 기술, 방법

용어 정리  
window: 브라우저 창 전체  
viewport: application이 보이는 영역

브라우저가 제공하는 것들

- 브라우저 인터페이스
- 랜더링엔진
  - Parsing
    - Token 파싱
  - DOM
    - HTML 구문 분석
  - CSSOM(Css Object Model)
    - 브라우저 기본 CSS + 사용자 CSS 고려해서 CSS 분석
  - Render tree
    - 실제로 보여야 할 것만 Render tree에 추가
  - Layout
    - Render tree를 기준으로 상자의 위치 및 크기를 계산 하고 영역 놓기
    - BFC(Block Formatted Context)
      - 중요
  - Paint
    - Layout위 pixel에 색을 입히는 단계
- JS 엔진
- OS 공통 UI
- 통신
- Data 저장

#### 웹에서 사용하는 이미지(Bitmap / Vector)

비트맵(=래스터)

- 정교하고 다양한 색상 표현
- 확대/축소 시 계단 현상, 품질 저하
- 종류
  - JPG: 손실 압축
  - PNG: 비손실 압축, 투명도 지원
  - GIF: 비손실 압축, 움짤/애니메이션
  - WEBP: 구글 개발, 손실/비손실 선택 압축, 애니메이션 지원, 투명도 지원

벡터

- 정교한 이미지 및 색상 표현 어려움
- 확대/축소 시 자유로움, 용량 변화 X
- 종류
  - SVG: 마크업 언어 기반 벡터 표현, 해상도 영향 X, css/js로 제어 가능

#### 특수 기호

`: 벡틱, 그레이브  
~: 틸드  
@: 앳 (at sign)  
^: 캐럿  
&: 앰퍼센드  
\*: 에스터리스크  
-: 하이픈  
\_: 로대시  
|: 버티컬 바

#### 오픈소스 라이선스

Apache License

- 아파치 재단에서 자체 소프트웨어에 적용하기 위해 만든 라이선스
- 개인적/상업적 이용, 배포, 수정, 특허 신청 가능

MIT License

- MIT 공대에서 학생들을 위해 개발한 라이선스
- 개인 소스에 해당 라이선스 사용 명시 필수
- 이외 사용 제약 없음

BSD License

- BSD 대학에서 학생들을 위해 개발한 라이선스
- 개인 소스에 해당 라이선스 사용 명시 필수
- 이외 사용 제약 없음

Beerware

- 오픈소스 개발자에게 맥주를 사줘야하는 라이선스

### VS code

#### 확장

Auto Rename Tag

- 앞쪽 태그 명을 바꾸면, 뒤쪽 태그명도 같이 바뀌는 기능 제공

Live Server

- html 파일을 localhost:5500으로 열어줌

#### 자주 쓰는 단축키

ctrl + B: 사이드바 open/close

ctrl + p: 이름으로 파일 검색 (현 root 폴더 내에서)

ctrl + F: 키워드 위치 검색 (현 파일 내에서)

ctrl + pageUp/Down: 열려있는 페이지 이동

ctrl + \: 창 분할

#### 공백 크기 설정

1. ctrl + shift + p, 설정 검색
2. tabl size 검색
3. 4->2 변경 후, 저장

### 살펴보기

#### Doctype(DTD)

DTD: Document Type Definition

<\!Doctype html> 태그

- 문서의 HTML 버전 지정
- HTML5 (표준)
- 웹 브라우저가 어떤 버전의 HTML 해석 방식으로 페이지를 분석할 것인지 알리는 용도

#### HTML / HEAD / BODY

<html\> 태그

- 문서 전체 범위 표현

<head\> 태그

- 보이지 않는 부분
- 문서 정보 범위 표현
- 문서 정보?
  - 웹 페이지 제목
  - 웹 페이지 설명
  - 웹 페이지 스타일
  - ...

<body\>

- 문서 구조 범위 표현
- 보이는 부분

#### CSS / JS 연결

```
<html>
  <head>
    ...
    // CSS 연결
    <link rel="stylesheet" href="./main.css">
    // JS 연결
    <script src="./main.js"/>
  </head>
  <body>
    ...
  </body>
</html>
```

#### 정보 의미 태그 정리

<title\>

- 문서 제목 정의

<link\>

- 외부 문서 연결
- properties
  - rel: 가져올 문서와의 관계 (stylesheet, icon ...)
  - href: 가져올 문서의 경로

<sciript\>

- 내부에 스크립트 코드 write 기능
- 외부 스크립트 파일 read 기능
  - properties
    - src: 가져올 스크립트 문서의 경로
    - defer: HTML 문서 분석 이후 js 적용 설정

<meta\>

- HTML 문서의 제작자, 내용, 키워드 등 정보를 검색엔진이나 브라우저에 제공
- properties
  - charset: 문자 인코딩 방식(utf-8 ...)
  - name: 정보의 종류(author, viewport ...)
  - content: 정보의 값(authorName, width=device-width, initial-scale=1.0 ...)

#### 이미지 출력

<img\>

- 이미지 출력 태그
- properties
  - src: 가져올 이미지 주소(파일 경로 또는 원본이 저장된 인터넷 주소)
  - alt: 이미지 대체 텍스트

#### 상대 경로 / 절대 경로

상대 경로

- 기존 파일을 기준으로 불러오려는 파일의 위치
  - ./ (생략 가능)
  - ../

절대 경로

- root 경로를 기점으로 불러오려는 파일의 위치
- root 경로는 상황에 따라 다름
  - http(s)
  - /

#### 페이지 링크

<a\>

- 하이퍼링크 태그
- properties
  - href: 이동하려는 페이지의 주소'

### 웹에서 시작하기

#### Codepen 소개

- codepen.io
- 환경설정이나 파일 생성없이 html/css/js로 된 페이지를 생성 및 테스트 가능한 front 샌드박스 툴
  - html: body태그 내부 부분
  - css: html 연결된 css 파일
  - js: html 연결된 js 파일

#### 브라우저 스타일 초기화

- 크로스 브라우징을 위해, reset.css를 CDN 방식으로 적용
- min(난독화 또는 경량화) type 적용

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">

or

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

### HTML 개요

#### 빈(empty) 태그

- 종료 태그없이 시작 태그만 있는 태그
- <태그> or <태그/> 로 표현됨
- <태그>: HTML 1~4 버전에서 사용되던 빈 태그 표현
- <태그 />: xHTML/HTML5 버전에서 사용되는 빈 태그 표현

#### 인라인과 블록

인라인 요소

- 수평으로 콘텐츠가 쌓임
- 인라인 요소 내부에 블록 요소 포함 불가
- <span\>
  - 콘텐츠 크기만큼 영역 표현(콘텐츠 사이즈에 따라 자동 조절)
  - margin / padding 사용시, 좌우 옵션 설정 불가

블록

- 수직으로 콘텐츠가 쌓임
- <div\>
  - 가로: 부모의 크기만큼 자동으로 조절 (default)
  - 세로: 포함한 콘텐츠의 크기만큼 자동으로 조절 (default)

### HTML 핵심

#### 핵심 요소 정리

<div\> / <hn\> / <p\> / <img\> / <ul\>, <ol\>, <li\> / <a\> / <input\> / <table\>, <tr\>, <th\>, <td\>

#### 주석과 전역 속성

주석

```
// HTML 주석
<!-- -->

// CSS 주석
/* */
```

전역 속성

- class: 요소를 지칭하는 중복 가능한 이름
- id: 요소를 지칭하는 고유한 이름
- data: 요소에 데이터를 지정
  - data-이름="데이터" 형태로 사용

### CSS 개요

#### CSS 기본 문법

```
선택자 {
  속성: 값;
  ...
}
```

#### CSS 선언 방식

내장

```
<head>
  ...
  <style>
    div {
      ...
    }
  </style>
</head>
```

인라인

```
<div style="..."></div>
```

링크

- 병렬로 파일 load

```
<head>
  ...
  <link rel="stylesheet" href="~.css">
</head>
```

@import

- css파일에서 다른 css 파일을 import 할 때 사용
- 직렬로 파일 load

```
// main.css
@import url("./box.css");

div {
  color: red;
  margin: 20px;
}

// box.css
.box {
  background-color: red;
  padding: 20px;
}
```

#### CSS 선택자

기본 선택자

- \*: 전체 선택자
- n: 태그 선택자 (태그명이 n인 태그만 적용)
- .n: class 선택자 (class명이 n인 태그만 적용)
- #n: id 선택자 (id명이 n인 태그만 적용)

복합 선택자

- n.m: 일치 선택자 (태그명n, class명 m만 적용)
- n>.m: 자식 선택자 (태그명n의 자식 중, class명 m만 적용)
- n .m: 하위 선택자 (태그명n의 후손 중, class명 m만 적용)
- .n + m: 인접 형제 선택자(class명 n인 요소의 다음 형제 중, 태그명 m만 적용)
- .n ~ m: 일반 형제 선택자(class명 n, 태그명 m인 형제 모두 적용)

가상 클래스 선택자

- css에서 동작 제어시 사용
- 기본 또는 복합 선택자와 함께 사용
- ':' 사용
- hover: 마우스 올라가 있는 동안 적용
- active: 마우스를 클릭하고 있는 동안 적용
- focus: 포커스 되면 적용
- first-child: 형제 요소중 첫째라면 적용
- last-child: 형제 요소중 마지막이라면 적용
- nth-child(m): 형제 요소중 m번째면 적용(m은 0에서 시작)
- not(n): n요소가 아니라면 선택

가상 요소 선택자

- '::' 사용
- before: 선택 요소의 내부 앞에 내용 삽입
- after: 선택 요소의 내부 뒤에 내용 삽입

```
.box::before {
  content: "앞";
}

.box::after {
  content: "뒤";
}
```

속성 선택자

- 해당 속성을 가진 태그에 적용

```
[속성명] {
  ...
}

[속성명="속성값"] {
  ...
}
```

#### 스타일 상속

Default 상속되는 CSS 속성들

- 모두 글자/문자 관련 속성

강제 상속?

- 실제 상속되지 않는 부분을 강제로 상속되게 하는 방법

```
// 강제 상속 예시)
.parent {
  width: 300px;
  height: 200px;
  background-color: orange;
}

.child {
  width: 100px;
  height: inherit;
  background-color: inherit;
}
```

#### 선택자 우선순위

점수가 높을 수록 우선순위 높음  
점수가 같을때에는 가장 마지막에 해석된 선언 우선

- !important 속성: 무한대 점수
- inline 선언: 1000점
- id 선택자: 100점
- class 선택자: 10점
- 태그 선택자: 1점
- 전체 선택자: 0점
- 상속: 점수 X

### CSS 속성

CSS로 제어할 수 있는 HTML 요소들

#### 기본 단위

px: 픽셀

%: 상대적 백분율

em: 요소의 글꼴 크기

rem: 루트 요소(html)의 글꼴 크기

vw: 뷰포트의 가로 너비 백분율

vh: 뷰포트의 세로 너비 백분율

#### 박스 모델

너비

- width / height
  - property
    - auto: 브라우저가 계산하는 default값
    - px, em, vw 등 단위
- max-width / max-height
  - property
    - none: 최대 너비 제한 없음
    - auto: 0
    - px, em, vw 등 단위

외부 여백

- margin

  - 음수 사용 가능
  - property
    - 0: 외부 여백 없음
    - auto: 브라우저가 여백을 계산(블록 요소의 가운데 정렬에 활용)
    - px, em, vw 등 단위
    - %: 부모 요소의 가로 너비에 대한 비율로 지정
  - ```
      // 상하좌우 10px
      margin: 10px;

      // 상하 10px, 좌우 20px
      margin: 10px; 20px;

      // 상 10px, 좌우 20px, 하 30px
      margin: 10px; 20px; 30px;

      // 상 10px, 우 20px, 하 30px, 좌 40px
      margin: 10px; 20px; 30px; 40px;

      // 각 방향에 대한 margin 설정
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 10px;
      margin-right: 10px;
    ```

내부 여백

- padding

  - property
    - 0: 내부 여백 없음
    - px, em, vw 등 단위
    - %: 부모 요소의 가로 너비에 대한 비율로 지정
  - ```
      // 상하좌우 10px
      padding: 10px;

      // 상하 10px, 좌우 20px
      padding: 10px; 20px;

      // 상 10px, 좌우 20px, 하 30px
      padding: 10px; 20px; 30px;

      // 상 10px, 우 20px, 하 30px, 좌 40px
      padding: 10px; 20px; 30px; 40px;

      // 각 방향에 대한 padding 설정
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 10px;
      padding-right: 10px;
    ```

테두리 선 및 색상 설정

- border

  - property

    - border-width: 선의 굵기

      - default: medium
      - px, em, % 등 단위
      - ```
          // 상하좌우 10px
          border-width: 10px; 20px;

          // 상하 10px, 좌우 20px
          border-width: 10px; 20px;

          // 상 10px, 좌우 20px, 하 30px
          border-width: 10px; 20px; 30px;

          // 상 10px, 우 20px, 하 30px, 좌 40px
          border-width: 10px; 20px; 30px; 40px;
        ```

    - border-style: 선의 스타일
      - default: none
      - solid: 실선
      - dotted: 점선
      - dashed: 파선
      - double: 두 줄 선
      - groove: 홈이 파인 모양
      - ridge: 솟은 모양
      - inset: 요소 전체가 들어간 모양
      - outset: 요소 전체가 나온 모양
    - border-color: 선의 색상
      - default: black
      - red, green, blue 등 / rgb(~) / rgba(~) / #~
      - transparent: 투명 (투명선 만들기)

테두리 선 둥글게

- border-radius
  - property
    - 0: 둥글게 없음
    - px, em, vw 등 단위로 지정
    - top, bottom, left, right 설정 가능

크기 계산 기준 지정

- box-sizing
  - property
    - content-box: 요소의 내용으로 크기 계산(default)
    - border-box: 요소의 내용 + padding + border로 크기 계산(padding 및 border 요소에 구애받지 않고, width와 height의 영향만 받고 싶다면 사용)

요소의 크기 이상으로 내용이 넘쳤을때, 보여지는 부분을 제어

- overflow
  - property
    - visible: 넘친 내용을 그대로 보여줌 (default)
    - hidden: 넘친 내용 잘라냄
    - scroll: 넘친 내용있으면 스크롤바 생성(x, y축 전체 적용)
    - auto: 넘친 내용있으면 스크롤바 생성(x, y축 중 넘친 축만 적용)
- overflow-x
- overflow-y

화면 출력 설정

- display
  - property
    - block: 상자(레이아웃) 요소 (각 요소가 이미 지정된 값들이 있음)
    - inline: 글자 요소 (각 요소가 이미 지정된 값들이 있음)
    - inline-block: 글자 + 상자 요소 (각 요소가 이미 지정된 값들이 있음)
    - flex: 플렉스 설정 (1차원 레이아웃)
    - grid: 그리그 (2차원 레이아웃)
    - none: 출력 없음(화면에서 사라짐)

투명도 설정

- opacity
  - property
    - 1: 불투명
    - 0~1: 투명도를 조절하는 소수점 숫자, 0에 가까울수록 투명해짐

#### 글꼴 문자

font-size

- 글자 사이즈 설정
- property
  - 16px: defalut
  - px, em, rem 등 단위

font-weight

- 글자 두께 설정
- property
  - normal, 400: default
  - bold, 700: 두껍게
  - 100 ~ 900: 100 (얇게) <-> 900 (두껍게)

font-style

- 글자 기울기 설정
- property
  - normal: 기울기 없음
  - italic: 이텔릭체

font-family

- 글씨체 설정
- property
  - serif: 바탕체 계열
  - sans-serif: 고딕체 계열
  - monospace: 고정너비 글꼴 계열
  - cursive: 필기체 계열
  - fantasy: 장식 글꼴 계열

```
// 글꼴 여러개를 넣는 이유는 사용자의 컴퓨터에 해당 서체가 없을 경우를 대비하기 위함
// 글꼴의 적용 우선 순위는 앞 -> 뒤 순서
font-family: "글꼴1", "글꼴2", ...
```

line-height

- 한 줄에 대한 높이 설정
- property
  - normal: 브라우저 기본 정의
  - 숫자값: 요소의 글꼴 크기의 배수로 지정 (권장)
  - px, em, rem 등 단위

color

- 글자 색상 변경
- property
  - black: default
  - red, orange ...
  - rgb, rgba, #~

text-align

- 문자 정렬 방식
- property
  - left: defalut
  - right: 오른쪽 정렬
  - center: 가운데 정렬

text-decoration

- 문자 장식(선)
- property
  - none: default
  - underline: 밑줄
  - overline: 윗줄
  - line-through: 중앙선

text-indent

- 문장 들여쓰기
- 음수 값 가능(이 경우, 안쪽이 아니라 바깥쪽으로 들여쓰기 됨)
- property
  - 0: defalut
  - px, em, rem 등 단위

#### 배경

background-color

- 배경 색상 설정
- property
  - transparent: default, 투명함
  - 색상 값

background-image

- 배경 이미지 삽입
- property
  - none: 이미지 없음
  - url("경로"): 이미지 경로

background-repeat

- 배경 이미지 반복
- property
  - repeat: default, 이미지 수직, 수평 반복
  - repeat-x: 이미지를 수평 반복
  - repeat-y: 이미지를 수직 반복
  - no-repeat: 이미지 반복 없음

background-position

- 배경 이미지 위치 설정
- property
  - top, bottom, left, right, center
  - px, em, rem 등 단위

```
// 우상단
background-position: top right;

// 중앙
background-position: center;

// x: 100px, y: 300px 좌표에서 이미지 생성
background-position: 100px 300px;
```

background-size

- 배경 이미지 크기
  - property
    - auto: default, 이미지 실제 크기
    - px, em, rem 등 단위
    - cover: 비율 유지, x or y 중 긴 너비에 맞춤
    - contain: 비율 유지, x or y 중 짧은 너비에 맞춤

background-attachment

- 배경 이미지 스크롤 속성
- property
  - scroll: default, 이미지 요소를 따라서 같이 스크롤
  - fixed: 이미지가 뷰포트에 고정, 스크롤 X

Object-fit: cover;

- block 요소에 넣어진 이미지가 중앙 정렬이 필요할 때

#### 배치

position

- 요소 위치 지정
- property
  - static: default, 기준 없음
  - relative: 요소 자신을 기준 (위치상 부모 요소로 설정할 때 많이 사용)
  - absolute: 위치상 부모 요소 기준 (부모 요소에 relative가 없다면, viewport을 기준으로 잡음)
  - fixed: 뷰포트 기준
- position에 따른 display요소 변경
  - absolute, fixed 요소는 display가 block으로 변경됨
  - absolute, fixed 요소는 일반적인 block요소와는 다르게 width가 최소한의 값을 사용하도록 바뀜

top, bottom, left, right

- 요소의 방향별 거리 지정
- property
  - auto: default
  - px, em, rem 등 단위

z-index

- 요소 쌓임 순서 지정
- property
  - auto: 0
  - 숫자값: 숫자값 높을 수록 위에 쌓임 (너무 높은 숫자를 쓰지않도록 조심해서 다룰 것)

요소 쌓임 순서

- 어떤 요소가 사용자와 더 가깝게 있는지 결정

```
1) 요소에 position 값이 있는 경우 위에 쌓임
2) 1번이 같다면, z-index값 비교, z-index 값이 클수록 위에 쌓임
3) 1번 2번이 같다면, HTML로 봤을때, 나중에 생성된 요소일수록 위에 쌓임
```

#### 플렉스(정렬)

Flex Container

- flex block 요소
- flex container에 영향을 끼치는 property
  - display
    - flex: 블록 요소 flex container 생성
    - inline-felx: 인라인 요소 felx container 생성
  - flex-flow
  - flex-direction
    - 요소가 쌓이는 방향 기준
    - row: default, 좌 -> 우
    - row-reverse: 우 -> 좌
  - flex-wrap
    - 넘치는 요소에 대한 줄바꿈 여부
    - nowrap: 줄바꿈 없음
    - wrap: 여러 줄로 묶음
  - justify-content
    - 주 축 정렬 방법
    - felx-start: default, 시작점 정렬
    - felx-end: 끝점 정렬
    - center: 가운데 정렬
  - align-content
    - 교차 축 정렬 방법
    - stretch: default, 시작점 정렬
    - felx-start: 시작점 정렬
    - felx-end: 끝점 정렬
    - center: 가운데 정렬
  - align-items
    - 교차 축의 한 줄에 대한 정렬 방법
    - stretch: flex items를 교차 축으로 늘림
    - felx-start: flex items를 각 줄 시작점 정렬
    - felx-end: flex items를 각 줄 끝점 정렬
    - center: flex items를 각 줄 가운데 정렬

Flex Items

- flex의 자식 요소들
- felx items에 영향을 끼치는 property
  - order
    - flex item 정렬 순서
    - 0: default, 순서 없음
    - 숫자: 숫자가 작을수록 먼저 (음수 가능)
  - flex
  - flex-grow
    - 너비 증가 비율
    - 0: default, 증가 비율 없음
    - 숫자: 증가 비율, flex-grow가 0인 요소를 제외하고 나머지 끼리 flex-grow를 통해 container의 너비에서 x:y:... 의 비율로 증가
  - flex-shrink
    - 너비 감소 비율
    - 1: default, Flex Container의 너비에 따라 감소 적용
    - 숫자: 감소 비율 (보통 0 사용 -> 아이템이 부모의 크기를 고려하지 않고 각각의 크기 원래 비율을 유지함)
  - flex-basis
    - Flex Items에 해당하는 요소의 기본 너비
    - flex-grow와 함께 사용, item 내부 요소의 공간 영역을 구애받지 않고, flex-grow 비율을 맞추기 위해 flex-basis: 0 사용
    - auto: 요소의 Content 너비
    - px, em, rem 등 단위 (보통 0으로 사용, )
  - align-self

#### 전환

transition

- 전환 효과를 지정
- transition: 속성명 지속시간 타이밍함수 대기시간;
  - transition-property (속성명)
    - 전환 효과를 받는 속성 지정
    - all: defalut, 모든 속성에 적용
    - 속성명: 전환 효과를 사용할 속성명 명시
  - transition-duration (지속시간)
    - 전환 효과 시간 설정
    - 0s: default
    - ns: n시간 만큼 효과 발생
  - transition-timing-function (타이밍함수)
    - 전환 효과가 어떻게 보일지에 대한 타이밍함수 설정
    - ease: default, 느리게 - 빠르게 - 느리게
    - linear: 일정하게
    - ease-in: 느리게 - 빠르게
    - ease-out: 빠르게 - 느리게
    - ease-in-out: 느리게 - 빠르게 - 느리게
    - ref: [easing 기능 시각화 사이트](https://easings.net/ko)
  - transition-delay (대기시간)
    - 전환 효과가 몇 초 뒤에 시작할지 대기시간 설정
    - 0s: default
    - ns: n시간 후 전환효과 발생

```
// 가로 너비, 1초간, linear 방식으로, 0.2초 후에 전환 효과 발생
transition: width, 1s, linear, .2s

// 가로 너비, 1초간, linear 방식으로, 0.2초 후에 전환 효과 발생
// 높이 너비, 2초간, ease 방식으로, 대기시간 없이 전환 효과 발생
transition:
  width, 1s, linear, .2s;
  height, 2s;
```

#### 변환

transform

- 해당 요소에 변환 함수를 적용

```
transform: 변환함수1 변환함수2 변환함수3 ...;
```

- 사용 가능한 2D 변환 함수
  - translate(xpx, ypx)
    - x, y 값만큼 x, y 이동
  - translateX(xpx)
    - x 값만큼 x 이동
  - translateY(ypx)
    - y 값만큼 y 이동
  - scale(n) or scale(x, y)
    - n 비율로 가로 세로 증가 or 감소 (소수값)
    - 가로는 x 비율, 세로는 y 비율로 증가 or 감소 (소수값)
  - rotate(ndeg)
    - n각도 만큼 회전
  - skewX(ndeg)
    - 가로 방향으로 n각도 만큼 도형 찌그러트리기(평행사변형 생성)
  - skewY(ndeg)
    - 세로 방향으로 n각도 만큼 도형 찌그러트리기(평행사변형 생성)
- 사용 가능한 3D 변환 함수
  - perspective(npx)
    - 3D 적용시, 가장 먼저 적용되야하는 함수
    - 원근법 적용, n값이 높을수록 더 눕는 모양
    - 관찰 대상을 기준으로 적용
  - rotateX(ndeg)
    - x 축을 기준으로 n각도 만큼 회전
  - rotateY(ndeg)
    - y 축을 기준으로 n각도 만큼 회전

perspective

- 원근법 적용, n값이 높을수록 더 눕는 모양
- 해당 속성이 적용된 요소에 원근법 적용
- property
  - px 단위

backface-visibility

- 뒷면 숨김 여부
- property
  - visible: default, 뒷면 보임
  - hidden: 뒷면 숨김

#### 설명 못들은 기타 내용

띄움 / 애니메이션 / 그리드 / 다단 / 필터

### JS 선행

#### DOM API

DOM?  
Document Object Model 약자 (HTML의 내용 의미)

API?  
Application Programin Interface (제어시 사용하는 명령들)

#### 메소드 체이닝

함수를 연달아서 쓰는 것

### 스타벅스 토이 프로젝트

[스타벅스 git 링크](https://github.com/ParkYoungWoong/starbucks-vanilla-app)

#### 프로젝트 시작, 스타일 초기화, favicon

favicon

- favicon.ico은 루트 경로 위치
- favicon.png를 icon으로 쓸 경우
  - ```
      <link rel="icon" href="./favicon.png" />
    ```

reset.css 적용

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

main.css 적용

```
<link rel="stylesheet" href="./main.css" />
```

#### 오픈 그래프와 트위터 카드

오픈 그래프 (The Open Graph protocol)  
웹페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보 지정

```
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피전문점입니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

트위터 카드(Twitter Cards)  
트위터에서 내놓은 오픈 그래프와 유사한 프로토콜

```
<meta property="twitter:card" content="summary">
<meta property="twitter:site" content="Starbucks">
<meta property="twitter:title" content="Starbucks Coffee Korea">
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피전문점입니다.">
<meta property="twitter:image" content="./images/starbucks_seo.jpg">
<meta property="twitter:url" content="https://starbucks.co.kr">
```

#### Google Fonts

폰트는 생각보다 용량이 크므로, 남용하지 않을 것

Google Fonts에서 cdn 방식으로 원하는 폰트를 사이즈에 맞추어 가져올 것  
(현 프로젝트에서는 medium(400), bold(700)만 가져옴)

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
```

CSS로 font를 적용

```
body {
  font-family: 'Nanum Gothic', sans-serif;
}
```

#### Google Material Icons

Material icons 적용

```
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
```

#### 헤더와 드롭다운 메뉴

BEM? (Block Element Modifier)
클래스 속성의 작명법을 의미

```
요소__일부분
or
요소--상태
```

```
요소__일부분 예시)

<div class="container">
  <div class="name"></div>
  <div class="item">
    <div class="name">
  </div>
</div>

=> name 클래스의 중복 발생

<div class="container">
  <div class="container__name"></div>
  <div class="item">
    <div class="item__name">
  </div>
</div>
```

```
요소--상태 예시)

<div class="btn primary"></div>
<div class="btn success"></div>
<div class="btn error"></div>

<div class="btn btn--primary"></div>
<div class="btn btn--success"></div>
<div class="btn btn--error"></div>
```

lodash를 사용한 scroll 호출 제어
lodash?  
일반적인 프로그래밍 작업을위한 유틸리티 기능을 제공하는 JavaScript 라이브러리

```
CDN 방식
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

gsap을 사용한 애니메이션
gsap?  
애니메이션 라이브러리

```
cdn 방식
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js" integrity="sha512-eP6ippJojIKXKO8EPLtsUMS+/sAGHGo1UN/38swqZa1ypfcD4I0V/ac5G3VzaHfDaklFmQLEs51lhkkVaqg60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

#### 순차적 애니메이션

이미지에 문구가 있다면, 그 문구를 img 태그의 alt에 써주는 것이 좋다

#### 요소 슬라이드

Swipper  
수직 슬라이드 애니메이션 lib

```
CDN
<link
  rel="stylesheet"
  href="https://unpkg.com/swiper/swiper-bundle.min.css"
/>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
```

#### Youtube iframe API

[IFrame Player API?](https://developers.google.com/youtube/iframe_api_reference?hl=ko)  
YouTube 동영상을 제어 라이브러리

```
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

**onYouTubePlayerAPIReady** 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않습니다!
그리고 함수는 전역(Global) 등록해야 합니다!

[playerVars에 대한 더 많은 옵션](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters)

```
// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      }
    }
  });
}
```

#### 반복 애니메이션

gsap 이용

[반복 애니메이션에 대한 움직임 시각화 사이트](https://greensock.com/docs/v2/Easing)

#### 3D 애니메이션

3D backflip 애니메이션 구현을 위한 속성

- perspective
- backface-visibility
- transform ratate 0 or -180 deg
- position absolute

#### 스크롤 위치 계산 애니메이션

scrollMagic 라이브러리 사용

```
CDN
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

#### 다중요소 슬라이드

swiper 이용

#### 푸터

특수기호

- &copy;: &copy
- &lt;: <
- &gt;: >

[더 많은 특수기호 보기](https://dev.w3.org/html5/html-author/charref)

최상단으로 스크롤 이동  
gsap의 scrollToPlugin 기능 필요

```
CDN
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollToPlugin.min.js" integrity="sha512-eI+25yMAnyrpomQoYCqvHBmY4dLfqKWPnD4j8y0E3Js+yqpF26xncL4t81M1zxC+ISYfRoCN52rN/n0q2UIBZQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

### Starbucks 총정리

### Netlify 지속적 배포

## Part3. JS Essentials

### Node.js

NVM(Nodejs Version Manager)

- $ nvm ls: npm 버전 리스트
- $ nvm install VERSION: node 해당 버전 설치
- $ nvm use VERSION: node 해당 버전 선택
- $ nvm uninstall VERSION: node 해당 버전 삭제

NPM(Nodejs Package Manager)

- $ npm info PACKAGE_NAME: 패키지 정보 확인
- $ npm i PACKAGE_NAME(@PACKAGE_VERSION): (해당 버전으로) 패키지 의존성 설치
- $ npm i -D PACKAGE_NAME(@PACKAGE_VERSION): (해당 버전으로) 패키지 개발 의존성 설치

실행과 빌드

- $ npm i -D parcel-bundler
- package.json의 scripts에 적용

```
"scripts": {
  "dev": "parcel index.html",
  "build": "parcel build index.html",
}
```

유의적 버전(Semantic Version)

v(^)Major.Minor.Patch

- ^
  - 해당 패키지 재 인스톨시, Major 버전 안에서 가장 최신 버전으로 업데이트 허용
- Major
  - 기존 버전과 호환되지 않는 새로운 버전
- Minor
  - 기존 버전과 호환되는 새로운 기능 추가 버전
- Patch
  - 기존 버전과 호환되는 버그 및 오타 등 수정 버전

### JS 시작하기

#### data type

- string
- number
- boolean
- undefined
- null
- object
- list

#### 산술연산자

- 덧셈(+)
- 뺄셈(-)
- 곱셉(\*)
- 나눗셈(/)
- 모듈러(%)

#### 비교연산자

- a === b
- a !== b
- a == b
- a != b
- a \> b
- a \>= b
- a < b
- a <= b
- a && b
- a || b
- !a

#### 삼항 연산자

- 조건문 ? true 결과 : false 결과

#### 조건문 if else

```
if(조건문A) {
  // 조건문A true일시,
  ...
} else if(조건문B) {
  // 조건문B true일시,
  ...
} else {
  // 위의 모든 조건문에 부합할 시,
  ...
}
```

#### 조건문 switch

```
switch(변수) {
  case A:
    // 변수가 A와 같다면,
    ...
    break;
  case B:
    // 변수가 B와 같다면,
    ...
    break;
  default:
    // case중 맞는게 없다면,
    ...
    break;
}
```

#### 반복문 for

```
// n번 반복
for(let i=0; i<n; i++) {
  ...
  if(조건문) {
    // 조건문 true일시, for문 탈출
    break;
  }
  if(조건문) {
    // 조건문 true일시, 아래 로직 수행치 않고 for문 재수행
    continue;
  }
  ...
}
```

#### 형변환

```
// num to string
const num = 1;
console.log(typeof (num+""));

// string to num
const str = "1"
console.log(typeof (+str));

// true에 해당하는 값
true, {}, [], positive number, negatice number, string

// false에 해당하는 값
false, '', null, undefine, NaN, 0,
```

### JS 복습

#### 화살표 함수

아래의 함수들은 같은 기능

```
// 일반 함수
const foo = function (n) {
  ...
}

// 화살표 함수
const foo = (n) => {
  ...
  return ...
}

const foo = (n) => ({
  ...
})
```

#### IIFE

Immediately-Invoked Function Expression

```
// IIFE 형식
(function () {
  ...
})()

(function () {
  ...
}())
```

#### 호이스팅

- 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

- 활용: 함수를 코드 맨 아래에서 작성 (로직부를 구성할 때 방해받지 않기 위해)

#### 타이머 함수

- setTimeout(함수, 시간): 일정 시간 후, 함수 실행
- clearTimeout(): 설정된 timeout 함수 종료
- setInterver(함수, 시간): 시간 간격마다 함수 실행
- clearInterver(): 설정된 interver 함수 종료

#### 콜백(callback)

- 트리거 또는 이벤트 발생시, 처리할 함수를 의미

### JS 클래스

#### 생성자 함수(prototype)

- 클래스 생성시, 클래스 함수를 생성할 때 사용

```
function User(first, last) {
  this.firstName = first
  this.last = last
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}
```

#### this

- 일반 함수는 호출 위치에 따라 this 정의
- 화살표 함수는 자신이 선언된 함수 범위에서 this 정의

```
// ex 1
function User(name) {
  this.name = name;
}
User.prototype.normal = function () {
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}

const tester = new User('tester');
tester.normal();  // "tester"
tester.arrow();   // undefined

// ex 2
const timer = {
  name: "tester",
  timeout: function() {
    setTimeout(function () {
      console.log(this.name)
    }, 2000)
  }
}   // undefined

const timer = {
  name: "tester",
  timeout: function() {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}   // "tester"
```

#### ES6 Classes

```
// ES5
function User(first, last) {
  this.firstName = first
  this.last = last
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// ES6
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

#### 상속

```
class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}

class Car extends Vehicle {
  constructor(name, wheel, lisence) {
    super(name, wheel);
    this.lisence = lisence;
  }
}
```

## JS level up

### JS 데이터

#### String

- Properties

  - length : String 길이값 반환

- Methods
  - indexOf(n) : n과 일치하는 첫 인덱스 반환, 없으면 -1 반환
  - slice(n{, m}) : n부터 m까지 잘라내서 반환, m의 default값은 lastIndex / n이 음수라면 뒤에서부터 n개 문자열 잘라내기
  - match(reg) : reg에 일치하는 값들을 list로 반환
  - trim() : 앞뒤 공백 잘라내기

#### Number

- Methods
  - toFixed(n) : 소수점을 n자리까지 잘라내고 toString
  - parseInt(str) : 문자열을 int값으로 반환
  - parseFloat(str) : 문자열을 float값으로 반환
  - Math.abs(n) : n의 절대값 반환
  - Math.min(n, m, ...) : 가장 작은 값 반환
  - Math.max(n, m, ...) : 가장 큰 값 반환
  - Math.ceil(n) : n값 올림
  - Math.floor(n) : n값 내림
  - Math.round(n) : n값 반올림
  - Math.random() : 랜덤값 반환 (0~1)

#### Array

- properties
  - length : arr의 길이 값 반환
- Methods
  - find(조건식) : 조건식을 만족하는 첫번째 요소의 값 반환, 없다면 undefined
  - findIndex(조건식) : 조건식을 만족하는 첫번째 요소의 index 반환
  - includes(n) : list에 n이 있다면 true, 없다면 false 반환
  - concat(list) : concat 호출 list에 인자로 들어온 list를 이어 붙여서 반환
  - forEach((element, index, array) => {}) : list에 대한 반복문 실행, array는 호출한 list를 나타냄
  - map((element, index) => {}) : list에 대한 반복문 실행 후 반영 결과를 list로 반환
  - filter(조건식) : 조건식에 맞는 인자만 list로 반환
  - push(n) : list의 마지막에 n 추가
  - unshife(n) : list의 첫번째에 n 추가
  - pop() : list의 마지막에서 요소 삭제 후, 요소 값 반환
  - shift() : list의 첫번째 요소 삭제 후, 요소 값 반환
  - reverse() : list 뒤집기
  - splice(n, m) : n번쨰 인덱스에서 m번 만큼 요소 삭제

#### Object

- Methods
  - Object.assign(target, src) : src데이터를 target에 병합 후, 병합한 데이터를 반환
  - Object.keys(object) : object의 key값들을 list로 반환

#### 구조 분해 할당

```
const user = {
  name: "tester",
  age: 85,
}

const {
  name,     // "tester"
  age,      // 85
  email     // undefined
} = user;

const list = ['a','b'];
const [
  A,    // 'a'
  B,    // 'b'
  C,    // undefined
] = list;
```

#### 전개 연산자

```
// 일반적인 사용
const list = ['a','b','c'];
console.log(list);      // ['a','b','c']
console.log(...list);   // 'a' 'b' 'c'

// 매개변수 사용
function (a, b, ...c) {}  // 인자가 3개 이상이라면, 2개까지는 a,b에 받고 나머지는 c라는 list에 받아짐
```

#### 불변성(Immutability)

- 원시 데이터 : String, Number, Boolean, undefiend, null
- 참조 데이터 : Object, Array, Function

- 원시 데이터는 생성된 이후, 값이 새로 생성되지 않고 해당 주소에 남아있음 (불변성)

#### 얕은 복사 깊은 복사

- 얕은 복사 : 주소값을 복사해옴
- 깊은 복수 : 주소값을 새로 할당하고 내부값을 복사해옴

```
const user = {
  name: "tester",
  age: 85,
}

// 얕은 복사
const copyUser = user;

// 깊은 복사 (1차원에 대해서만)
const copyUser = Object.assing({}, user);
const copyUser = {...user};

// 깊은 복사 (2차원 이상, lodash 사용)
import _ from 'lodash';

const copyUser = _.cloneDeep(user);
```

### JS 데이터 실습

#### lodash 사용법

[lodash docs](https://lodash.com/docs/4.17.15)

```
_.uniq([2,1,2]);                            // [2,1]
_.uniqBy([2.1, 1.2, 2.3], Math.floor);      // [2.1, 1.2]
_.unionBy([2.1], [1.2, 2.3], Math.floor);   // [2.1, 1.2]

// example
const users = [
  {'user': 'barney', 'active':false},
  {'user': 'fred', 'active': flase},
  {'user': 'pebbles', 'active': true}
]

// find 관련

_.find(users, function(o) { return o.user == 'barney'});     // {'user': 'barney', 'active':false}
_.find(users, {'user': 'fred', 'active': false});            // {'user': 'fred', 'active': flase}
_.find(users, ['active', false]);                            // {'user': 'barney', 'active':false}
_.find(users, 'active');                                     // {'user': 'pebbles', 'active': true}

_.findIndex(users, function(o) { return o.user == 'barney'});     // 0
_.findIndex(users, {'user': 'fred', 'active': false});            // 1
_.findIndex(users, ['active', false]);                            // 0
_.findIndex(users, 'active');                                     // 2

// remove 관련
_.remove(users, { user: 'barney' });
```

#### JSON (JavaScript Object Notation)

키-값 쌍으로 이루어진 비동기 브라우저/서버 통신(AJAX)를 위해 사용되는 데이터 포맷

```
// json to string
const str = JSON.stringif(data);

// string to json
const obj = JSON.parse(str);
```

#### Storage

브라우저에 데이터를 저장 할 수 있는 공간

- Local Storage

  - 도메인 주소에 데이터 종속
  - 데이터 만료 X
  -

- Session Storage
  - 페이지 세션 종료(페이지 닫기) 시, 데이터 만료

```
// localStorage 사용 예)

// save
// value는 JSON.stringify()로 JSON화 된 값이어야 함
localStorage.setItem('key', value);

// read
const value = localStorage.getItem('key');

// remove
localStorage.removeItem('key')
```

#### Lowdb

Lodash 기반, nodejs json database

#### OMDb API

The Open Movie Database API

Query String?  
어떤 페이지에 접근할 때, http요청의 옵션에 대한 속성 및 값에 대한 명시  
주소?<u>속성=값&속성=값&속성=값</u> (query string)

axios?  
Promise 기반의 Http 요청을 처리해주는 라이브러리 (브라우저 및 nodejs용)

### 정규표현식

[정규표현식 테스트 사이트](https://regexr.com)

역할

- 문자 검색
- 문자 대체
- 문자 추출

#### 정규식 생성

```
// 생성자 방식
new RegExp(표현식, 옵션)

// 리터럴 방식
/표현/옵션
```

#### 정규식을 사용하는 메소드

```
// 일치하는 하나의 정보 반환
reg.exec(string)

// 일치 여부(bool) 반환
reg.test(string)

// 일치하는 문자열 배열 반환
String.match(reg)

// 일치하는 문자열의 인덱스 반환
String.search(reg)

// 일치하는 문자열을 대체 후 반환
String.replace(reg)

// 일치하는 문자열을 분할하여 배열로 반환
String.split(reg)

// 생성자 함수 방식의 정규식을 리터럴 방식의 문자열로 반환
생성자_정규식.toString()
```

#### 플래그(옵션)

- g : 일치하는 모든 문자 반환
- i : 대소문자를 구분하지 않고 일치하는 문자 반환
- m : 여러 줄 일치(\n을 구분하여 각 줄단위 검색)

#### 패턴

시작/끝 관련

- ^n : 줄 시작에 n이 있다면 일치
- n$ : 줄 끝에 n이 있다면 일치
- (?=) : 앞쪽 일치
- (?<=) : 뒤쪽 일치

그 외

- \. : 임의의 한 문자와 일치 (경로에서의 '\*' 역할)
- a|b : a or b 와 일치
- n? : n이 없거나 n과 일치

연속 문자 관련

- a{n} : a가 n개 연속 일치
- a{n,} : a가 n개 이상 연속 일치
- a{n, m} : a가 n개 이상 m개 이하 연속 일치

문자 또는 숫자 관련

- [abc] : a or b or c
- [a-z] : a ~ z 사이 문자
- [A-Z] : A ~ Z 사이 문자
- [0-9] : 0 ~ 9 사이 숫자
- [가-힣] : 가 ~ 힣 사이 문자

백슬래시 관련

- \w: 63개 문자 (대소영문 52ro + 숫자 10개 + \_)
- \b: 63개 문자에 일치하지 않는 문자 경계
- \d: 숫자(Digit)
- \s: 공백(Space, tab 등)
