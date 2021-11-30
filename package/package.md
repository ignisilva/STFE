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

##### Apache License

- 아파치 재단에서 자체 소프트웨어에 적용하기 위해 만든 라이선스
- 개인적/상업적 이용, 배포, 수정, 특허 신청 가능

##### MIT License

- MIT 공대에서 학생들을 위해 개발한 라이선스
- 개인 소스에 해당 라이선스 사용 명시 필수
- 이외 사용 제약 없음

##### BSD License

- BSD 대학에서 학생들을 위해 개발한 라이선스
- 개인 소스에 해당 라이선스 사용 명시 필수
- 이외 사용 제약 없음

##### Beerware

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

#### 배경

#### 배치

#### 플렉스(정렬)

#### 전환

#### 변환

#### 띄움

#### 애니메이션

#### 그리드

#### 다단

#### 필터
