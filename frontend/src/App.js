import "./App.css";
import Request from "./components/Request.js"

import { useEffect, useState } from "react";

function App() {
  useEffect(() => {setJwt(localStorage.getItem("jwt"))}, [])
  const [jwt, setJwt] = useState("");
  const handleJwt = (jwt) => {
    setJwt(jwt); 
    // localStorage.setItem("jwt", jwt);
  };
  return (<div>{<Request handleJwt={handleJwt}/>}</div>
          /* <div></div> */
  );
}

export default App;