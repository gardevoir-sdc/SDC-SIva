const updateAnswerReport = require('../models/updateAnswerReport.js');

module.exports = async function reportAnswer(req, res) {
  try {
    let update = await updateAnswerReport(req.params.answer_id);
    res.sendStatus(204)
  } catch (error) {
    res.status(500);
  }
}