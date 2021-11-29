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
  showPhotos();
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

//============================
// 정렬 및 필터 관련
//============================
// 정렬 방식 지정
var sorts = {
  recent: function (a, b) {
    return a.idx > b.idx ? -1 : 1;
  },
  like: function (a, b) {
    return a.likes > b.likes ? -1 : 1;
  },
};

// 현재 선택된 정렬
var sort = sorts.recent;

// 필터 방식 지정
var filters = {
  all: function (it) {
    return true;
  },
  mine: function (it) {
    return it.user_id === my_info.id;
  },
  like: function (it) {
    return my_info.like.indexOf(it.idx) > -1;
  },
  follow: function (it) {
    return my_info.follow.indexOf(it.user_id) > -1;
  },
};

// 현재 선택된 필터
var filter = filters.all;

// 정렬 적용 함수
function setSort(_sort) {
  // 버튼 상태 변화
  var sortButtons = document.querySelectorAll("#sorts li");
  sortButtons.forEach(function (sortButton) {
    sortButton.classList.remove("on");
  });
  document.querySelector("#sorts li." + _sort).classList.add("on");

  // 선택된 정렬 방식 적용
  sort = sorts[_sort];
  showPhotos();
}

// 필터 적용 함수
function setFilter(_filter) {
  var filterButtons = document.querySelectorAll("#filters li");
  filterButtons.forEach(function (filterButton) {
    filterButton.classList.remove("on");
  });
  document.querySelector("#filters li." + _filter).classList.add("on");
  filter = filters[_filter];
  showPhotos();
}

//============================
// 사진 및 사진 정보 보이기
//============================
function showPhotos() {
  // 사진 및 사진 정보 초기화
  var existingNodes = document.querySelectorAll(
    "#gallery article:not(.hidden)"
  );
  existingNodes.forEach(function (existingNode) {
    existingNode.remove();
  });

  // 갤러리 div 선택
  var gallery = document.querySelector("#gallery");

  // photos에 필터 적용 후, 정렬 적용
  var filtered = photos.filter(filter);
  filtered.sort(sort);

  // 각 사진을 썸네일로 만들어 넣음
  filtered.forEach(function (photo) {
    // 마련한 요소 복사하여 숨김 풀기
    var photoNode = document.querySelector("article.hidden").cloneNode(true);
    photoNode.classList.remove("hidden");

    // 사진의 내용 채우기
    photoNode.querySelector(".author").innerHTML = photo.user_name;
    photoNode.querySelector(".desc").innerHTML = photo.description;
    photoNode.querySelector(".like").innerHTML = photo.likes;
    photoNode.querySelector(".photo").style.backgroundImage =
      "url('./img/photo/" + photo.file_name + "')";

    // 좋아요 여부 클래스로 표시
    if (my_info.like.indexOf(photo.idx) > -1) {
      photoNode.querySelector(".like").classList.add("on");
    }

    // Like에 클릭 이벤트(toggle 이벤트 추가)
    photoNode.querySelector(".like").addEventListener("click", function () {
      toggleLike(photo.idx);
    });

    // 갤러리 요소에 붙여넣기
    gallery.append(photoNode);
  });
}

//============================
// 좋아요 토글
//============================
function toggleLike(idx) {
  // 해당 사진이 좋아요가 아니라면 좋아요로 토글 후,
  // 해당 사진 좋아요 갯수 증가
  if (my_info.like.indexOf(idx) === -1) {
    my_info.like.push(idx);
    for (var i = 0; i < photos.length; i++) {
      if (photos[i].idx === idx) {
        photos[i].likes++;
        break;
      }
    }
  }

  // 해당 사진이 좋아요라면, 좋아요 해제로 토글 후,
  // 해당 사진 좋아요 갯수 감소
  else if (my_info.like.indexOf(idx) !== -1) {
    my_info.like = my_info.like.filter(function (it) {
      return it !== idx;
    });
    for (var i = 0; i < photos.length; i++) {
      if (photos[i].idx === idx) {
        photos[i].likes--;
        break;
      }
    }
  }

  // 사진 보이기 reset
  showPhotos();
}
