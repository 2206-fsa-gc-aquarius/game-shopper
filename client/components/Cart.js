import React from "react";
import { fetchCart, deleteCartItem } from "../store/cart";
import { connect } from "react-redux";

export class DisplayCart extends React.Component {
  componentDidMount() {
    this.props.fetchCart(this.props.match.params.id);
    //console.log('this is this.props', this.props)
  }

  render() {
    const userCart = this.props.cart;

    console.log("heeerrree----", this.props);
    return (
      <div className="textColor">
        <div id="products" className="list">
          {userCart.length ? (
            <div>
              <h2>Your Cart is:</h2>
              {userCart.map((product) => (
                <div key={product.id}>
                  <div>{product.name}</div>
                  <div>
                    Quantity:{" "}
                    {product.order_product.quantity &&
                      product.order_product.quantity}
                  </div>
                  <img className="" src={product.image} />
                  {console.log(product)}
                  <form onSubmit={(event) => event.preventDefault()}>
                    <button
                      type="submit"
                      className="remove"
                      onClick={() =>
                        this.props.deleteCartItem(
                          product.order_product.orderId,
                          product.order_product.productId
                        )
                      }
                    >
                      Delete
                    </button>
                  </form>
                  <br />
                </div>
              ))}
            </div>
          ) : (
            <h2 className="textColor">Your Cart is empty</h2>
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    cart: state.cartReducer,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchCart: (id) => dispatch(fetchCart(id)),
    deleteCartItem: (orderId, productId) =>
      dispatch(deleteCartItem(orderId, productId, history)),
  };
};

export default connect(mapState, mapDispatch)(DisplayCart);
