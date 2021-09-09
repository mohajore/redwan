import React from "react";
import { useState } from "react";
import { apiService } from "../../services/ApiService";

export default function Product({ item: { id, main_image_thumb, price, title, description, is_fav, campaign } }) {
    const [active, setActive] = useState(is_fav);
    return (
        <div className="product">
            <div className="product__header">
                <img src={main_image_thumb ? apiService.imageLink + main_image_thumb : "/images/Group 510@3x.png"} alt="/" className="product__header__book-img" onClick={() => (window.location.href = "/productDetails")} />
                <span className="flex" onClick={() => setActive(id)}>
                    <i className={active === id ? "fa fa-heart" : "far fa-heart"}></i>
                </span>
            </div>
            <div className="product__contents">
                <h3 onClick={() => (window.location.href = "/productDetails")}>{title}</h3>
                <p>{description}</p>
                <div className="product--buttons flex">
                    <div className=" flex">
                        <span>{price}$</span>
                        <span>{campaign ? "420$" : null}</span>
                    </div>
                    <button title="Add To Cart" className="add-to-cart flex">
                        <img src="/images/Group 7.svg" alt="/" />
                    </button>
                </div>
            </div>
        </div>
    );
}
