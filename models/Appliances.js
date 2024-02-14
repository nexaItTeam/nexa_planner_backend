const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Appliances extends Model {
    static associate(models) {}
  }

  Appliances.init(
    {
      description: {
        type: DataTypes.STRING,
        field: "description",
      },
      cost: {
        type: DataTypes.INTEGER,
        field: "cost",
      },
      quantity: {
        type: DataTypes.INTEGER,
        field: "quantity",
      },
      unit: {
        type: DataTypes.INTEGER,
        field: "unit",
      },
      total: {
        type: DataTypes.STRING,
        field: "total",
      },
      component_type: {
        type: DataTypes.STRING,
        field: "component_type",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "appliances",
      modelName: "Appliances",
      timestamps: true,
    }
  );

  return Appliances;
};
