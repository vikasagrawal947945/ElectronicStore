function Item({ product }) {
   function trimContent(input, length) {
     return input.length > length
       ? input.split(" ").slice(0, length + 1).join(" ") + "..."
       : input;
   }
 
   return (
     <div className="h-[400px] w-[22%] bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-5 flex flex-col justify-between border border-gray-200">
       {/* Product Image */}
       <img
         src={product.image}
         alt={product.title}
         className="h-[140px] w-[140px] object-contain mx-auto transition-transform duration-300 hover:scale-105"
       />
 
       {/* Product Title */}
       <h3 className="mt-4 text-md font-semibold text-center text-gray-700">
         {trimContent(product.title, 8)}
       </h3>
 
       {/* Product Price & Category */}
       <div className="flex justify-between items-center mt-3">
         <p className="text-green-600 font-bold text-lg">${product.price}</p>
         <p className="text-gray-400 text-sm capitalize">{product.category}</p>
       </div>
 
       {/* Buttons */}
       <div className="flex gap-3 mt-4">
         <button className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition">
           Add to Cart
         </button>
         <button className="flex-1 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-medium transition">
           Buy Now
         </button>
       </div>
     </div>
   );
 }
 
 export default Item;
 