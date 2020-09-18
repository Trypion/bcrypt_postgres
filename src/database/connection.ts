import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    database: "bcrypt",
    user: "postgres",
    password: "postgres",
  },
});

export default db;
