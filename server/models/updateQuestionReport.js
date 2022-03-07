const { query } = require('../db');
module.exports = function updateQuestionReport(answerId) {
  return query(
    `
    UPDATE questions SET reported = reported + 1 WHERE id = $1;
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