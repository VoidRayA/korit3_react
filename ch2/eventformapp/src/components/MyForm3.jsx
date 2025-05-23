import { useState } from "react"

export default function MyForm3() { 
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email:''
  });

  const handleSubmit = event => {
    alert(`안녕하세요, ${user.lastName} ${user.firstName}. Email 주소는 ${user.email}입니다.`);
    event.preventDefault();
  }

  const handleChange = event => {
    setUser( {...user, [event.target.name]: event.target.value} );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name </label>
      <input type="text" name="firstName" onChange={handleChange} value={user.firstName}/><br />

      <label>Last Name </label>
      <input type="text" name="lastName"  onChange={handleChange} value={user.lastName}/><br />

      <label>E-Mail </label>
      <input type="text" name="email"  onChange={handleChange} value={user.email}/><br />
      <input type="submit" value="제출"/>
    </form>
  )
}