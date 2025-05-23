import { useState } from "react";
import useTitle from "../js/useTitle";

export default function Counter() {
  const [ count, setCount ] = useState(0);  
  useTitle(`${count} 번 클릭`)    // 순수 JS함수여서 작성 방법 상에 차이가 있음

  return(
    <div>
      <p>Counter = {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        증가
      </button>
    </div>
  );
}