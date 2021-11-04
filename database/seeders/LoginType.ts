import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import LoginType from "App/Models/LoginType";

export default class LoginTypeSeeder extends BaseSeeder {
  public async run() {
    await LoginType.createMany([
      {
        type: "Email",
      },
      {
        type: "Google",
      },
      {
        type: "GitHub",
      },
    ]);
  }
}
