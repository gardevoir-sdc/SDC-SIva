// const listAllAnswers = require('../modles/listAllAnswers.js');
const { query } = require('../db');
module.exports = async function listAnswers(req, res) {
  try {
    const { question_id } = req.params;
    const page = req.query.page || 1;
    const count = req.query.count || 5;
    const offset = count * page - count;
    const update = await query(
      `SELECT
      a.id,
      a.body,
      a.date_written,
      a.answerer_name,
      a.answerer_email,
      a.reported,
      a.helpfulness,
      json_build_object(
        'urls', array_remove(array_agg(DISTINCT ap.url), NULL)
      ) AS answers_photos
      FROM answers AS a
      LEFT JOIN answers_photos AS ap
      ON (a.id = ap.answer_id)
      WHERE a.question_id = $1
      AND a.reported = false
      GROUP BY a.id
      LIMIT $2
      OFFSET $3`,
      [question_id, count, offset], (err, result) => {
        if (err) {
          return err;
        } else {
          return result;
        }

      }
    );
    const result = {
      question_id: question_id,
      page: page,
      count: count,
      result: update
    }

    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }

}