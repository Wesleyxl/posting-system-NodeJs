const { Model, DataTypes } = require("sequelize");

class Publication extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        text: DataTypes.TEXT,
        image: DataTypes.STRING,
        is_text: DataTypes.INTEGER,
      },
      { sequelize }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    // this.hasMany(models.Comment, { foreign_key: "post_id", as: "comments" });
  }
}

module.exports = Publication;
