import { useEffect, useRef, useState } from "react";

const BUTTON_TEXT = {
  NORMAL: "버튼이 눌리지 않았다",
  CLICKED: "버튼이 눌렸다",
};

export default function Button() {
  const [msg, setMsg] = useState(BUTTON_TEXT.NORMAL);
  const timer = useRef();

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.currnet);
      }
    };
  }, []);

  return (
    <div>
      <button onClick={click} disabled={msg === BUTTON_TEXT.CLICKED}>
        button
      </button>
      <p>{msg}</p>
    </div>
  );

  function click() {
    setMsg(BUTTON_TEXT.CLICKED);
    timer.current = setTimeout(() => {
      setMsg(BUTTON_TEXT.NORMAL);
    }, 5000);
  }
}
