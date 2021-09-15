import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/actions-reducers/user";
import { apiService } from "../../../services/ApiService";
import { generalServices } from "../../../services/GeneralServices";
import { displayAlert } from "../../../utils/misc";

function BigSale({ data, getHomeData }) {
    const currentUser = useSelector(({ currentUser }) => currentUser);
    const dispatch = useDispatch();

    const addRemoveFavorites = async (id, is_fav, getHomeData) => {
        const { success, data } = await generalServices.addOrRemoveFavourite(id);
        if (!success) return;
        dispatch(setUser({ fav_count: is_fav ? currentUser.fav_count - 1 : currentUser.fav_count + 1 }));

        getHomeData();
    };

    const addBooksToCart = async (id, qty, reFetchData) => {
        const { success, data } = await generalServices.addToCart(id, qty);
        if (!success) return;
        dispatch(setUser({ cart_count: currentUser.cart_count + 1 }));

        reFetchData();
    };

    const deleteBooksFromCart = async (id, reFetchData) => {
        const { success, data } = await generalServices.deleteBooksFromCart(id);
        if (!success) return;
        dispatch(setUser({ cart_count: currentUser.cart_count - 1 }));

        reFetchData();
    };

    return (
        <div className="big-sale">
            <Container>
                <div className="section-title">
                    <h3>Big Sale</h3>
                </div>
                <Row>
                    {data.map(({ id, title, price, quantity, main_image, description, campaign, is_fav, in_cart }, index) => {
                        if (index < 2) {
                            return (
                                <Col md={6}>
                                    <div className="big-sale__card">
                                        <a href={`/productDetails/${id}`} className="big-sale__card__header">
                                            <img src={apiService.imageLink + main_image} alt="/" />
                                            <span>{price}$</span>
                                        </a>
                                        <div className="big-sale__card__contents">
                                            <h3 onClick={() => (window.location.href = "/productDetails/" + id)}> {title}</h3>
                                            <p>{description}</p>

                                            <div className="big-sale__card--buttons flex">
                                                <button
                                                    className={in_cart ? "add-to-cart flex added-to-cart" : "add-to-cart flex"}
                                                    onClick={() => {
                                                        if (in_cart) {
                                                            deleteBooksFromCart(id, getHomeData);
                                                        } else {
                                                            addBooksToCart(id, 1, getHomeData);
                                                        }
                                                    }}
                                                >
                                                    <img src="/images/Group 511.svg" alt="/" />
                                                    <span>Add to cart</span>
                                                </button>

                                                <button className={is_fav ? "add-to-fav--active add-to-fav flex" : "add-to-fav flex"} onClick={() => addRemoveFavorites(id, is_fav, getHomeData)}>
                                                    <img src="/images/fi-rr-heart2.svg" alt="/" />
                                                    <span>wish list</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            );
                        }
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default BigSale;
