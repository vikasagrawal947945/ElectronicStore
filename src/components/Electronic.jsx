import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";

function Electronic() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRandom();
  }, []);

  async function getRandom() {
    try {
      const result = await axios.get("https://fakestoreapi.in/api/products");
      const products = result.data.products;
      setData(products);
      console.log(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {data.length > 0 ? (
          data.map((product) => <Item key={product.id} product={product} />)
        ) : (
          <p className="text-gray-500 text-lg">Loading products...</p>
        )}
      </div>
    </>
  );
}

export default Electronic;
