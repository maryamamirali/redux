import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductsData } from "../../config/firebase"

export default function Product () {

const navigate = useNavigate()
const [title , setTitle] = useState('')
const [description , setDescription] = useState('')
const [price , setPrice] = useState('')
const [image , setImage] = useState('')

const onSubmit = async() => {
    try{
        await ProductsData({title, description , price , image})
        alert('product added')
        navigate('/')
    }catch(e) {
        alert(e.message)
    }
}
    return <>


<h1>Add product</h1>
<div class="form-container">
<div class="signup-form">
    <h2>product info.</h2>
    <input className="product-input" onChange={e => setTitle(e.target.value)} placeholder="title"/>
<br /> <br />
<input className="product-input" onChange={e => setDescription(e.target.value)} placeholder="description"/>
<br /> <br />
<input className="product-input" onChange={e => setPrice(e.target.value)} placeholder="price"/>
<br /> <br />
<input className="product-btn" onChange={e => setImage(e.target.files[0])} type="file"/>
<br /> <br />
<button onClick={onSubmit} class="btn">add product</button>
</div>
</div>
</>
}