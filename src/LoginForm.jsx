import { useState } from "react"


const LoginForm = () => {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [message, setMessage] = useState("")
    let [showPassword, setShowPassword] = useState(false);
    let [color, setColor] = useState("");


    console.log(username);
    console.log(password);
    
    
  return (
    <div className="login-container">
        <input type="text" placeholder='enter your username' value={username} onChange={(e)=> setUsername(e.target.value)} />
        <input type={showPassword ? "text" : "password"} placeholder='enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <div className="checkbox-container">
            <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
            />
            <label>Show Password</label>
        </div>

        <button 
            disabled={username === "" || password === ""}
            onClick={()=>{
            if(username=="admin" && password=="123"){
                setMessage("Login Successfull")
                setColor("green");
                setUsername("");
                setPassword("");
            }else{
                setMessage("Invalid Credentials")
                setColor("red");
            }
        }}>Login</button>
        <p style={{ color: color }}>{message}</p>

    </div>
  )
}


export default LoginForm