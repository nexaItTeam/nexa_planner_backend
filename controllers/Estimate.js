const models = require("../models");
const app = require("express");

exports.createComponents = async (req, res) => {
  try {
    var model_name = req.body.model_name;
    app.model = (model_name) => models[model_name];
    const widget = app.model(model_name);
    await widget
      .create(req.body.data)
      .then((result) => {
        return res.status(200).json({
          message: "Success",
        });
      })
      .catch((err) => {
        res.status(400).json({ error: err });
      });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getComponents = async (req, res) => {
  try {
    var model_name = req.body.model_name;
    var temp = {
      isDelete: false,
    };
    var component = {};
    for await (const model of model_name) {
      app.model = (model) => models[model];
      const widget = app.model(model);
      console.log(typeof widget);
      var data = await widget.findAll(temp);
      component[model] = data;
    }
    return res.status(200).json({
      message: "Success",
      component,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
