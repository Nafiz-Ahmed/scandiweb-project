import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import Product from "./components/Product";
import axios from "axios";
import "./CSS/Products.scss";

function Products({ setGlobalMessage }) {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const handleMassClick = (e) => {
    e.preventDefault();
    if (!list[0]) return;
    let obj = {};

    for (let x = 0; x < list.length; x++) {
      obj[x] = list[x];
    }

    axios
      .post("/api/products/delete", {
        data: obj,
      })
      .then((e) => {
        setGlobalMessage(e.data);
        getData();
        setList([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function getData() {
    axios
      .get("/api/products/get")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <header className="product_page_header">
        <h1>Product List</h1>

        <div>
          <Link to="addproduct" id="add_btn">
            {" "}
            ADD{" "}
          </Link>
          <button id="delete-product-btn" onClick={handleMassClick}>
            MASS DELETE
          </button>
        </div>
      </header>

      <main className="product_page_main">
        {data.length === 0 && (
          <p className="no_product_alert">No products to show</p>
        )}
        {data &&
          data.map((product) => (
            <Product
              name={product.name}
              sku={product.sku}
              price={product.price}
              attributes={product.attribute}
              type={product.type}
              setlist={setList}
              list={list}
              data={data}
              key={product.sku}
            />
          ))}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Products;
