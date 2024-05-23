const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    static associate(models) {}
  }

  Projects.init(
  {
    project_name: {
        type: DataTypes.STRING,
        field: "project_name",
      },
      project_type: {
        type: DataTypes.STRING,
        field: "project_type",
      },
      project_number: {
        type: DataTypes.STRING,
        field: "project_number",
      },
      start_date: {
        type: DataTypes.DATE,
        field: "start_date",
      },
      project_team: {
        type: DataTypes.JSON,
        field: "project_team",
      },
      project_address: {
        type: DataTypes.STRING,
        field: "project_address",
      },
      project_client:{
        type: DataTypes.JSON,
        field: "project_client",
      }
  },
    {
      sequelize,
      tableName: "projects",
      modelName: "Projects",
      timestamps: true,
    }
  );

  return Projects;
};
