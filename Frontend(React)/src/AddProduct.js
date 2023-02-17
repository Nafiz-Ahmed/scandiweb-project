import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import Form from "./components/Form";
import axios from "axios";
import "./CSS/AddProduct.scss";

function AddProduct({ setGlobalMessage }) {
  const [refList, setrefList] = useState([]);
  const [attrRefList, setattrRefList] = useState([]);
  const [getType, setgetType] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let data = {};

    refList.forEach((input) => {
      data[input.current.name] = input.current.value;
    });

    attrRefList.forEach((input) => {
      data[input.current.name] = input.current.value;
    });

    data["type"] = getType;

    if (refList.length <= 0) return;
    if (attrRefList.length <= 0) return;
    if (getType === "2" && attrRefList.length < 3) return;
    if (getType === "") return;

    axios
      .post("/api/products/add", {
        data: data,
      })
      .then((e) => setGlobalMessage(e.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Helmet>
        <title>Add products</title>
      </Helmet>

      <header className="addProduct_page_header">
        <h1>Product ADD</h1>

        <div>
          <button onClick={handleClick} type="submit" id="save_btn">
            Save
          </button>
          <Link to="/" id="cancle_btn">
            Cancle
          </Link>
        </div>
      </header>

      <main className="addProduct_page_main">
        <Form
          setattrRefList={setattrRefList}
          setrefList={setrefList}
          setgetType={setgetType}
        />
      </main>

      <Footer />
    </>
  );
}

export default AddProduct;
