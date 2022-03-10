const { query } = require('../db');
module.exports = function updateAnswerReport(answerId) {
  return query(
    `
    UPDATE answers SET reported = true WHERE id = $1;
    `,
    [answerId],
    (error, result) => {
      if(error) {
        return error;
      } else {
        return result;
      }
    }
  )
}