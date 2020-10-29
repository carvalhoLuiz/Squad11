class HellowController {
  async hellow(req, res) {
    return res.json({ message: 'hello world!' });
  }
}

export default new HellowController();
