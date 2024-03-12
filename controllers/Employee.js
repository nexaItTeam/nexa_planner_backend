const models = require("../models");
const { Employee } = require("../models");
const bcrypt = require("bcrypt");
const { createTokens } = require("../middleware/JWT");

exports.getEmployee = async (req, res) => {
  try {
    var employee = await Employee.findAll({
      where: {
        isDelete: false,
      },
    });
    if (!employee) {
      return res.status(404).json({
        message: "Data not found",
      });
    } else {
      return res.status(200).json({
        data: employee,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

exports.addEmployee = async (req, res) => {
  try {
    const { employee } = req.body;

    const findEmployee = await Employee.findOne({
      where: {
        emp_email: employee.emp_email,
      },
    });
    if (findEmployee) {
      return res.status(400).json({ message: "Employee already exists" });
    } else {
      bcrypt.hash(employee.password, 10).then((hash) => {
        employee.password = hash;
        Employee.create(employee)
          .then((createEmp) => {
            const accessToken = createTokens(createEmp);
            return res.status(200).json({
              message: "User register successful",
              createEmp,
              accessToken,
            });
          })
          .catch((err) => {
            if (err) {
              res.status(400).json({ error: err });
            }
          });
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { employee } = req.body;
  } catch (error) {}
};

exports.deleteEmployee = async (req, res) => {
  try {
    const { employee } = req.body;
  } catch (error) {}
};
