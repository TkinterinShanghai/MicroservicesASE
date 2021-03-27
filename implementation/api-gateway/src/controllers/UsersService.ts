import got from "got/dist/source";

const USERS_SERVICE_URI = process.env.USERS_SERVICE_URI;

export default class UsersService {
  static async createUser(req, res, next) {
    const { email, password } = req.body;
    const body = await got
      .post(`${USERS_SERVICE_URI}/users`, { json: { email, password } })
      .json();
    console.log("after in api gateway", body);
    return res.send(body);
  }

  static async fetchUser(req, res) {
    const { userId } = req.body;
    const body = await got.get(`${USERS_SERVICE_URI}/users/${userId}`).json();
    return body;
  }
}
