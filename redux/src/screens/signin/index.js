import { useState } from "react"
import { Login } from "../../config/firebase"
import { useNavigate } from "react-router-dom"
export default function SignIn () {

const [email , setEmail] = useState()
const [password , setPassword] = useState()
const navigate = useNavigate()

const signin = async() => {
try{
    await Login(email , password)
    alert('logged in')
    navigate('/product')
}catch(e) {
    alert(e.message)
}
}
    return <>
<div  className="form-container">
<div className="signup-form">
    <h1>Welcome Back!</h1>
    <br />
<input className="signin-input input-wrapper" onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
<input className="signin-input input-wrapper" onChange={(e) => setPassword + (e.target.value)} placeholder="password" />
<button className="btn" onClick={() => signin()}>login</button>
</div>
</div>
</>
}