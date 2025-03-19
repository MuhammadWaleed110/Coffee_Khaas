import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OrderNow = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: '',
    items: [],
  });

  const [cart, setCart] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Sample coffee menu items
  const menuItems = [
    { id: 1, name: 'Espresso', price: 3.75 },
    { id: 2, name: 'Cappuccino', price: 4.5 },
    { id: 3, name: 'Latte', price: 4.75 },
    { id: 4, name: 'Premium Arabic Coffee', price: 5.95 },
    { id: 5, name: 'Mocha', price: 4.95 },
    { id: 6, name: 'Americano', price: 3.95 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmOrder = () => {
    console.log('Order confirmed:', { ...orderDetails, cart, total: calculateTotal() });
    setOrderDetails({
      name: '',
      phone: '',
      address: '',
      paymentMethod: '',
      items: [],
    });
    setCart([]);
    setShowConfirmation(false);
    alert('Thank you for your order! We will contact you shortly.');
  };

  return (
    <div id="order-now" className="min-h-screen py-12" style={{ backgroundColor: '#F5E6E0' }}>
      <div className="container mx-auto px-4 font-serif">
        <h2
          className="text-4xl font-light font-cursive mb-12 text-primary"
          data-aos="fade-down" // Add AOS animation
        >
          Order Your Coffee
        </h2>

        {/* Menu Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-right" // Add AOS animation
          >
            <h3 className="text-2xl font-semibold mb-6 text-brown-700">Menu</h3>
            <div className="grid gap-4">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 border rounded hover:bg-brown-50 transition duration-300"
                  data-aos="fade-up" // Add AOS animation
                >
                  <div>
                    <h4 className="font-medium font-semibold">{item.name}</h4>
                    <p className="text-brown-600">$ {item.price}</p>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-primary/90 text-white px-3 py-2 rounded-md group-hover:bg-white group-hover:text-primary/90 transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div
            className="bg-white p-6 rounded-lg shadow-lg"
            data-aos="fade-left" // Add AOS animation
          >
            <h3 className="text-2xl font-semibold mb-6 text-brown-700">Your Cart</h3>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <div className="border rounded-lg p-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-3 p-2 hover:bg-brown-50"
                    data-aos="fade-up" // Add AOS animation
                  >
                    <span className="font-semibold">
                      {item.name} - $ {item.price}
                    </span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-primary/90 text-white px-3 py-2 rounded-md group-hover:bg-white group-hover:text-primary/90 transition-all"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="border-t mt-4 pt-4">
                  <p className="font-bold text-lg text-primary">Total: $ {calculateTotal()}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
          data-aos="fade-up" // Add AOS animation
        >
          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-brown-400 outline-none"
                value={orderDetails.name}
                onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Phone</label>
              <input
                type="tel"
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-brown-400 outline-none"
                value={orderDetails.phone}
                onChange={(e) => setOrderDetails({ ...orderDetails, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Delivery Address</label>
              <textarea
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-brown-400 outline-none"
                value={orderDetails.address}
                onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Payment Method</label>
              <select
                required
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none"
                value={orderDetails.paymentMethod}
                onChange={(e) => setOrderDetails({ ...orderDetails, paymentMethod: e.target.value })}
              >
                <option value="">Select Payment Method</option>
                <option value="easypaisa">EasyPaisa</option>
                <option value="jazzcash">JazzCash</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>

            {/* Payment Instructions */}
            {orderDetails.paymentMethod && (
              <div
                className="bg-brown-50 p-4 rounded-lg"
                data-aos="fade-up" // Add AOS animation
              >
                <h4 className="font-semibold mb-2 text-brown-800">Payment Instructions</h4>
                {orderDetails.paymentMethod === 'easypaisa' && (
                  <p className="text-primary">Send payment to EasyPaisa account: 0315-5570362</p>
                )}
                {orderDetails.paymentMethod === 'jazzcash' && (
                  <p className="text-brown-700">Send payment to JazzCash account: 0315-5570362</p>
                )}
                {orderDetails.paymentMethod === 'bank' && (
                  <div className="text-brown-700">
                    <p>Bank: Sample Bank</p>
                    <p>Account Title: Coffee Khaas</p>
                    <p>Account Number: 1234-5678-9012</p>
                    <p>IBAN: PK00SAMP0123456789012</p>
                  </div>
                )}
              </div>
            )}

            <button
              type="submit"
              className="bg-primary/90 text-white px-3 py-2 rounded-md group-hover:bg-white group-hover:text-primary/90 transition-all"
              disabled={cart.length === 0}
            >
              Review Order
            </button>
          </div>
        </form>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            data-aos="fade-in" // Add AOS animation
          >
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4 text-brown-800">Confirm Your Order</h3>
              <div className="mb-4">
                <p>
                  <strong>Name:</strong> {orderDetails.name}
                </p>
                <p>
                  <strong>Phone:</strong> {orderDetails.phone}
                </p>
                <p>
                  <strong>Address:</strong> {orderDetails.address}
                </p>
                <p>
                  <strong>Payment Method:</strong> {orderDetails.paymentMethod}
                </p>
                <p>
                  <strong>Total Amount:</strong> $ {calculateTotal()}
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={confirmOrder}
                  className="flex-1 bg-primary/80 text-white py-2 rounded-lg hover:primary/10"
                >
                  Confirm Order
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="flex-1 bg-primary/80 text-white py-2 rounded-lg hover:primary/10"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderNow;