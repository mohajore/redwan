import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiService } from "../../services/ApiService";
import { generalServices } from "../../services/GeneralServices";
import { displayAlert } from "../../utils/misc";
import { setUser } from "../../redux/actions-reducers/user";

export default function Product({ item: { id, main_image_thumb, price, title, description, is_fav, campaign, in_cart }, reFetchData }) {
    // console.log(currentUser, "currentUser");
    const currentUser = useSelector(({ currentUser }) => currentUser);

    const dispatch = useDispatch();

    const newPrice = () => {
        let discountAmount = (price * campaign.percentage) / 100;

        let priceAfterDiscount = 0;
        if (discountAmount > campaign.fixed_amount) {
            priceAfterDiscount = price - campaign.fixed_amount;

            return priceAfterDiscount;
        } else {
            priceAfterDiscount = price - discountAmount;
            return priceAfterDiscount;
        }
    };

    const addBooksToCart = async (id, qty, reFetchData) => {
        const { success, data } = await generalServices.addToCart(id, qty);
        if (!success) return;
        dispatch(setUser({ cart_count: currentUser.cart_count + 1 }));

        reFetchData();
    };

    const addRemoveFavorites = async (id, reFetchData) => {
        const { success, data } = await generalServices.addOrRemoveFavourite(id);
        if (!success) return;
        dispatch(setUser({ fav_count: is_fav ? currentUser.fav_count - 1 : currentUser.fav_count + 1 }));

        reFetchData();
    };

    const deleteBooksFromCart = async (id, reFetchData) => {
        const { success, data } = await generalServices.deleteBooksFromCart(id);
        if (!success) return;
        dispatch(setUser({ cart_count: currentUser.cart_count - 1 }));

        reFetchData();
    };

    return (
        <div className="product">
            <div className="product__header">
                <img src={main_image_thumb ? apiService.imageLink + main_image_thumb : "/images/Group 510@3x.png"} alt="/" className="product__header__book-img" onClick={() => (window.location.href = "/productDetails/" + id)} />
                <span className="flex" onClick={() => addRemoveFavorites(id, reFetchData)}>
                    <i className={is_fav ? "fa fa-heart" : "far fa-heart"}></i>
                </span>
            </div>
            <div className="product__contents">
                <h3 onClick={() => (window.location.href = "/productDetails/" + id)}>{title}</h3>
                <p>{description}</p>
                <div className="product--buttons flex">
                    <div className=" flex">
                        <span>{campaign ? newPrice() + "$" : null}</span>
                        <span className={campaign ? "oldPrice" : ""}>{price}$</span>
                    </div>
                    <button
                        title="Add To Cart"
                        className={in_cart ? "add-to-cart flex added-to-cart" : "add-to-cart flex"}
                        onClick={() => {
                            if (in_cart) {
                                deleteBooksFromCart(id, reFetchData);
                            } else {
                                addBooksToCart(id, 1, reFetchData);
                            }
                        }}
                    >
                        <img src="/images/Group 7.svg" alt="/" />
                    </button>
                </div>
            </div>
        </div>
    );
}
