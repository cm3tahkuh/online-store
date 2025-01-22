import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Загрузка товаров из корзины
    axios.get('http://localhost:5000/api/cart')
      .then(response => {
        setCart(response.data);
      })
      .catch(error => console.error('Error fetching cart data:', error));
  }, []);

  const handleAddToCart = (productId) => {
    const newCartItem = {
      productId: productId,
      quantity: quantity
    };

    axios.post('http://localhost:5000/api/cart', newCartItem)
      .then(response => {
        setCart([...cart, response.data]);
      })
      .catch(error => console.error('Error adding to cart:', error));
  };

  const handleRemoveFromCart = (cartItemId) => {
    axios.delete(`http://localhost:5000/api/cart/${cartItemId}`)
      .then(() => {
        setCart(cart.filter(item => item.id !== cartItemId));
      })
      .catch(error => console.error('Error removing from cart:', error));
  };

  return (
    <div>
      <h1>Корзина</h1>
      <div>
        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          cart.map(item => (
            <div key={item.id}>
              <h2>{item.product.name}</h2>
              <p>Цена: {item.product.price}</p>
              <p>Количество: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Удалить</button>
            </div>
          ))
        )}
      </div>


      <button onClick={() => handleAddToCart(1)}>Добавить товар в корзину</button>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
    </div>
  );
};

export default Cart;
