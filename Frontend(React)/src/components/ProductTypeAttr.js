import React, { useState } from "react";
import Attribute from "./Attribute";
import "../CSS/components/ProductTypeAttr.scss";

function ProductTypeAttr({ setattrRefList, setgetType }) {
  const [type, setType] = useState("");
  const handleChange = (e) => {
    setType(e.target.value);
    setgetType(e.target.value);
  };
  return (
    <>
      <div id="productType__container">
        <label htmlFor="productType">Type Switcher</label>
        <select
          tabIndex="0"
          name="productType"
          id="productType"
          defaultValue="none"
          onChange={handleChange}
          required
        >
          <option value="none" disabled hidden>
            Type Switcher
          </option>
          <option  value="0">DVD</option>
          <option  value="1">Book</option>
          <option  value="2">Furniture</option>
        </select>
      </div>

      <div>
        <Attribute type={type} setattrRefList={setattrRefList} />
      </div>
    </>
  );
}

export default ProductTypeAttr;
