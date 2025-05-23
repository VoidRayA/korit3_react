import { useState } from "react"

export default function MyForm2() {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    alert(`${text} 라고 입력하셨습니다!`);
    event.preventDfault();
  }

  // input창에 타이핑하는 내용이 갱신되면(text 상태가 바뀔 때 -> setText를 사용 -> setText()의 argument가 input창에 쓰는 내용이 됨)
  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={text}/>
      <br />
      <br />
      <input type="submit" value="클릭하세요" />
    </form>
  )
}