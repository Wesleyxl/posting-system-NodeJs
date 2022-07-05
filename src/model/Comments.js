const { Model, DataTypes } = require("sequelize");

class Comments extends Model {
  static init(sequelize) {
    super.init(
      {
        text: DataTypes.TEXT,
      },
      {
        sequelize,
      }
    );
  }

  // static associate(models) {
  //   this.belongsTo(models.Publication, {
  //     foreignKey: "post_id",
  //     as: "comments",
  //   });
  //   this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  // }
}

module.exports = Comments;
