import path from "path";

module.exports = {
  client: "pg",
  connection: {
    database: "bcrypt",
    user: "postgres",
    password: "postgres",
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  },
};
