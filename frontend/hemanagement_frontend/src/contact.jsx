import { useState } from "react";
function Contact() {
  let [name, setName] = useState("")
  let [age, setAge] = useState("18")
  let [emailid, setEmailid] = useState("") 
  let [colname,setColname]=useState("VFSTR")
  let registerForm = (event) => {
    event.preventDefault();
    console.log(name);
  }

  return (
    <div>
      <h1>Contact Page called</h1>
    <form onSubmit={registerForm}>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name"></input>
      <br/>
      <input type="number" value={age} onChange={(event) => setAge(event.target.value)} placeholder="enter your age"></input>
      <br/>
      <input type="email" value={emailid} onChange={(event) => setEmailid(event.target.value)} placeholder="enter your email"></input>
      <br/>
      <input type="text" value={colname} onChange={(event) => setColname(event.target.value)} placeholder="enter your college name"></input>
      <br/>
      <input type="submit" value="submit"></input>
      <br/>
    </form>
    <p>{name}</p>
    <p>{age}</p>
    <p>{emailid}</p>
    <p>{colname}</p>
    </div>
  );
}
export default Contact