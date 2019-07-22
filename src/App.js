import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
import { RemoveContext } from "./contexts/RemoveContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = id => {
    setCart(cart.filter(book => book.id == !id));
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart }}>
          <RemoveContext.Provider value={{ removeItem }}>
            <Navigation cart={cart} />
            {/* Routes */}
            <Route exact path="/" component={Products} />
            />
            <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
          </RemoveContext.Provider>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
