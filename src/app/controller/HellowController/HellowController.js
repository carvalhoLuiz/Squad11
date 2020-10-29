class HellowController {
    async hellow(req, res) {
        return res.json("Hellow world!");
    }
}

export default new HellowController();