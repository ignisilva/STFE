import React from "react";

class Uncontrolled extends React.Component {
  // Ref: 상태 값을 가지고 있는 태그의 참조값을 저장
  inputRef = React.createRef();

  render() {
    // 초기화에서 this.inputRef = null
    console.log("init render", this.inputRef);
    return (
      <div>
        {/* <input id="my-input" /> */}
        <input ref={this.inputRef} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  componentDidMount() {
    // this.inputRef = { input }
    console.log("componentDidMount", this.inputRef);
  }

  click = () => {
    // input 엘리먼트의 현재 상태 값(value)를 꺼내서 전송
    // const input = document.querySelector("#my-input"); // virtual DOM이 아닌 real DOM에서 input을 가져옴 (React에서 지양하는 방법)
    // console.log(input);

    console.log(this.inputRef.current.value);
  };
}

export default Uncontrolled;
