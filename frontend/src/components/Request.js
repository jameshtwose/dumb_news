import "../App.css";
import { useState } from "react";

const Request = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://4qcow4.deta.dev/login/", {
        method: "POST",
        mode: "cors",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
        body: new URLSearchParams({ username: email, password: password }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        props.handleJwt(resJson.access_token);
        setEmail("");
        setPassword("");
        setMessage("Request successful");
      } else {
        setPassword("");
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Request">
      <form onSubmit={handleSubmit}>
        <h1>Simple sentence labeller</h1>
        <h3>Please input a sentence to be labelled</h3>
        <br></br>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Request</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
};

export default Request;