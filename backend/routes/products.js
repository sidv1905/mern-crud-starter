const router = require("express").Router();
const _ = require("lodash");

let Product = require("../models/Product.model");

router.route("/").get((req, res) => {
  query = {};

  console.log(req.query);
  if (req.query.product_name != undefined && req.query.product_name !== "") {
    query["product_name"] = req.query.product_name;
  }

  if (req.query.lead_time != undefined && req.query.lead_time !== "") {
    query["lead_time"] = req.query.lead_time;
  }
  if (req.query.weight_gsm != undefined && req.query.weight_gsm !== "") {
    query["weight_gsm"] = req.query.weight_gsm;
  }
  if (req.query.quantity != undefined && req.query.quantity !== "") {
    query["quantity"] = req.query.quantity;
  }
  Product.find(query)
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:buyer_name").get((req, res) => {
  const nameCapitalized =
    req.params.buyer_name.charAt(0).toUpperCase() +
    req.params.buyer_name.slice(1);

  query = {};
  query["buyer_name"] = nameCapitalized;

  console.log(req.query);
  if (req.query.product_name != undefined && req.query.product_name !== "") {
    query["product_name"] = req.query.product_name;
  }

  if (req.query.lead_time != undefined && req.query.lead_time !== "") {
    query["lead_time"] = req.query.lead_time;
  }
  if (req.query.weight_gsm != undefined && req.query.weight_gsm !== "") {
    query["weight_gsm"] = req.query.weight_gsm;
  }
  if (req.query.quantity != undefined && req.query.quantity !== "") {
    query["quantity"] = req.query.quantity;
  }

  console.log(query);
  Product.find(query)
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
