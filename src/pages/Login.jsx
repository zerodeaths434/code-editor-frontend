import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {v4 as uid} from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [username, setUsername] = useState("");
  const[uuid,setUuid]=useState("");


  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username.length>=30)
    {
      toast.error("USERNAME SHOULD BE LESS THAN 30 CHARACTERS",{
        position:"top-center"
      })
      setUsername("");
      return;
    }
    if(uuid.length>40)
    {
      toast.error("UUID SHOULD BE LESS THAN 40 CHARACTERS",{
        position:"top-center"
      })
      setUuid("");
      return;
    }
    fetch("https://codeeditor-ten9.onrender.com/register",{
      method:"POST",
      body:JSON.stringify({
        username:username,
        uuid:uuid
      }),
      headers:{
        "Content-Type":"application/json",
      }
    }).then(res=>res.json()).then(data=>console.log(data));
    navigate(`/${uuid}`,{
        state:username
    })
}

const generateUuid=()=>{
  setUuid(uid)
}


  return (
    <section className="login">
       <ToastContainer />
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field" >
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="username"
              required
            />
            <span></span>
            <label>Username</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              required
              onChange={(e) => setUuid(e.target.value)}
              value={uuid}
              name="uuid"
              id="uuid"
            />
            <span></span>
            <label>Uuid</label>
          </div>
          <p className="signup-link" onClick={generateUuid}>generate uid</p>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
