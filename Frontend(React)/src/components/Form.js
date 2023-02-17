import React, { useRef, useEffect } from "react";
import ProductTypeAttr from "./ProductTypeAttr";
import "../CSS/components/Form.scss";

function Form({ setattrRefList, setrefList, setgetType }) {
  const sku = useRef();
  const name = useRef();
  const price = useRef();

  useEffect(() => {
    setrefList([sku, name, price]);
  }, [setrefList]);

  return (
    <>
      <form id="product_form">
        <div className="form_input">
          <label htmlFor="sku">SKU</label>
          <input type="text" name="sku" id="sku" ref={sku} autoComplete="off" />
        </div>

        <div className="form_input">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={name}
            autoComplete="off"
          />
        </div>

        <div className="form_input">
          <label htmlFor="price">price($)</label>
          <input
            type="number"
            name="price"
            id="price"
            autoComplete="off"
            ref={price}
          />
        </div>

        <ProductTypeAttr
          setattrRefList={setattrRefList}
          setgetType={setgetType}
        />
      </form>
    </>
  );
}

export default Form;
