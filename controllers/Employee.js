const models = require("../models");
const { Employee } = require("../models");
const bcrypt = require("bcrypt");
const { createTokens } = require("../middleware/JWT");

const { encryptData, decryptData } = require('../middleware/crypto');

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
      const encryptedData = await encryptData(employee)
      
      return res.status(200).json({
        encryptedData,
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

exports.addEmployee = async (req, res) => {
  try {
    const encryptedData = req.body;  
    const decryptedData  = await decryptData(encryptedData.payload)
   
    const findEmployee = await Employee.findOne({
      where: {
        emp_email: decryptedData.emp_email,
      },
    });
   
    if (findEmployee) {
      return res.status(400).json({ message: "Employee already exists" });
    } else {
      bcrypt.hash(decryptedData.password, 10).then((hash) => {
        decryptedData.password = hash;
        Employee.create(decryptedData)
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
    const encryptedData = req.body;  //store encrpt data
    const decryptedData  = await decryptData(encryptedData.payload) //decrypt data ans store in a variable
    const { employee } = decryptedData ;
    var update_client = await Client.update(employee, {
      where: {
        id: employee.id,
      },
    });
    const Data = await encryptData(update_client) //send encrypted data to client
    return res.status(200).send({
      message: "update post",
      Data,
    });
  } 
   catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error,
    });
   }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const { employee } = req.body;
  } catch (error) {}
};
