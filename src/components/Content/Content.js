import React, { useState } from "react";

export default function Content({
  data = {},
  cartAdder = {},
  cartRemover = {},
}) {
  let [buttonValue, setbuttonValue] = useState("Add To Cart");
  let [buttonId, setbuttonId] = useState("addCart");

  //Handle cartAdder & cartRemover function based on button click

  function handlecartAdder() {
    if (buttonValue === "Add To Cart") {
      // console.log("removeCart");
      // console.log("Remove From Cart");
      cartAdder(data.id);
      setbuttonId("removeCart");
      setbuttonValue("Remove From Cart");
    } else if (buttonValue === "Remove From Cart") {
      // console.log("addCart");
      // console.log("Add To Cart");
      setbuttonId("addCart");
      setbuttonValue("Add To Cart");
      cartRemover(data.id);
    }
  }

  return (
    <div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* <!-- Product image--> */}
          <img
            className="card-img-top img-fluid"
            src={data.src}
            style={{ width: 284, height: 184 }}
            alt="..."
          />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{data.productName}</h5>
              {/* Product -description */}
              <div className="mb-2">
                <b>Desc:</b>[{data.color}, {data.company}]
              </div>

              {/* <!-- Product price--> */}
              <span
                style={{
                  background: "yellow",
                  borderRadius: "5px",
                  padding: "3px",
                  color: "red",
                }}
              >
                {" "}
                $ {data.price}
              </span>
            </div>
            {/* <!-- Product actions--> */}
            <div className="card-footer p-4 pt-0 border-top-0 mt-3">
              <div className="text-center">
                <button
                  id={buttonId}
                  className="btn btn-outline-light mt-auto"
                  onClick={handlecartAdder}
                >
                  {buttonValue}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
