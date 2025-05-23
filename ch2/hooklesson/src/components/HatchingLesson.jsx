import { useState } from "react";

export default function HatcingLesson() {
  const [ count1, setCount1 ] = useState(0);
  const [ count2, setCount2 ] = useState(0);
  
  const increment = () => {
    setCount1(count1 + 1);
    setCount2(count1 + 1);
    // 실행시켜서 확인하면 1 | 2가 아니라 1 | 1
    // 일괄처리 되는 것을 알 수 있음
  }

  return(
    <>
      <p>현재 카운터 : {count1} | {count2}</p>
      <button onClick={increment}>++</button>
    </>
  );
}