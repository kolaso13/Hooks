import React, { useState } from "react";

const initialProduct = {
  title: "Titulo",
  description: "Descripcion",
  image: {
      small: "",
      medium: "",
      big:"",
  }
};
const ProductApp = () => {
  const [product, setProduct] = useState(initialProduct);
  
  const updateProduct = (property, value) =>{
      setProduct({
          ...product,
          [property]: value
      });
  }
  return (
    <div>
    <button onClick={() => updateProduct("title", "Nuevo titulo")}>
        Update
    </button>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
        <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};

export default ProductApp;
