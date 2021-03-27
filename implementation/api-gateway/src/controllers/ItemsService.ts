import got from "got/dist/source";

const PRICES_SERVICE_URI = process.env.PRICES_SERVICE_URI;

export default class ItemsService {
  static async findPrices(req, res, next) {
    const body = await got
      .get(`${PRICES_SERVICE_URI}/?article=${req.query.article}`, {})
      .json();
    return res.send(body);
  }
}
