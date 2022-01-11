import { createRef, useRef, useState } from "react";

export default function FuncComponent5() {
  const [value, setValue] = useState("");
  const input1Ref = createRef(); // 항상 ref 생성해서 render 될 때마다 넣는 방식
  const input2Ref = useRef(); // 한번 ref 생성해서 넣고 render 시에도 해당 ref를 유지

  console.log(input1Ref.current, input2Ref.current);

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
