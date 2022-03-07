const updateQuestionReport = require('../models/updateQuestionReport.js');

module.exports = async function reportQuestion(req, res) {
  try {
    let update = await updateQuestionReport(req.params.answer_id);
    res.sendStatus(204)
  } catch (error) {
    res.status(500);
  }
}