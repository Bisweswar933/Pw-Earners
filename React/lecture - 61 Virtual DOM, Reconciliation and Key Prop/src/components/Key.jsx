import { useState } from "react";

function Product({ name }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => setQuantity((prev) => prev + 1)}>
        Quantity : {quantity}
      </button>
    </div>
  );
}

function Key() {
  const [products, setProducts] = useState([
    { id: 1, name: "mouse" },
    { id: 2, name: "keyboard" },
    { id: 3, name: "monitor" },
    { id: 4, name: "headphone" },
  ]);

  function removeFirstProduct() {
    setProducts((prev) => prev.slice(1));
  }


  function Addproduct() {
    setProducts((prev) => [
      //   ...prev,
      //  { id :5,name:"laptop"}

      { id: 5, name: "laptop" },
     ...prev

    ])
  }


  function Addproduct() {
    setProducts((prev) => [
      //   ...prev,
      //  { id :5,name:"laptop"}

      { id: 6, name: "mobile" },
     ...prev

    ])
  }



  return (
    <>
      <ul>
        {products.map(({ id, name }, i) => (
          <Product key={id} name={name} />
        ))}
      </ul>

      <button onClick={removeFirstProduct}>Remove First Product</button>
      <br />
      <button onClick={Addproduct}>Add new product</button>
      <br />
      <button></button>
    </>
  );
}

export default Key;