## 1) 메뉴마다 화면 보여주기

- 화면 전환 제어에 관련한 내용

### 1. 각 요소들의 클래스를 변경

```
nav의 요소들에 적용

<li class="gallery on">사진들 보기</li>
<li class="upload">사진 올리기</li>
<li class="myinfo">내 정보</li>

header .nav li.on {
  border-bottom: 4px solid white;
  height: 60px;
}
```

### 2. 최상위 부모 요소의 클래스를 변경

```
main 의 요소들에 적용

<main class="gallery">

main .dep { display: none; }
main.gallery .dep._gallery,
main.upload .dep._upload,
main.myinfo .dep._myinfo {
  display: block;
}
```

### 3. 함수와 버튼으로 제어하기

- 메뉴 클래스 값을 인자로 받는 함수를 두고, 각 버튼에 클래스대로 인자를 넣어 함수와 연결한다.

```
function setMenu(_menu) {
  // 모든 메뉴 버튼의 on 해제하기
  var filterButtons = document.querySelectorAll("nav li");
    filterButtons.forEach(function (filterButton) {
    filterButton.classList.remove("on");
  });

  // 선택된 메뉴 버튼 on으로 설정하기
  document.querySelector("nav li." + _menu).classList.add("on");
}

<li class="gallery on" onclick="setMenu('gallery')">사진들 보기</li>
<li class="upload" onclick="setMenu('upload')">사진 올리기</li>
<li class="myinfo" onclick="setMenu('myinfo')">내 정보</li>
```

## 2) 사진 올리기 페이지

- 입력 감지에 대한 내용

### 입력칸 글자 입력 감지 및 글자 입력

- 입력 감지 관련 이벤트 정리

| onkeypress                         | onkeydown           | onkeyup             |
| ---------------------------------- | ------------------- | ------------------- |
| 입력 전 이벤트 발생 (ASCII만 인식) | 입력 전 이벤트 발생 | 입력 후 이벤트 발생 |

```
function setDescLength () {
  document.querySelector(".descLength").innerHTML =
  document.querySelector("input.description").value.length + "/20";
}

<input class="description" type="text" maxlength="20" placeholder="사진 설명을 20자 이내로 적어주세요." onkeyup="setDescLength()"/>
```

## 3) 내 정보 수정 & 저장하기

- 페이지 초기화 및

### 초기화

```
function showMyInfo() {
  // 텍스트 항목 내용 채우기
  document.querySelector("#myInfoId").innerHTML = my_info.id;
  document.querySelector("#myInfoUserName").innerHTML = my_info.user_name;
  document.querySelector("#sp-intro").innerHTML = my_info.introduction;
  document.querySelector("#ip-intro").value = my_info.introduction;

  // radio 타입 default 체크 설정
  document.querySelector("#myinfo input[type=radio][value=" + my_info.as + "]").checked = true;

  // checkbox 타입 default 체크 설정
  document.querySelectorAll("#myinfo input[type=checkbox]")
    .forEach(function(checkbox) {
    checkbox.checked = false;
  });
  my_info.interest.forEach(function (interest) {
    document.querySelector(
      "#myinfo input[type=checkbox][value=" + interest + "]"
      ).checked = true;
  });
}

function init() {
  showMyInfo();
}

<body onload="init()">
```

### 입력 모드 전환

- flag를 사용하여 입력 모드 on/off 전환

```
function setEditMyInfo(on) {
  // 요소들을 포함하는 div 요소의 클래스 설정
  document.querySelector("#myinfo > div").className = on ? "edit" : "non-edit"

  // input들의 활성화
  document.querySelectorAll("#myinfo input").forEach(function (input) {
    input.disabled = !on;
  })
}

<div class="mi-dep non-edit button" onclick="setEditMyInfo(true)">수정</div>
<div class="mi-dep edit button cancel" onclick="setEditMyInfo(false)">취소</div>
```

### 입력 값 저장

- input값들에 따라 data.js의 my_info 수정

```
function updateMyInfo () {
  // my_info 수정
  my_info.introduction = document.querySelector("#ip-intro").value;
  my_info.as = document.querySelector("#myinfo input[type=radio]:checked").value;
  var interests = [];
  document.querySelectorAll("#myinfo input[type=checkbox]:checked").forEach(function (checked) {
    interests.push(checked.value);
  });
  my_info.interest = interests;

  // 변경 내역 반영 (수정 모드 off)
  setEditMyInfo(false);
  showMyInfo();
}

<div class="mi-dep edit button" onclick="updateMyInfo()">확인</div>
```
