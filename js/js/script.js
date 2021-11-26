//============================
//  Nav 이동
//============================
function setMenu(_menu) {
  var filterButtons = document.querySelectorAll("nav li");
  filterButtons.forEach(function (filterButton) {
    filterButton.classList.remove("on");
  });
  document.querySelector("nav li." + _menu).classList.add("on");
  document.querySelector("main").className = _menu;
}

function setDescLength() {
  document.querySelector(".descLength").innerHTML =
    document.querySelector("input.description").value.length + "/20";
}

//============================
// 초기화
//============================
function showMyInfo() {
  // 텍스트 항목 내용 채우기
  document.querySelector("#myInfoId").innerHTML = my_info.id;
  document.querySelector("#myInfoUserName").innerHTML = my_info.user_name;
  document.querySelector("#sp-intro").innerHTML = my_info.introduction;
  document.querySelector("#ip-intro").value = my_info.introduction;

  // radio 타입 default 체크 설정
  document.querySelector(
    "#myinfo input[type=radio][value=" + my_info.as + "]"
  ).checked = true;

  // checkbox 타입 default 체크 설정
  document
    .querySelectorAll("#myinfo input[type=checkbox]")
    .forEach(function (checkbox) {
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

//============================
// 수정 모드 on/off
//============================
function setEditMyInfo(on) {
  // 요소들을 포함하는 div 요소의 클래스 설정
  document.querySelector("#myinfo > div").className = on ? "edit" : "non-edit";

  // input들의 활성화
  document.querySelectorAll("#myinfo input").forEach(function (input) {
    input.disabled = !on;
  });
}

//============================
// 내 정보 수정
//============================
function updateMyInfo() {
  // my_info 수정
  console.log("test");
  my_info.introduction = document.querySelector("#ip-intro").value;
  my_info.as = document.querySelector(
    "#myinfo input[type=radio]:checked"
  ).value;
  var interests = [];
  document
    .querySelectorAll("#myinfo input[type=checkbox]:checked")
    .forEach(function (checked) {
      interests.push(checked.value);
    });
  my_info.interest = interests;

  // 변경 내역 반영 (수정 모드 off)
  setEditMyInfo(false);
  showMyInfo();
}
