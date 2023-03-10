const {questions} = require('../models');

module.exports = {

  getQuestions: (req, res) => {
    questions.listQuestions(req.params.product_id)
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(err => console.log('Error getting questions: ', err))
  },
  postQuestions: (req, res) => {
    questions.addQuestion(req.params.product_id, req.body)
    .then(result => res.status(201).send())
    .catch(err => console.log('Error adding question: ', err))
  },
  putQuestionHelpful: (req, res) => {
    questions.markQuestionHelpful(req.params.question_id)
    .then((result) => {
      res.status(200).send()
    })
    .catch(err => console.log('Error marking question as helpful: ', err))
  },
  putQuestionReport: (req, res) => {
    questions.reportQuestion(req.params.question_id)
    .then((result) => {
      res.status(200).send()
    })
    .catch(err => console.log('Error reporting question: ', err))
  }
}