function ProductCard() {
  return (
    <div className="product-card">
      <h1 className="product-title" style={{ color: "brown" }}>
        Swadist Sudha
      </h1>

      <p style={{color:"red"}}>Product: Arisha Pitha</p>
      <p>Price: ₹299</p>

      <button onClick={() => alert("Order Now!")}>
        Order Now
      </button>
    </div>
  );
}

export default ProductCard;