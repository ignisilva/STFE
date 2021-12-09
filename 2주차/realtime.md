# 인사이트

## 좋은 코드

- 성능은 기본

- 사람이 이해하기 쉬운 코드

## 컴퓨터 메모리

CPU와 RAM의 데이터 송수신

CPU -> RAM 저장 시,
n bit 체계로, 주소값 input ex 8bit) 01001000
n bit 체계로, 데이터값 input ex 8bit) 11100101

CPU -> RAM 데이터 요청시

n bit 체계로, 주소값 input
n bit 체계로, 데이터값 output

-> 효용성을 위해 16진수 사용

html은 태그 및 태그의 속성으로 이루어짐 -> 오브젝트 구조
그러므로, div 태그는 불필요하다면 줄이는 것이 맞다. (메모리를 차지함)

## 프로그래밍

JS 코드 -> 토큰처리(수식인지 사칙연산인지 등 구분) -> AST(abstract syntax tree)화 -> 어셈블리

js to ast 보기 : https://astexplorer.net/

참고: DOM은 javascript로 구성 되어있음.

## 미디어

Ubiquitous: 무소부재

플래시가 사라진 이유, 플래시 해석기를 공개하지 않아서 점차 javascript에 점유율을 뺏기고 사장.

### WWW

팀 버너스리의 아이디어

누구나 연결될 수 있게 하기 위한 방법의 구체화 3가지
HTML: 쉽게 프로그래밍
HTTP: 약속을 통한 요청
Browser: 누구나 볼 수 있다.

## 브라우저 통신과정

### URL 구조

protocol://DonamainName:portNum

### 통신 과정

1. DNS를 통해 실제 목적지 ip 가져옴
2. 4 hand-shake로 목적지가 있는지 확인
3. 클라이언트가 http://ip:port 형식으로 ran card를 통해 인터넷망에 요청을 던짐
4. 서버가 요청을 받고 응답을 리턴
5. 클라이언트가 응답을 받고 반응

## HTML과 메모리

HTML 태그가 두개인 이유: 자식 태그들을 배열에 넣어 관리하기 위해 (DOM Tree를 만들기 위해)

태그 사이에 있는 또 다른 태그들은 부모의 children배열 내부에 들어가게 됨

HTML -> 토큰 -> DOM 생성 프로그램 -> DOM 객체

DOM체계는 WHATWG에서 표준을 관리하고 있음

## 태그

아웃라인 알고리즘

아웃라인을 반영해야 크롤링이 잘된다.

아웃라인 반영 방법

1. 태그는 잘 닫겨야 함
2. html 모든 코드는 항상 소문자로 작성
3. 쌍따옴표를 사용

## HTML

DOCTYPE 붙고 안붙고 차이:
body 상자를 그리는 기준이 달라짐 등
반드시 잘 붙여줄 것

-webkit- 키워드?
HTML의 test단계의 신규 기능

브라우저 업데이트 뉴스 보는게 중요
safari firefox chrome 정도

html 잘 사용했는지 검사하는 사이트: https://whatwg.org/validator/

## HTML과 Javascript

1. HTML 태그를 읽어서 오브젝트를 읽어서 DOM에 객체 생성
2. Script 태그를 만나면 랜더링 작업을 HTML CSS 랜더러에서 JS 컴파일러에게 위임

## Javascript

ECMA 규칙을 기반으로 js 엔진들이 만들어짐
크롬: v8
사파리: jsCore
파폭: SpiderMonkey

## 브라우저 바깥의 Javascript

node.js

## Frontend / Backend

## 태그에 대한 정리

<header\>

- 제목, 네비게이션, 로고, 목차, 검색폼을 그룹핑
- header를 여러번 쓸 수 있다. (네비 쪽에 한번 / 본문 제목 쪽에 한번)

<footer\>

- 쓴 날짜, 저작권, 소개글
- footer를 여러번 쓸 수 있다. (페이지 공통 푸터 한번 / 본문 소개 쪽에 한번)

<main\>

- 본문에 대한
- 한번 사용

<nav>
- 주요 네비게이션 그룹핑

<aside\>

- 의미 상 본문과 연관이 있는 부수적인 부분
- 인용, 광고 등의 내용

<article\>

- 뉴스, 블로그, 덧글 같은 컨텐츠 발행 및 배포할 목적
- header / footer를 별도로 가질 수 있다

<section\>

- 한가지 주제로 묶는다는 의미

## 아웃라인

- [아웃라인 확인 페이지](https://gsnedders.html5.org/outliner/)

- HTML을 분석을 통해 얻게되는 의미구조
- XHTML에서는 <h1\> ~ <h6\>만 의미구조 부여
- 의미구조에 영향 X
  - <header\>
  - <main\>
  - <footer\>
- 의미구조에 영향 O
  - <section\>
    - section에 감싸졌다면, 감싸지지 않은 영역대비 하위 요소로 인식됨
  - <article\>
  - <aside\>
  - <nav\>

## 참고 사항

- h1 태그는 검색이 될 만한 단어에 거는게 유리

## CSS

### 올드 레이아웃

flex 대신 float 또는 liline-block

### 참고

빈문자는 4px 이다

head / style 태그 등도 상자로써 영역이 있다. 브라우저 css에 의해 영역이 없어지게 만들어 놓을뿐

HTML CSS 구성시, 데이터에 영향받지 않는 것이 중요

글자가 겹치는 상황  
line-height < font-size

이미지를 베이스라인 밑으로 내리는 방법?  
vertical align

코딩순서 (밖의 레이아웃부터 안쪽 레이아웃 순으로)

1. 선을 긋는다
2. 넓이 높이 패딩 마진
3. 디테일한 모양 작업(색 글씨 크기 등)
4. float 작업 (or grid flex)
5. 정리(clear)

### Figma 핵심

단축키

- 스케치북 내 이동: space + 마우스
- zoom in-out: ctrl + 마우스 휠

왼쪽 바: 생성된 오브젝트 목록
오른쪽 바: 선택된 오브젝트 속성 설정

\# : 작은 종이 놓기

#### 속성

일반 속성

- auto layout: 자동으로 frame 크기를 자식들의 크기에 맞추기, 자식들의 위치를 수직/수평 방향으로 설정 가능

- create component: component class화

  - alt + 마우스: class로 instance 생성
  - create component set: 설정에 따라 instance가 변화하는 class 생성

- inspect: 현재 속성 살펴보기

자식 속성

- contrains: position top left right bottom 설정

### 참고

reset.css

- 기본 글자색 및 line-height: 디자인된 본문(p태그 등)의 글자 색 및 글 높이를 기본으로 하는게 좋다

### Javascript

[js 코드 메모리 보면서 코딩 웹사이트](https://pythontutor.com/)

js는 모든 것을 객체화 해서 관리한다

- 배열 -> 실제 배열이 아니라 index를 해시값으로 해서 key로 가짐

```
<script>
debugger <- 키워드 쓰면, 개발자 도구 -> Sources -> Scope에서 디버깅 가능
</script>
```

#### 면접 질문

스코프 체인, 클로저, 블록 스코프, 런타임, 스레드, nodejs(비동기 이벤트 핸들러 방식)
