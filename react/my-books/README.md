# 생성

- $ npx create-react-app APP_NAME --template typescript

# 설치 libs

- router 설정

  - $ npm i react-router-dom@5.2.1
  - $ npm i --save-dev @types/react-router-dom

- error bounder 설정

  - $ npm i react-error-boundary
    - componentDidPatch를 이용해서, error 발생시, error 페이지로 이동 시켜줌

- redux 설정
  - $ npm i redux react-redux redux-saga redux-devtools-extension redux-actions
  - $ npm i --save-dev @types/react-redux @types/redux-actions

# 개발 순서

- router 설정
- error bounder 설정
- redux 설정

- 로그인 / 로그아웃
  - redux
