// database setup
module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "wesley",
  password: "root",
  database: "instagram_clone",
  define: {
    timestamps: true,
    underscored: true,
  },
};
