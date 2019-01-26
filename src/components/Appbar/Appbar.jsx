import React, { Component } from "react";

class Appbar extends Component {
  render() {
    let cartClass = 'primary'
    ;(this.props.cart > 0) ? cartClass = "danger" : cartClass="primary"
    
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button 
            className={"btn btn-" + cartClass}
            onClick={this.props.handleOpenModal}>
              Cart <span className="badge badge-light">{this.props.cart}</span>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Appbar;


(function() {

})()