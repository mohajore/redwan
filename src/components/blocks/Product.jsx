import React from "react";
import { useState } from "react";

export default function Product({ id }) {
  const [active, setActive] = useState(-1);
  return (
    <div className="product">
      <div className="product__header">
        <img
          src="/images/book.png"
          alt="/"
          className="product__header__book-img"
          onClick={() => (window.location.href = "/productDetails")}
        />
        <span className="flex" onClick={() => setActive(id)}>
          {/* <img src="/images/fi-rr-heart3.svg" alt="/" /> */}
          <i className={active === id ? "fa fa-heart" : "far fa-heart"}></i>
        </span>
      </div>
      <div className="product__contents">
        <h3 onClick={() => (window.location.href = "/productDetails")}>
          Compass Social Studies Curriculum
        </h3>
        <p>
          In 2011, AERO (American Education Reaches Out) developed the
          Standardds & Benchmarks of the Social Studies.
        </p>
        <div className="product--buttons flex">
          <div className=" flex">
            <span>350$</span>
            <span>420$</span>
          </div>
          <button title="Add To Cart" className="add-to-cart flex">
            <img src="/images/Group 7.svg" alt="/" />
          </button>
        </div>
      </div>
    </div>
  );
}
