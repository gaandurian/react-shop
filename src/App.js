import React, { Component } from 'react';
import './App.css';
import Appbar from "./components/Appbar/Appbar"
import ProductList from "./components/ProductList/ProductList"
import Modal from "react-responsive-modal"

class App extends Component {
  state = {
    cart: [],
    modalOpen: false,
  }
  render() {
   
    return (
      <React.Fragment>
     <Appbar cart={this.state.cart.length} handleOpenModal={this.handleOpenModal}/>
     <ProductList handleAddToCart={this.handleAddToCart} />
    
     
     <Modal 
     open={this.state.modalOpen}
     onClose={this.handleCloseModal}>
     <h2 className="m-3">Items in the cart</h2> 
       {this.state.cart.map(pr => (
         <div key={pr.id}> 
          <h3>{pr.label}</h3>
          <p>{pr.description}</p>
         </div>
         
       ) )}
      
      <button className="btn btn-primary m-1">Order</button>
        <button className="btn btn-danger m-1">Reset</button>
     </Modal>
     </React.Fragment>
    );
  }

  handleAddToCart = (product) => {
    let arr = this.state.cart
    arr.push(product)
    this.setState({cart: arr}
    )}

  handleOpenModal = () => this.setState({ modalOpen: true })
  handleCloseModal = () => this.setState({ modalOpen: false})

}

export default App;



/*
state = {
  time: '17:33'
}


 let day = "Monday"
 <React.Fragment>
        <h1>Hello world !</h1>
        <p>Today is {day}</p>
        <p>The time is {this.state.time} </p>
      </React.Fragment>
*/

    // const condition = this.state.cart
    // const instruction1 =  this.state.cart.map(pr => <p>{pr.label}</p>)
    // const instruction2 = 'empty'

/* {(condition) ? instruction1 : instruction2} */