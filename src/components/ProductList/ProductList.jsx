import React, { Component } from "react";
import Product from "./Product/Product";
class ProductList extends Component {
  state = {
    products: [
      {
          id: "ch-241901",
        label: "Chamiya Papillon",
        description:
          "Chamiya papillon hya chamya ta7founa barcha w ki tekel menha barcha taatik jwena7",
        price: 4,
        qt: 17,
        size: 0.5,
        imgUrl: "http://atalanta-group.com.tn/media/produits/55b0bc1e98830.jpg"
      },
      {
        id: "ch-241902",
        label: "Chamiya Ghazela",
        description:
          "Chamiya ghazela, chamya mezyena barcha w ki tkathar menha twalli tejri w tnagaz barcha",
        price: 4,
        qt: 22,
        size: 0.5,
        imgUrl: "http://atalanta-group.com.tn/media/produits/566e896d6515a.jpg"
      },
      {
        id: "ch-241903",
        label: "Chamiya Na3oura",
        description: "Chamiya aala 3ajla, bnina w lux barcha ",
        price: 5,
        qt: 14,
        size: 0.5,
        imgUrl: "http://atalanta-group.com.tn/media/produits/566e7c3412ae5.jpg"
      }
    ]
  };
  render() {
    const listStyles = {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: 70
    };

    return (
      <div style={listStyles} className="container">
        {this.state.products.map(pr => (
          <Product
          key={pr.id}
          product={pr} 
          handleAddToCart={this.props.handleAddToCart} />
        ))}
      </div>
    );
  }
}

export default ProductList;
