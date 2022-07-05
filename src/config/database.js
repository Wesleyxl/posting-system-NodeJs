// database setup
module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "wesley",
  password: "root",
  database: "posting_system",
  define: {
    timestamps: true,
    underscored: true,
  },
};
