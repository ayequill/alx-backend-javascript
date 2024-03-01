class AppController {
  static getHomepage(_, res) {
    return res.status(200).send('Hello Holberton School!');
  }
}
module.exports = AppController;
