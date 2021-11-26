## 메뉴마다 화면 보여주기

### 화면 전환 방법

화면 전환 방법으로 배운것은 2가지가 있다.

1번 방법은 간단하게만 짚고 2번 방법을 사용해 구현하도록 한다

#### 1. 각 요소들의 클래스를 변경

nav 요소 내의 버튼들

<li class="gallery on">사진들 보기</li>
<li class="upload">사진 올리기</li>
<li class="myinfo">내 정보</li>
header .nav li.on {
  border-bottom: 4px solid white;
  height: 60px;
}

#### 2. 최상위 부모 요소의 클래스를 변경

main 요소

  <main class="gallery">
main .dep { display: none; }
main.gallery .dep._gallery,
main.upload .dep._upload,
main.myinfo .dep._myinfo {
  display: block;
}

함수와 버튼으로 제어하기

메뉴 클래스 값을 인자로 받는 함수를 둠
각 버튼에 클래스대로 인자를 넣어 함수에 연결

function setMenu(\_menu) {
// ...
}

<li class="gallery on" onclick="setMenu('gallery')">사진들 보기</li>
<li class="upload" onclick="setMenu('upload')">사진 올리기</li>
<li class="myinfo" onclick="setMenu('myinfo')">내 정보</li>

setMenu 함수 내용부

모든 메뉴 버튼의 on 해제하기

var filterButtons = document.querySelectorAll("nav li");
filterButtons.forEach(function (filterButton) {
filterButton.classList.remove("on");
});

선택된 메뉴 버튼 on으로 설정하기

document.querySelector("nav li." + \_menu).classList.add("on");

main 요소 클래스 설정

document.querySelector("main").className = \_menu;
