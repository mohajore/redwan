import React from "react";
import { useState } from "react";
import { apiService } from "../../../services/ApiService";
import { generalServices } from "../../../services/GeneralServices";
import { displayAlert } from "../../../utils/misc";
import { setUser } from "../../../redux/actions-reducers/user";
import { useDispatch, useSelector } from "react-redux";

function HorizontalProduct({
  withDelete,
  fromOrders,
  reFetchData,
  data: { quantity, total_price, unit_price, book },
}) {
  const [qty, setQty] = useState(quantity);
  const currentUser = useSelector(({ currentUser }) => currentUser);

  const dispatch = useDispatch();
  const newPrice = () => {
    let discountAmount = (book?.price * book?.campaign?.percentage) / 100;

    let priceAfterDiscount = 0;
    if (discountAmount > book?.campaign?.fixed_amount) {
      priceAfterDiscount = book?.price - book?.campaign?.fixed_amount;

      return priceAfterDiscount;
    } else {
      priceAfterDiscount = book?.price - discountAmount;
      return priceAfterDiscount;
    }
  };

  const addBooksToCart = async (id, qty, reFetchData) => {
    const { success } = await generalServices.addToCart(id, qty);
    if (!success) return;
    !withDelete &&
      dispatch(setUser({ cart_count: currentUser.cart_count + 1 }));

    reFetchData();
  };

  const deleteBooksFromCart = async (id, reFetchData) => {
    const { success } = await generalServices.deleteBooksFromCart(id);
    if (!success) return;
    displayAlert("Done", "Book Deleted From Cart ", "success");
    dispatch(setUser({ cart_count: currentUser.cart_count - 1 }));

    reFetchData();
  };

  return (
    <div className="horizontal-product flex">
      <img
        src={
          book?.main_image
            ? apiService.imageLink + book?.main_image
            : "/images/placeholder.png"
        }
        alt="l"
      />
      <div className="horizontal-product__contents">
        <div className="horizontal-product__contents__header flex">
          <a href={`/productDetails/${book?.id}`}>{book?.title}</a>
          {withDelete && (
            <button onClick={() => deleteBooksFromCart(book?.id, reFetchData)}>
              <i className="fa fa-trash-alt"></i>
            </button>
          )}
        </div>
        <p>{book?.description}</p>

        <div className="horizontal-product__contents__footer flex">
          <p>{newPrice()}$</p>
          {/* qty of product start   */}

          <div className="qty flex">
            {fromOrders ? (
              <>
                <i class="fa fa-times"></i>
                <span style={{ marginLeft: "5px" }}> {quantity}</span>
              </>
            ) : (
              <>
                {/* mins  button start  */}
                <span
                  onClick={() => {
                    if (qty > 1) {
                      setQty(qty - 1);
                      addBooksToCart(book?.id, qty - 1, reFetchData);
                    }
                  }}
                >
                  <i className="fas fa-minus"></i>
                </span>
                {/* mins  button end  */}

                {/* input (value) qty start  */}
                <input
                  type="tel"
                  value={qty}
                  onChange={({ target: { value } }) => {
                    if (value > 0) {
                      if (value < book?.quantity) {
                        setQty(value);
                      }
                    }
                  }}
                />
                {/* input (value) qty end  */}

                {/* plus button start  */}
                <span
                  onClick={() => {
                    if (qty < book?.quantity) {
                      setQty(qty + 1);

                      addBooksToCart(book?.id, qty + 1, reFetchData);
                    }
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
