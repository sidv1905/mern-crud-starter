import React from "react";
import BuyerCard from "./BuyerCard";
import axios from "axios";

class SearchSection extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      product_name: "",
      lead_time: "",
      weight_gsm: "",
      quantity: "",
    };
  }
  componentDidMount() {
    if (typeof this.props.match.params.buyername !== "undefined") {
      axios
        .get(
          `https://mern-starter-crud.herokuapp.com/products/${this.props.match.params.buyername}`
        )
        .then((res) => {
          this.setState({
            products: res.data,
          });
        });
    } else {
      axios.get(`https://mern-starter-crud.herokuapp.com/products`).then((res) => {
        this.setState({
          products: res.data,
        });
      });
    }
  }
  //`http://localhost:5000/products/${this.props.match.params.buyername}?product_name=${product_name}&lead_time=${lead_time}&weight_gsm=${weight_gsm}&quantity=${quantity}`
  //`http://localhost:5000/products?product_name=${product_name}&lead_time=${lead_time}&weight_gsm=${weight_gsm}&quantity=${quantity}`
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (typeof this.props.match.params.buyername !== "undefined") {
      axios
        .get(
          `https://mern-starter-crud.herokuapp.com/products/${this.props.match.params.buyername}?product_name=${this.state.product_name}&lead_time=${this.state.lead_time}&weight_gsm=${this.state.weight_gsm}&quantity=${this.state.quantity}`
        )
        .then((res) => {
          console.log(res.data);
          this.setState({
            products: res.data,
          });
        });
    } else {
      axios
        .get(
          `https://mern-starter-crud.herokuapp.com/products?product_name=${this.state.product_name}&lead_time=${this.state.lead_time}&weight_gsm=${this.state.weight_gsm}&quantity=${this.state.quantity}`
        )
        .then((res) => {
          console.log(res.data);
          this.setState({
            products: res.data,
          });
        });
    }
  };
  render() {
    const CardsList = this.state.products.map((item) => (
      <BuyerCard
        key={item.product_id}
        product_id={item.product_id}
        product_name={item.product_name}
        quantity={item.quantity}
        buyer_name={item.buyer_name}
        price_rs={item.price_rs}
        lead_time={item.lead_time}
      />
    ));
    const searchbox = {
      margin: "10px",
      padding: "10px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    };
    return (
      <div>
        <div style={searchbox}>
          <div>
            <label for="product_name">Product Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.product_name}
              name="product_name"
              type="text"
            />
          </div>

          <div>
            <label for="lead">Label</label>
            <input
              onChange={this.handleChange}
              value={this.state.lead}
              name="lead"
              type="text"
            />
          </div>
          <div>
            <label for="weight_gsm">Weight Gsm</label>
            <input
              onChange={this.handleChange}
              value={this.state.weight_gsm}
              name="weight_gsm"
              type="text"
            />
          </div>
          <div>
            <label for="quantity"> Quantity</label>
            <input
              onChange={this.handleChange}
              value={this.state.quantity}
              name="quantity"
              type="text"
            />
          </div>

          <button onClick={this.handleSubmit} type="submit">
            Search
          </button>
        </div>

        <div className="cards">{CardsList}</div>
      </div>
    );
  }
}

export default SearchSection;
