const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Estimate extends Model {
    static associate(models) {}
  }

  Estimate.init(
    {
      estimate: {
        type: DataTypes.JSON,
        field: "estimate",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "estimate",
      modelName: "Estimate",
      timestamps: true,
    }
  );

  return Estimate;
};
