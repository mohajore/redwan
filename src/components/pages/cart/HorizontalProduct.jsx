import React from "react";
import { useState } from "react";

function HorizontalProduct({ withDelete, fromOrders }) {
    const [qty, setQty] = useState(1);
    return (
        <div className="horizontal-product flex">
            <img src="/images/Book [m] [f].png" alt="l" />
            <div className="horizontal-product__contents">
                <div className="horizontal-product__contents__header flex">
                    <h6>Compass Social Studies Curriculum</h6>
                    {withDelete && (
                        <button>
                            <i className="fa fa-trash-alt"></i>
                        </button>
                    )}
                </div>
                <p>In 2011, AERO (American Education Reaches Out) developed the Standardds & Benchmarks of the Social Studies.</p>
                <div className="horizontal-product__contents__footer flex">
                    <p>350$</p>
                    {/* qty of product start   */}

                    <div className="qty flex">
                        {fromOrders ? (
                            <>
                                <i class="fa fa-times"></i>
                                <span style={{ marginLeft: "5px" }}> 1</span>
                            </>
                        ) : (
                            <>
                                {/* mins  button start  */}
                                <span
                                    onClick={() => {
                                        if (qty > 1) {
                                            setQty(qty - 1);
                                        }
                                    }}
                                >
                                    <i className="fas fa-minus"></i>
                                </span>
                                {/* mins  button end  */}

                                {/* input (value) qty start  */}
                                <input type="tel" value={qty} />
                                {/* input (value) qty end  */}

                                {/* plus button start  */}
                                <span
                                    onClick={() => {
                                        setQty(qty + 1);
                                    }}
                                >
                                    <i className="fas fa-plus"></i>
                                </span>
                                {/* plus button end  */}

                                {/* qty of product end  */}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HorizontalProduct;
