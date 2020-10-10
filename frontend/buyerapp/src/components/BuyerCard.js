import React from "react";
import image from "../iconmonstr-user-14-240.png";
class BuyerCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img height="100" width="100" src={image} alt="Avatar" />
        <div className="container">
          <h4>{this.props.buyer_name}</h4>
          <h5>Requirement:</h5>

          <p>Product:{this.props.product_name}</p>
          <p>id:{this.props.product_id}</p>
          <p>Quantity:{this.props.quantity}</p>
          <p>Price:{this.props.price_rs}</p>
          <p>Lead Time Provision: {this.props.lead_time}</p>
        </div>
      </div>
    );
  }
}

export default BuyerCard;
