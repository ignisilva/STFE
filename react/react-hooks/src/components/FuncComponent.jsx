import React from "react";

export default function FuncComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // cleanup
      // componentWillUnmount
    };
  }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      // cleanup
      // 이전 값으로, 해당 로직을 돌리고 나서 현재 값으로 위의 로직을 실행
      console.log("cleanup by count", count);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
