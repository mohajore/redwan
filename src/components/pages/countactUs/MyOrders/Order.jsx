import React from "react";

function Order({ withMore }) {
    return (
        <div className="order" onClick={() => (window.location.href = "/OrderDetails")}>
            <div className="header-order flex">
                <h5>Order No. 124as25d</h5>
                <span>15-07-2021</span>
            </div>

            <div className="body-order flex">
                <ul className="books-pic flex">
                    <li>
                        <img src="/images/book1.png" alt="l" />
                    </li>
                    <li>
                        <img src="/images/book1.png" alt="l" />
                    </li>
                    <li>
                        <img src="/images/book1.png" alt="l" />
                    </li>
                    {withMore && (
                        <li>
                            <span>+ 2</span>
                        </li>
                    )}
                </ul>
                <div className="order-details">
                    <p>Deliverd for ( my home )</p>
                    <div className="order-price flex">
                        <span>Total</span>
                        <span>24.50 JD</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
