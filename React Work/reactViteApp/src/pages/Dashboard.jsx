import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      
    }
    fetchData();
  }, [])
  return products.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="productContainer">
      {products.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              width: "300px",
            }}
          >
            {item.title}
            <br />
            <img
              style={{
                height: "100px",
                width: "100px",
              }}
              src={item.image}
              alt={item.title}
            />
            <p>{"Price: " + item.price}</p>
            <p>{item.description}</p>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Dashboard