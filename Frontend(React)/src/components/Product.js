import React, { useEffect, useRef } from "react";
import "../CSS/components/Product.scss";

function Product({ sku, name, price, attributes, type, setlist, list, data }) {
  const isChecked = useRef();
  const types = {
    0: "Size",
    1: "Weight",
    2: "Dimension",
  };
  useEffect(() => {
    isChecked.current.checked = false;
  }, [data]);

  let handleChange = (e) => {
    if (e.target.checked) {
      setlist((prevList) => {
        return [...prevList, e.target.getAttribute("data-sku")];
      });
    } else {
      let newList = list.filter(
        (sku) => sku !== e.target.getAttribute("data-sku")
      );
      setlist(newList);
    }
  };
  return (
    <>
      <div className="product_container">
        <input
          type="checkbox"
          className="delete-checkbox"
          onChange={handleChange}
          data-sku={sku}
          ref={isChecked}
        />

        <div className="details">
          <div className="sku">{sku}</div>
          <div className="name">{name}</div>
          <div className="price">{price} $</div>
          <div className="attributes">
            {types[type]}: {attributes}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
