import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../../config/firebase";
import { useSelector , useDispatch } from "react-redux";
import { addtocart } from "../../store/cartSlice";

export default function Detail() {
const navigate = useNavigate();
const params = useParams();
console.log(params, "params");
const [product, setProduct] = useState(null);


const dispatch = useDispatch()

const color = useSelector(state => state.color)
console.log(color , "color");


useEffect(() => {
    getSingleProductData();
}, []);

const getSingleProductData = async () => {
    const productData = await getSingleProduct(params.id);
    setProduct(productData);
};

const Back = () => {
    navigate(-1);
};

if (!product) {
    // While product data is being fetched, render a loading state
    return <div>Loading...</div>;
}

return (<>
<div style={{ backgroundColor: color}} className="main-container">
<div className="product-detail">
<div className="product-image img">
    <img src={product.image} alt={product.title} width="500px"/>
</div>
<div className="product-info detail"> 
    <h2 className="h4 title">"{product.title}"</h2>
<br /><br />
    <h3 className="price h5">{"$" + product.price}</h3>
<br />
    <h4 className="h4 description">{product.description}</h4>
<br />
    <button onClick={() => dispatch(addtocart(product))} className="btn">Add to cart</button>
</div>
</div>
</div>


    </>
);
}