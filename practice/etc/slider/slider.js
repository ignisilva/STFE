const Slider = function (target, options) {
  //==========================
  // 이미지 로드 여부
  //==========================
  const toBeLoaded = document.querySelectorAll(`${target} img`);
  let loadedImages = 0;
  toBeLoaded.forEach((item) => {
    item.onload = () => {
      loadedImages += 1;
      if (loadedImages === toBeLoaded.length) {
        innerFunction(target, options);
      } else {
        return;
      }
    };
  });

  // 2번 매개변수 pass
  // window.onload = (function (target, options) {
  //   return () => {
  //     innerFunction(target, options); // 3번 매개변수 pass
  //   };
  // })(target, options); // 1번째 매개변수 pass

  //==========================
  // 메인구간
  //==========================
  function innerFunction(target, options) {
    // options
    const cssClass = "slider";
    const speed = options.speed | 500;

    // options verification
    if (speed < 500) {
      throw new Error("speed should be more than 500");
    }

    // 돔 준비
    const body = document.querySelector("body");
    const kindWrap = document.createElement("div");
    const kindSlider = document.createElement("div");
    const oldSlider = body.removeChild(document.querySelector(`${target}`));
    const images = oldSlider.querySelectorAll("img");
    const slider = document.createElement("ul");

    slider.classList.add(cssClass);
    for (let i = 0; i < images.length; i++) {
      const li = document.createElement("li");
      li.appendChild(images[i]);
      slider.appendChild(li);
    }

    const arrow = document.createElement("div");
    const prev = document.createElement("a");
    const next = document.createElement("a");

    kindWrap.classList.add("kind_wrap");
    kindSlider.classList.add("kind_slider");

    arrow.classList.add("arrow");
    prev.classList.add("prev");
    prev.classList.add("no-drag");
    prev.innerHTML = "&larr;";
    next.classList.add("next");
    next.classList.add("no-drag");
    next.innerHTML = "&rarr;";

    arrow.appendChild(prev);
    arrow.appendChild(next);

    kindSlider.appendChild(slider);
    kindWrap.appendChild(kindSlider);
    kindWrap.appendChild(arrow);
    body.appendChild(kindWrap);

    let slideLis = slider.querySelectorAll("li");
    const firstNode = slideLis[0].cloneNode(true);
    const lastNode = slideLis[slideLis.length - 1].cloneNode(true);
    slider.insertBefore(lastNode, slideLis[0]);
    slider.appendChild(firstNode);
    slideLis = slider.querySelectorAll("li");
    const liWidth = slideLis[0].clientWidth;
    const sliderWidth = liWidth * slideLis.length;
    const startLeft = -lastNode.clientWidth;
    const endLeft = -liWidth * (slideLis.length - 1) + firstNode.clientWidth;
    slider.style.width = sliderWidth + "px";
    slider.style.left = startLeft + "px";

    let moveDist = -lastNode.clientWidth;
    const moveBtn = kindWrap.querySelector(".arrow");
    moveBtn.addEventListener("click", (event) => {
      event.preventDefault(); // 이벤트 전파 방지(a href 이동 방지)
      if (event.target.className === "prev no-drag") {
        moveDist = moveDist + liWidth > 0 ? 0 : moveDist + liWidth;
      } else if (event.target.className === "next no-drag") {
        moveDist =
          moveDist - liWidth < -liWidth * (slideLis.length - 1)
            ? -liWidth * (slideLis.length - 1)
            : moveDist - liWidth;
      }
      slider.style.transition = `all ${speed / 1000}s ease`;
      slider.style.left = moveDist + "px";

      if (moveDist === 0) {
        setTimeout(() => {
          slider.style.transition = "none";
          moveDist = -2400;
          slider.style.left = -2400 + "px";
        }, 500);
      } else if (moveDist === -3200) {
        setTimeout(() => {
          slider.style.transition = "none";
          moveDist = -800;
          slider.style.left = -800 + "px";
        }, speed);
      }
    });
  }
};
