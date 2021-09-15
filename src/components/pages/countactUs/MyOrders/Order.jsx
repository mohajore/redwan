import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { apiService } from "../../../../services/ApiService";
import { profileService } from "../../../../services/Profile";

function Order({ orderData }) {
    let history = useHistory();
    const { id, books_amount, delivery_ref, total_amount, user_location, delivered_datetime, order_details } = orderData;
    return (
        <div className="order" onClick={() => history.push({ pathname: "/OrderDetails", state: { orderData } })}>
            <div className="header-order flex">
                <h5>Order No. {id}</h5>
                <span>{delivered_datetime}</span>
            </div>

            <div className="body-order flex">
                <ul className="books-pic flex">
                    {order_details.map(({ book }, index) => {
                        if (index < 3) {
                            return (
                                <li>
                                    <img src={apiService.imageLink + book?.main_image} alt="l" />
                                </li>
                            );
                        }
                    })}
                    {order_details?.length > 3 && (
                        <li>
                            <span>+ {order_details?.length - 3}</span>
                        </li>
                    )}
                </ul>
                <div className="order-details">
                    <p>Deliverd for ( {user_location?.name} )</p>
                    <div className="order-price flex">
                        <span>Total</span>
                        <span>{total_amount} JD</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
