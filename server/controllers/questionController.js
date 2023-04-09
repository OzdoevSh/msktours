const { Question } = require('../models/models')
const ApiError = require("../error/ApiError");

class QuestionController {

  async getAll(req, res) {
    const question = await Question.findAll()
    return res.json(question)
  }

  async changeStatus(req, res) {
    const {
      status,
      id
    } = req.body
    const updatedRows = await Question.update(
      {
        status: !status,
      },
      {
        where: { id: id },
      }
    );

    return res.json(updatedRows)

  }

  async create(req, res) {
    const { fname, text, email } = req.body

    const q = await Question.create({
      fname,
      text,
      email,
      status: false,
    })
    return res.json(q)

  }

}

module.exports = new QuestionController()
