import { useState } from "react";
import { url } from "../App.js";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const log = async () => {
    //add vaildation check here
    const data ={
        "name": user,
        "password": password,
      }
    const res = await fetch(url + "/users", {
      method: "PUT",
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
      <button onClick={log}>אישור</button>
    </form>
  );
}
