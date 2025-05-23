// "use client";

// import { motion, AnimatePresence } from "framer-motion";

// function Cart({
//   cart,
//   removeFromCart,
//   addToCart,
//   clearCart,
//   setShowOrderForm,
//   closeCart,
// }) {
//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const groupedCart = cart.reduce((acc, item) => {
//     if (!acc[item.vendor]) {
//       acc[item.vendor] = [];
//     }
//     acc[item.vendor].push(item);
//     return acc;
//   }, {});

//   return (
//     <div className="h-full flex flex-col">
//       {/* Header */}
//       <div className="p-4 bg-sky-800 text-white flex justify-between items-center">
//         <h2 className="text-xl font-bold">Your Order</h2>
//         <motion.button
//           className="p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-70 transition-colors flex items-center justify-center"
//           whileHover={{ rotate: 90 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={closeCart}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-gray-800"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </motion.button>
//       </div>

//       {/* Empty Cart State */}
//       {cart.length === 0 ? (
//         <div className="flex-1 flex flex-col items-center justify-center p-6">
//           <div className="w-24 h-24 rounded-full bg-sky-50 flex items-center justify-center mb-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-12 w-12 text-sky-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//               />
//             </svg>
//           </div>
//           <h3 className="text-xl font-medium text-gray-800 mb-2">
//             Your cart is empty
//           </h3>
//           <p className="text-gray-500 text-center mb-6">
//             Add some delicious items from the menu!
//           </p>
//           <motion.button
//             className="px-4 py-2 bg-sky-600 text-white rounded-lg font-medium"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={closeCart}
//           >
//             Browse Menu
//           </motion.button>
//         </div>
//       ) : (
//         <>
//           {/* Items in Cart */}
//           <div className="flex-1 overflow-y-auto p-4">
//             {Object.entries(groupedCart).map(([vendor, items]) => (
//               <div key={vendor} className="mb-6">
//                 <h3 className="font-bold text-sky-700 border-b border-sky-100 pb-2 mb-2">
//                   {vendor}
//                 </h3>
//                 <AnimatePresence>
//                   {items.map((item) => (
//                     <motion.div
//                       key={`${item.vendor}-${item.id}`}
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="flex justify-between items-center py-2 border-b border-gray-100"
//                     >
//                       <div>
//                         <p className="font-medium">{item.name}</p>
//                         <p className="text-gray-600">
//                           ₹{item.price} x {item.quantity}
//                         </p>
//                       </div>
//                       <div className="flex items-center">
//                         <motion.button
//                           className="bg-sky-100 hover:bg-sky-200 text-sky-800 rounded-full w-6 h-6 flex items-center justify-center mr-2"
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => removeFromCart(item)}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M20 12H4"
//                             />
//                           </svg>
//                         </motion.button>
//                         <span className="mx-1">{item.quantity}</span>
//                         <motion.button
//                           className="bg-sky-100 hover:bg-sky-200 text-sky-800 rounded-full w-6 h-6 flex items-center justify-center ml-2"
//                           whileHover={{ scale: 1.1 }}
//                           whileTap={{ scale: 0.9 }}
//                           onClick={() => addToCart(item)}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                             />
//                           </svg>
//                         </motion.button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>

//           {/* Cart Summary */}
//           <div className="p-4 border-t border-gray-200">
//             <div className="flex justify-between items-center font-bold text-lg mb-4">
//               <span>Total:</span>
//               <span className="text-sky-800">₹{calculateTotal()}</span>
//             </div>

//             <div className="flex flex-col gap-2">
//               <motion.button
//                 className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-lg font-medium"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() => setShowOrderForm(true)}
//               >
//                 Proceed to Checkout
//               </motion.button>

//               <motion.button
//                 className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 py-2 px-4 rounded-lg font-medium"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={clearCart}
//               >
//                 Clear Cart
//               </motion.button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;


"use client";

import { motion, AnimatePresence } from "framer-motion";

function Cart({ cart, removeFromCart, addToCart, clearCart, setShowOrderForm, closeCart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Ensure Jain and Non-Jain variants of the same food are treated as separate entries
  const groupedCart = cart.reduce((acc, item) => {
    const uniqueKey = `${item.vendor}-${item.id}-${item.jain}`; // Jain vs Non-Jain distinction
    if (!acc[uniqueKey]) {
      acc[uniqueKey] = [];
    }
    acc[uniqueKey].push(item);
    return acc;
  }, {});

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 bg-sky-800 text-white flex justify-between items-center">
        <h2 className="text-xl font-bold">Your Order</h2>
        <motion.button
          className="p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-70 transition-colors flex items-center justify-center"
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={closeCart}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </motion.button>
      </div>

      {/* Empty Cart State */}
      {cart.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <h3 className="text-xl font-medium text-gray-800 mb-2">Your cart is empty</h3>
          <p className="text-gray-500 text-center mb-6">Add some delicious items from the menu!</p>
          <motion.button
            className="px-4 py-2 bg-sky-600 text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={closeCart}
          >
            Browse Menu
          </motion.button>
        </div>
      ) : (
        <>
          {/* Items in Cart */}
          <div className="flex-1 overflow-y-auto p-4">
            {Object.entries(groupedCart).map(([vendor, items]) => (
              <div key={vendor} className="mb-6">
                <h3 className="font-bold text-sky-700 border-b border-sky-100 pb-2 mb-2">{vendor}</h3>
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex justify-between items-center py-2 border-b border-gray-100"
                    >
                      <div>
                        <p className="font-medium">{item.name} {item.jain ? "(Jain)" : "(Non-Jain)"}</p>
                        <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                      </div>
                      <div className="flex items-center">
                        <motion.button
                          className="bg-sky-100 hover:bg-sky-200 text-sky-800 rounded-full w-6 h-6 flex items-center justify-center mr-2"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </motion.button>
                        <span className="mx-1">{item.quantity}</span>
                        <motion.button
                          className="bg-sky-100 hover:bg-sky-200 text-sky-800 rounded-full w-6 h-6 flex items-center justify-center ml-2"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => addToCart(item)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Total:</span>
              <span className="text-sky-800">₹{calculateTotal()}</span>
            </div>

            <div className="flex flex-col gap-2">
              <motion.button
                className="bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-lg font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowOrderForm(true)}
              >
                Proceed to Checkout
              </motion.button>

              <motion.button
                className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 py-2 px-4 rounded-lg font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={clearCart}
              >
                Clear Cart
              </motion.button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;