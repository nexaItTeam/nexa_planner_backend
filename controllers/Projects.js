const models = require("../models");
const { Projects } = require("../models");
const bcrypt = require("bcrypt");
const { createTokens } = require("../middleware/JWT");

const { encryptData, decryptData } = require('../middleware/crypto');

exports.getProjects= async (req, res) => {
  try {
    var project = await Projects.findAll({
      where: {
        isDelete: false,
      },
    });
    if (!project) {
      return res.status(404).json({
        message: "Data not found",
      });
    } else {
      const encryptedData = await encryptData(project)
      
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

exports.addProjects = async (req, res) => {
  try {
    const encryptedData = req.body;  
    const decryptedData  = await decryptData(encryptedData.payload)
    var create_project = await Projects.create(decryptedData)
    if (!create_project) {
        return res.status(404).json({
            message: "failed to create"
        })
    } else {
        return res.status(200).json({
            message: "created",
            create_project
        })
    }
  } catch (error) {
   
    return res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

// exports.updateEmployee = async (req, res) => {
//   try {
//     const encryptedData = req.body;  //store encrpt data
//     const decryptedData  = await decryptData(encryptedData.payload) //decrypt data ans store in a variable
//     const { employee } = decryptedData ;
//     var update_client = await Client.update(employee, {
//       where: {
//         id: employee.id,
//       },
//     });
//     const Data = await encryptData(update_client) //send encrypted data to client
//     return res.status(200).send({
//       message: "update post",
//       Data,
//     });
//   } 
//    catch (error) {
//     return res.status(500).json({
//       message: "Server Error",
//       error,
//     });
//    }
// };

// exports.deleteEmployee = async (req, res) => {
//   try {
//     const { employee } = req.body;
//   } catch (error) {}
// };
