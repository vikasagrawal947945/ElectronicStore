 import { Link } from "react-router-dom";
function Item({ product }) {
   function trimContent(input, length) {
     return input.length > length
       ? input.split(" ").slice(0, length + 1).join(" ") + "..."
       : input;
   }
 
   return (
    <div className="h-[310px] w-[22%] bg-white hover:bg-red-400 hover:text-black rounded-xl shadow-md hover:shadow-xl transition-all ease-linear  duration-[300ms] p-5 flex flex-col justify-between border border-gray-300">


       {/* Product Image */}
       <Link to={`/product/${product.id}`}>
       <img
         src={product.image}
         alt={product.title}
         className="h-[140px] w-[140px] object-contain mx-auto transition-transform duration-300 hover:scale-105"
       />
      </Link>
 
       {/* Product Title */}
       <h3 className="mt-4 text-md font-semibold text-center text-gray-700">
         {trimContent(product.title, 8)}
       </h3>
 
       {/* Product Price & Category */}
       <div className="flex justify-between items-center mt-3">
         <p className="text-green-600 font-bold text-lg">${product.price}</p>
         <p className="text-gray-400 text-sm capitalize">{product.category}</p>
       </div>
 
      
     </div>
   );
 }
 
 export default Item;
 