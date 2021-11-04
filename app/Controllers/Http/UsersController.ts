import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  async index({ response }: HttpContextContract) {
    try {
      const users = await User.all();
      if (users.length !== 0) return response.status(200).json(users);
      return response.status(400).json({ message: "There are no users!!" });
    } catch (err) {
      return response
        .status(400)
        .json({ message: "something went wrong!!", error: err });
    }
  }

  async store({ request, response }: HttpContextContract) {
    try {
      const data = request.body();
      const newUser = await User.create(data);
      if (newUser) return response.status(201).json(newUser);
      return response.status(400).send("failed to create user");
    } catch (err) {
      return response
        .status(400)
        .json({ message: "something went wrong!!", error: err });
    }
  }

  async show({ params, response }: HttpContextContract) {
    try {
      const user = await User.find(params.id);
      if (user) return response.status(200).json(user);
      return response.status(400).send("User not found");
    } catch (err) {
      return response
        .status(400)
        .json({ message: "something went wrong!!", error: err });
    }
  }

  async update({ request, response }: HttpContextContract) {
    try {
      const user = await User.find(request.params().id);
      const data = request.body();
      if (Object.keys(data).length === 0) return response.status(200).send("No changes");
      if (user) {
        const updatedUser = await user.merge(data).save();
        if (updatedUser)
          return response
            .status(200)
            .json({ message: "User Updated Successfully", user: updatedUser });
        return response.status(400).send("Update Failed");
      }
      return response.status(400).send("User not found");
    } catch (err) {
      return response
        .status(400)
        .json({ message: "something went wrong!!", error: err });
    }
  }

  async destroy({ params, response }: HttpContextContract) {
    try {
      const user = await User.find(params.id);
      if (user) {
        await user.delete();
        return response.status(200).send("User Deleted successfully");
      }
      return response.status(400).send("User not found");
    } catch (err) {
      return response
        .status(400)
        .json({ message: "something went wrong!!", error: err });
    }
  }
}
