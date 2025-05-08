import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { FaRupeeSign } from "react-icons/fa";
import axios from "axios";
import { CartContext } from "../contexts/cartProvider";


function SingleProduct() {
  const {handleSubmit}= useContext(CartContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState([]);
  const [cart ,setCart] = useState([]);
  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    setLoading(true);
    const product = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
    console.log(product.data.product);
    setSingleProduct(product.data.product);
    setLoading(false);
  }
if (loading) return <Loader />;


  return (
    <>
      {singleProduct && (
        <div className="flex flex-wrap md:flex-nowrap justify-center items-start min-h-screen bg-gray-100 p-6">
          <div className="left product-image w-full md:w-1/2 flex justify-center items-center p-4">
            <img
              className="w-full max-w-lg rounded-2xl"
              src={singleProduct.image}
              alt={singleProduct.title}
            />
          </div>
          <div className="right product-details w-full md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-4">{singleProduct.title}</h2>
            <ul className="text-gray-600 mb-4">
              <li>
                <strong>Brand:</strong> {singleProduct.brand}
              </li>
             
            </ul>

            <p className="text-gray-700 mb-4">{singleProduct.description}</p>

            <p className="text-2xl font-bold text-green-600 mb-6 flex items-center">
              <FaRupeeSign className="inline-block" />{" "}
              {singleProduct.price-singleProduct.discount}
              {singleProduct.price && (
                <small className="line-through text-xs text-gray-500 ml-2">
                  {singleProduct.price}
                </small>
              )}
            </p>

            <div className="buttons flex gap-4">
              <button onClick={()=>handleSubmit(singleProduct)}
                className="px-4 py-2 border-2 border-green-400 bg-green-400 text-white rounded-2xl hover:bg-green-500  cursor-pointer" >
                Add To Cart </button>
              <Link className="px-4 py-2 border-2 border-pink-400 bg-pink-400 text-white rounded-2xl hover:bg-pink-500" >Add to Wishlist</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;