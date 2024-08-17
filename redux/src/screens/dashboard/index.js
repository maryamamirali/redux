import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetProduct } from "../../config/firebase";

//fonts
<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400..700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Edu+VIC+WA+NT+Beginner:wght@400..700&display=swap');

</style>


export default function Dashboard() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await GetProduct();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    console.log('products ---->', products);

    const gotoDetail = (product) => {
        navigate('/detail/' + product.id);
    };

return <>


<main className="main-container">

<div>
{products.map((item) => (
<div key={item.id} onClick={() => gotoDetail(item)}  className="product product-detail">
    <img className="product-image" src={item.image} alt={item.title}/>
    <br/>    <br/>
<div className="product-info ">
    <h1 className="h4 ">{item.title}</h1>
    <br/>
    <p className="h5 ">{'$' + item.price}</p>
    <br/>

    <button className="btn">Add to cart</button>
    </div>
</div>
))}
</div>
</main>
</>
}