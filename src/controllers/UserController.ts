import db from "../database/connection";
import { Request, Response } from "express";

import bcrypt from "bcrypt";
const saltRounds = 10;

export default class UserController {
  async insert(req: Request, res: Response) {
    const password = "teste";

    const trx = await db.transaction();

    try {
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        const user = {
          username: "teste",
          password: hash,
        };

        const insertedUsersIds = await trx("users").insert(user);

        const user_id = insertedUsersIds[0];

        trx.commit();

        res.send(user_id);
      });
    } catch (err) {
      await trx.rollback();

      return res.status(400).json({
        error: "Unexpected error while creating new user",
      });
    }
  }

  async checkPassword(req: Request, res: Response) {
    const users = await db.select("*").from("users").where("id", "=", "2");

    const user = users[0];

    bcrypt.compare("123", user.password, await function(err, result) {
      res.send(result);
    });   
  }
}
