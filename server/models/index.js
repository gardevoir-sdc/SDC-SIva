

// module.exports = {
//   queryQuestion: (productId, callback) => {
//    let searchQuery = `SELECT * FROM questions WHERE id= $1;`;
//    // SELECT (body, date_written, asker_name, reported, helpful) FROM questions WHERE id= ${productId};`
//     pool.query(searchQuery, [productId], (error, res) => {
//       if (error) {
//         callback(error);
//       } else {
//         callback(null, res);
//       }
//     })
//   },
//   queryAnswers:  (productId, callback) => {
//     let searchQuery = `SELECT * FROM answers WHERE id= $1;`;
//     //SELECT (body,date_written,answerer_name,reported,helpful),
//     //url
//     // FROM
//   //  answers
// //INNER JOIN answers_photos
//   //  ON id = answer_id;
//      pool.query(searchQuery, [productId], (error, res) => {
//        if (error) {
//          callback(error);
//        } else {
//          callback(null, res);
//        }
//      })
//    }
// }