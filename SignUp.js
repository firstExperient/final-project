import { useState } from "react";
import { url } from "../App.js";

export default function SignUp() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const sign = async () => {
    //add vaildation check here
    const data ={
        "name": user,
        "password": password,
        "mail": mail,
      }
    const res = await fetch(url + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="שם משתמש"
        value={user}
        onChange={({ target }) => setUser(target.value)}
      />
      <input
        type="password"
        placeholder="סיסמא"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        type="mail"
        placeholder="מייל"
        value={mail}
        onChange={({ target }) => setMail(target.value)}
      />
      <button onClick={sign}>אישור</button>
    </form>
  );
}
