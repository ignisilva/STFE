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

## Frontend / Backend
