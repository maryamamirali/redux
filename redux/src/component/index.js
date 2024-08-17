import { useDispatch , useSelector } from "react-redux"
import { setTheme } from "../store/themeSlice"
import { deltocart } from "../store/cartSlice";
import { useState } from "react";

export default function Header () {


const dispatch = useDispatch()

const cart = useSelector(state => state.cart)

console.log(cart , "cart");

const [product, setProduct] = useState(null);
return <>

<div>
<nav className='navbar'>
<h1>e-commerce store</h1>
<a href='/'>home</a>
<a href='/product' >add product</a>
<div className="box red" onClick={() => dispatch(setTheme('red'))}></div>
<div className="box purple" onClick={() => dispatch(setTheme('purple'))}></div>
<div className="box pink" onClick={() => dispatch(setTheme('pink'))}></div>

<div>
<button className='navbtn'><a href='/signup' >signup</a></button>
<button className='navbtn'><a href='/signin' >signin</a></button>
<button className='navbtn'><a href='/' >back</a></button>

</div>


</nav>
<br /><br /><br />
</div>


<img className="p" src="https://static.vecteezy.com/system/resources/previews/035/697/424/original/shopping-cart-icon-flat-design-best-icon-free-vector.jpg" width="4%"/>
<p className="h5 p">{cart.length}</p>
<br />
<button className="delbtn" onClick={() => dispatch(deltocart(product))}>delete</button>

</>
}