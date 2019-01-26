import React, { Component } from "react";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={this.props.product.imgUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.product.label}</h5>
          <p className="card-text">{this.props.product.description}</p>
          <button
            onClick={() => this.props.handleAddToCart(this.props.product)}
            className="btn btn-danger"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
