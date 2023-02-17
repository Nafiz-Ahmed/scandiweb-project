import React, { useEffect, useState, useRef } from "react";
import "../CSS/components/Attribute.scss";

function Attribute({ type, setattrRefList }) {
  const [ShowDVD, setShowDVD] = useState(false);
  const [ShowBook, setShowBook] = useState(false);
  const [ShowFurniture, setShowFurniture] = useState(false);

  const size = useRef();
  const weight = useRef();
  const height = useRef();
  const width = useRef();
  const length = useRef();

  useEffect(() => {
    type === "0" ? setShowDVD(true) : setShowDVD(false);
    type === "1" ? setShowBook(true) : setShowBook(false);
    type === "2" ? setShowFurniture(true) : setShowFurniture(false);

    type === "0" && setattrRefList([size]);

    type === "1" && setattrRefList([weight]);

    type === "2" && setattrRefList([height, width, length]);
  }, [type, setattrRefList]);

  return (
    <div className="attribute_container">
      {/* DVD Attributes */}
      {ShowDVD && (
        <div id="DVD">
          <div>
            <label htmlFor="size">Size (MB)</label>
            <input
              tabIndex="0"
              type="number"
              autoComplete="off"
              name="size"
              id="size"
              ref={size}
              data-type={0}
            />
          </div>
          <p className="product-description">
            *Please provide the size of DVD in MB.
          </p>
        </div>
      )}

      {/* Book Attributes */}
      {ShowBook && (
        <div id="Book">
          <div>
            <label htmlFor="weight">Weight (KG)</label>
            <input
              tabIndex="0"
              autoComplete="off"
              type="number"
              name="weight"
              id="weight"
              ref={weight}
              data-type={1}
            />
          </div>
          <p className="product-description">
            *Please provide weight of the book.
          </p>
        </div>
      )}

      {/* Furniture Attributes */}
      {ShowFurniture && (
        <div id="Furniture">
          <div>
            <label htmlFor="height">height (CM)</label>
            <input
              tabIndex="0"
              type="number"
              name="height"
              id="height"
              ref={height}
              autoComplete="off"
              data-type={2}
            />
          </div>

          <div>
            <label htmlFor="width">width (CM)</label>
            <input
              tabIndex="0"
              type="number"
              autoComplete="off"
              name="width"
              id="width"
              ref={width}
            />
          </div>

          <div>
            <label htmlFor="length">length (CM)</label>
            <input
              tabIndex="0"
              type="number"
              autoComplete="off"
              name="length"
              id="length"
              ref={length}
            />
          </div>

          <p className="product-description">
            *Please provide dimension in HxWxL format.
          </p>
        </div>
      )}
    </div>
  );
}

export default Attribute;
