## 강사 소개

노태환 강사님

모두싸인 프론트엔드 리드 개발자

React 공식 홈피 한글 번역 메인테이너 활동

구글 개발자 그룹 웹테크 오거나이저 활동

## 강의 진행

- 이론 강의 복습
- 관련 코드 작성
- 코드 리뷰
- 개념 정리
- 질의 응답

## 실습 안내

- code sandbox
- 진행 상황 체크([링크](bit.ly/fc-0106-s))
- 각 일자별 실습 코드 공유

### 220106

#### React 학습을 위한 JS 기초

- [Modern JS](https://ko.javascript.info/)

- let, const
- arrow function
- spread operator
- object destructuring

#### React 살펴보기

- 사용자 UI를 만들기 위한 JS 라이브러리
- 선언형, 컴포넌트 기반, 한번 배워서 어디서나 사용하기
- 랜더링 로직 및 UI 로직이 같은 위치에 있다.

- UI 구현에 꼭 필요한 것들

  - 화면에 보여줄 데이터 준비 & 화면에 그리는 코드 전달
  - UI를 통해 유저가 발생시킨 이벤트 처리
  - 유저가 발생시킨 이벤트에 따라 데이터 변경 및 관리
  - 이벤트 처리 후, 리-랜더링

- 선언형?

  - return되는 원하는 결과를 구현(표현)하는 것

- 컴포넌트 ?

  - OOP에서의 클래스 비슷한 것

JSX

- js안에서 HTML 태그와 비슷한 문법 사용 가능
- JSX는 필수는 아니지만, js로 구현하는 것보다 구성이 용이하므로 사용함
- JSX: 표현식 포함하기
  - {}를 이용하여, JSX 내부에 변수를 넣을 수 있음
  - JSX도 표현식, 일종의 값 이므로, 대입 및 할당 등이 가능
- JSX: 속성 정의하기
  - HTML 태그 속성을 줄 수 있음 (속성을 따로 지정하지않으면 default값으로 넘어감)
  - JSX에서 boolean, null, undefined는 무시됨
- JSX: 깊게 살펴보기
  - React는 랜더링 로직 및 UI 로직이 연결된다는 사상에 기반

Props

- 재사용 가능한 최소 UI 단위를 유도하는 Component 매개변수
- 읽기 전용이라서 값을 재할당 할 수 없다

Event-handing

- 카멜 케이스로 이벤트 선언
- 핸들러 전달시, () 없이 전달

#### Form

- 사용자 입력 관련
- 제어 / 비제어 컴포넌트 차이 이해

- Controlled Component

  - 사용자 입력시, React 상태를 통해 입력값 상태를 관리하는 형태

- UnConrolled Component
  - 사용자 입력시, DOM 자체에서 입력값 상태를 관리하는 형태
  - ref를 활용해 DOM을 참조 할 수 있다(ref.current.value)
  - 퍼포먼스, 사용성 등을 따지면 Uncontrolled component를 사용하는게 맞다

#### Styling

- css or scss
  - style props로 가능하지만 잘 사용하지 않음
  - 오버헤드 존재 등등
  - \*.css 에서 스타일 관리
  - hover 등 사용 X
  - css 파일 import를 위해 Webpack등 빌드 도구 필요
- css Modules
  - \*.module.css 사용
  - webpack에서 css-loader 사용
  - css를 import해서 각 클래스 이름을 객체 참조하듯 가져올 수 있음
- css in js
  - styled-component 또는 emotion 라이브러리를 사용하여 css 사용

#### Context

- consummer를 사용하는 컴포넌트는 context 변경시, 전부 re-render
- context에 주는 초기값은 덮어쓰기 되는데 왜 주는 것인지? : 명시하지 않았을 경우의 default 값
- context에 적합한 데이터
  - 로그인 정보
  - thema
  - ...
