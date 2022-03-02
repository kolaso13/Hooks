import types from "../components/type";

//Datos iniciales
const initialProductState = {
  products: [
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
  ],
  cart: [{ id: 1, title: "Product 1", quantity: 1 }],
  activeProduct: { id: 2, title: "Product 2" },
};

//Funcion que dependiedo de la accion hace algo diferente
const productReducer = (state, action) => {
  switch (action.type) {
    //Mostrar el producto
    case types.productShow:
      return {
        ...state,
        activeProduct: action.payload,
        //activeProduct: state.products.find(product => product === action.payload)
      };

    //Añadir los productos al carrito
    case types.productAddToCart: {
      //los datos recibidos (objeto) en este caso
      const newProduct = action.payload;
      //Variable para comparar los ids
      const cartContainProduct = state.cart.find(
        (product) => product.id === newProduct.id
      );
      //condicion
      return cartContainProduct
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === newProduct.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
          };
    }
    //Eliminar del carrito el producto
    case types.productRemoveFromCart:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    //Eliminar un articulos del carrito
    case types.productRemoveOneFromCart: {
      //Variable para comparar los ids
      const productDelete = state.cart.find(
        (product) => product.id === action.payload
      );
      //condicion
      return productDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((product) =>
              product.id === action.payload
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((product) => product.id !== action.payload),
          };
    }
    default:
      return state;
  }
};

export { initialProductState };
export default productReducer;
