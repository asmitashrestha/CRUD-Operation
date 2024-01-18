const db = require("../models");
const { createMenu, getMenu } = require("../repository/menuRepository");

exports.addData = async (req, res, next) => {
  const nameData = req.body.name
  const priceData = req.body.price
  try {
    const addMenu =await createMenu(nameData,priceData)
    res.json({ msg: "Menu added successfully", item: addMenu });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "error occured",
    });
  }
};

exports.getData = async (req, res, next) => {
  try {
    const menu =await getMenu()
    res.json({ menu });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "error occured",
    });
  }
};
