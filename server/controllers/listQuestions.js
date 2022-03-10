const { query } =  require('../db');
module.exports = async function listQuestions(req, res) {
  try {
    const { product_id } = req.params;
    const page = req.query.page || 1;
    const count = req.query.count || 5;
    const offset = count * page - count;
    const update  = await query(
      `SELECT
      q.id,
      q.body,
      q.date_written,
      q.asker_name,
      q.asker_email,
      q.reported,
      q.helpfulness,
      array_agg(json_build_object(
        'body', a.body, 'date_written', a.date_written, 'answerer_name', a.answerer_name, 'reported', a.reported, 'helpfulness',  a.helpfulness
        )) AS answers
      FROM questions AS q
      LEFT JOIN answers AS a
      ON q.id = a.question_id
      WHERE q.product_id = $1
      AND q.reported = false
      GROUP BY q.id
      LIMIT $2
      OFFSET $3
      `,
      [product_id, count, offset], (err, result) => {
        if (err) {
          return err;
        } else {
          return result;
        }

      }
    );
    const result = {
      product_id: product_id,
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
// 20  USING (a.question_id)
// AND q.reported = false
// GROUP BY q.a_id
// LEFT JOIN answers AS a
// json_build_object(
//   'body', a.body, 'date_written', a.date_written, 'answerer_name', a.answerer_name, 'reported', a.reported, 'helpfulness',  a.helpfulness
// ) AS answers
// USING (question_id)
// array_remove(array_agg(DISTINCT   )