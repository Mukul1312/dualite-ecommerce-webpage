import Card from "../components/Card/Card";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Mukul1312/dualite-dummy-api/main/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products.length) return "Loading..";

  return (
    <div className="products-container">
      <h1 style={{ textAlign: "center" }}>Explore our Product</h1>
      <div
        style={{ padding: "1em", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "30px", margin: "10px" }}
      >
        {products.map((product) => (
          <Card
            name={product.name}
            price={"$" + product.price}
            key={product.name}
            rating={product.rating}
            reviewCnt={product.reviews}
            img={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
