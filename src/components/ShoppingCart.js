import React, { useState } from "react";

const ShoppingCart = () => {
  const initialCart = [
    { id: 1, title: "Product", description: "Descripcion" },
    { id: 2, title: "Product2", description: "Descripcion2" },
    { id: 3, title: "Product3", description: "Descripcion3" },
  ];

  const deleteProduct = (productId) => {
    const changedCart = cart.filter((product) => product.id !== productId);
    setCart(changedCart);
  };

  const addProduct = (newProduct) => {
    newProduct.id = Date.now();

    const changedCart = [newProduct, ...cart];

    setCart(changedCart);
  };

  const updateProduct = (editProduct) => {
    const changedCart = cart.map((product) =>
      product.id === editProduct.id ? editProduct : product
    );
    setCart(changedCart);
  };
  const [cart, setCart] = useState(initialCart);
  return (
    <div>
      <button
        onClick={() =>
          addProduct({
            title: "Nuevo titulo",
            description: "Nueva descripcion",
          })
        }
      >
        Add
      </button>

      {cart.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button
            onClick={() =>
              updateProduct({
                id: product.id,
                title: "Edit titulo",
                description: "Edit descripcion",
              })
            }
          >
            Update
          </button>
        </div>
      ))}
        <br/>
      <pre>
          {JSON.stringify(cart, null, 2)}
      </pre>
    </div>
  );
};

export default ShoppingCart;
