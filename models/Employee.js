const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {}
  }

  Employee.init(
    {
      emp_f_name: {
        type: DataTypes.STRING,
        field: "emp_f_name",
      },
      emp_m_name: {
        type: DataTypes.STRING,
        field: "emp_m_name",
      },
      emp_email: {
        type: DataTypes.STRING,
        field: "emp_email",
      },
      emp_userName: {
        type: DataTypes.STRING,
        field: "emp_userName",
      },
      password: {
        type: DataTypes.STRING,
        field: "password",
      },
      emp_number: {
        type: DataTypes.STRING,
        field: "emp_number",
      },
      emp_designation: {
        type: DataTypes.STRING,
        field: "emp_designation",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "employee",
      modelName: "Employee",
      timestamps: true,
    }
  );

  return Employee;
};
