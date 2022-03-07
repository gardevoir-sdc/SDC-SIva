module.exports.reportAnswer = require('./reportAnswer');
module.exports.helpfulAnswer = require('./helpfulAnswer');
module.exports.helpfulQuestion = require('./helpfulQuestion');
module.exports.reportQuestion = require('./reportQuestion');
module.exports.addAnswer = require('./addAnswer');
module.exports.addQuestion = require('./addQuestion');
// const {queryQuestion, queryAnswers} = require('../models');
// module.exports ={
//   getQuestion: (req, res, next) => {
//     const{ product_id } = req.query;
//     //console.log("product_id = ", product_id);
//     queryQuestion(product_id, (error, success) => {
//       if (error) {
//         res.status(400).send(error);
//       } else {
//         res.status(200).send(success);
//       }
//     });
//   },
//   getAnswers: (req, res, next) => {
//     const{ product_id } = req.query;
//     queryAnswers(product_id, (error, success) => {
//       if (error) {
//         res.status(400).send(error);
//       } else {
//         res.status(200).send(success);
//       }
//     });
//   },
//   reportAnswer: (req, res, next) => {
//     const{ product_id } = req.query;
//     queryAnswers(product_id, (error, success) => {
//       if (error) {
//         res.status(400).send(error);
//       } else {
//         res.status(200).send(success);
//       }
//     });
//   },
// }
// //.rows[0].row_to_json