import React from "react";
import { Link } from "react-router-dom";

class ListProduct extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className='list-product'>
        <body>
        <img src={products.image} />
        <h3>{products.name}</h3>
        <h4>${products.price/100}</h4>

          <h4 id="description">Description</h4>
          <div>{products.description}</div>
        </body>
        <br/>
        <hr/>
        <br/>
      </div>
    );
  }
}
export default ListProduct;
