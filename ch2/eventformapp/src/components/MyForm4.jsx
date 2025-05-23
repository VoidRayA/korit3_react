import { useState } from "react"

export default function MyForm4() { 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    alert(`안녕하세요, ${lastName} ${firstName}. Email 주소는 ${email}입니다.`);
    event.preventDefault();
  }

  const handleChange = event => {
    const { name, value } = event.target;
    const setters = {
      firstName: setFirstName,
      lastName: setLastName,
      email: setEmail,
    };
    setters[name](value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name </label>
      <input type="text" name="firstName" onChange={handleChange} value={firstName}/><br />

      <label>Last Name </label>
      <input type="text" name="lastName"  onChange={handleChange} value={lastName}/><br />

      <label>E-Mail </label>
      <input type="text" name="email"  onChange={handleChange} value={email}/><br />
      <input type="submit" value="제출"/>
    </form>
  )
}