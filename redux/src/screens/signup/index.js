import { useState } from "react"
import { Register } from "../../config/firebase"
import { useNavigate } from "react-router-dom"

export default function SignUp () {

const [email , setEmail] = useState()
const [password , setPassword] = useState()
const navigate = useNavigate()

const signup = () => {
try{
    Register(email , password)
    alert('signed up')
    navigate('/signin')
}catch(e) {
    alert(e.message)
}
}

return <>

<div className="form-container">
<div className="signup-form">
    <h2 className="signup-h2">signup</h2>
<input className="signup-input" onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
<input className="signup-input" onChange={(e) => setPassword(e.target.value)} placeholder="password"/>

<button className="btn" onClick={() => signup()}>register</button>
</div>
</div>
</>
}