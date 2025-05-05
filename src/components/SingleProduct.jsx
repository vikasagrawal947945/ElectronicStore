import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
 function SingleProduct() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        getSingleProduct(id);
    }, [id]);

    async function getSingleProduct() {
        const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`)
        console.log(response.data.product);
        setProduct(response.data.product);
    }



    return <div>SingleProduct</div>
}

export default SingleProduct;