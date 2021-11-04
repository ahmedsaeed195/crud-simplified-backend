import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  async index({ response }: HttpContextContract) {
    try {
      const users = await User.all();
      if (users.length !== 0) return response.status(200).json(users);
      return response.status(200).json({ message: "There are no users!!" });
    } catch (err) {
      return response
        .status(400)
        .json({ message: "something went wrong!!", error: err });
    }
  }

  async store({}: HttpContextContract) {}

  async show() {}

  async update() {}

  async destroy() {}
}
