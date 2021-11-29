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

## 4) 썸네일 나타내고 좋아요 토글하기

### 썸네일 화면에 생성

```
<section id="gallery" class="dep _gallery">
  // 복사용 article 요소 추가
  <article class="hidden">
    <div class="photo"></div>
    <div class="info">
      <div class="like"></div>
      <div class="author"></div>
      <div class="desc">
      </div>
    </div>
  </article>
</section>

// init() 함수에 추가
showPhotos();

function showPhotos () {
  // 사진 및 사진 정보 초기화
  var existingNodes = document.querySelectorAll(
    "#gallery article:not(.hidden)"
  );
  existingNodes.forEach(function (existingNode) {
    existingNode.remove();
  });

  // 갤러리 div 선택
  var gallery = document.querySelector("#gallery");

  // 각 사진을 썸네일로 만들어 넣음
  photos.forEach(function (photo) {
    // 마련한 요소 복사하여 숨김 풀기
    var photoNode = document.querySelector("article.hidden").cloneNode(true);
    photoNode.classList.remove("hidden");

    // 사진의 내용 채우기
    photoNode.querySelector(".author").innerHTML = photo.user_name;
    photoNode.querySelector(".desc").innerHTML = photo.description;
    photoNode.querySelector(".like").innerHTML = photo.likes;
    photoNode.querySelector(".photo").style.backgroundImage
      = "url('./img/photo/" + photo.file_name + "')";

    // 좋아요 여부 클래스로 표시
    if (my_info.like.indexOf(photo.idx) > -1) {
      photoNode.querySelector(".like").classList.add("on");
    }

    // 갤러리 요소에 붙여넣기
    gallery.append(photoNode);
  })
}

```

### 좋아요 토글 기능

```
//showPhoto() 함수에 추가
photoNode.querySelector(".like").addEventListener(
  "click", function () { toggleLike(photo.idx) }
)

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
  else {
    my_info = my_info.like.filter(function (it) {
      return it !== idx;
    });
    for (var i = 0; i < photos.length; i++) {
      if (photos[i].idx === idx) {
        photos[i].likes--;
        break;
      }
    }
  }
}
```

## 5) 정렬 및 필터 적용

### 정렬 적용

- 최신순 정렬

```
photos.sort(function (a, b) {
  return (a.idx > b.idx) ? -1 : 1;
})
```

- 좋아요순 정렬

```
photos.sort(function (a, b) {
  return (a.likes > b.likes) ? -1 : 1;
})
```

### 필터 적용

- 필터링된 리스트 따로 두기

```
var filtered;

// 모든 사진
filtered = photos.filter(function (it) {
  return true;
});

// 내 사진
filtered = photos.filter(function (it) {
  return it.user_id === my_info.id;
});

// 내가 좋아요 한 사진
filtered = photos.filter(function (it) {
  return my_info.like.indexOf(it.idx) > -1;
});

// 내가 팔로우하는 사용자의 사진
filtered = photos.filter(function (it) {
  return my_info.follow.indexOf(it.user_id) > -1;
});
```

### 정렬과 필터 방식 변수로 지정

```
var sort = function (a, b) { return (a.idx > b.idx) ? -1 : 1 };
var filter = function (it) { return true; };

// showPhotos()에 추가
var filtered = photos.filter(filter);
filtered.sort(sort);
```

### 정렬과 필터 방식 외부 변수로 두기

```
// 정렬 방식을 객체로 지정
var sorts = {
  recent: function (a, b) { return (a.idx > b.idx) ? -1 : 1 },
  like: function (a, b) { return (a.likes > b.likes) ? -1 : 1 }
}

// 현재 선택된 정렬
var sort = sorts.recent;

// 필터 방식을 객체로 지정
var filters = {
  all: function (it) { return true; },
  mine: function (it) { return it.user_id === my_info.id; },
  like: function (it) { return my_info.like.indexOf(it.idx) > -1; },
  follow: function (it) { return my_info.follow.indexOf(it.user_id) > -1; }
}

// 현재 선택된 필터
var filter = filters.all;
```

### 버튼 함수에 정렬 및 필터 적용

- 정렬 적용

```
function setSort(_sort) {
  // 버튼 상태 변화
  var sortButtons = document.querySelectorAll("#sorts li");
  sortButtons.forEach(function (sortButton) {
    sortButton.classList.remove('on');
  })
  document.querySelector("#sorts ." + _sort).classList.add("on");

  // 선택된 정렬 방식 적용
  sort = sorts[_sort];
  showPhotos();
}

<ul id="sorts" class="dep _gallery">
  <li class="recent on" onclick="setSort('recent')">최신순 보기</li>
  <li class="like" onclick="setSort('like')">좋아요 순 보기</li>
</ul>
```

- 필터 적용

```
function setFilter(_filter) {
  var filterButtons = document.querySelectorAll("#filters li");
  filterButtons.forEach(function (filterButton) {
    filterButton.classList.remove('on');
  });
  document.querySelector("#filters ." + _filter).classList.add("on");
  filter = filters[_filter];
  showPhotos();
}

<ul id="filters" class="dep _gallery">
  <li class="all on" onclick="setFilter('all')">전체 사진</li>
  <li class="mine" onclick="setFilter('mine')">내 사진 사진</li>
  <li class="like" onclick="setFilter('like')">좋아요 한 사진</li>
  <li class="follow" onclick="setFilter('follow')">팔로우 회원 사진</li>
</ul>
```
