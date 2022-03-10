
const express = require('express');
const app = express();
const port = 3005;
//const cors = require('cors');
const morgan = require('morgan');
const {
  reportAnswer,
  helpfulAnswer,
  helpfulQuestion,
  reportQuestion,
  addAnswer,
  addQuestion,
  listAnswers,
  listQuestions
 } = require('./controllers');


app.use(express.json());
// app.use(cors());
app.use(morgan('dev'));


app.put('/api/qa/answers/:answer_id/report', reportAnswer);
app.put('/qa/answers/:answer_id/helpful', helpfulAnswer);
app.put('/qa/questions/:question_id/helpful', helpfulQuestion);
app.put('/api/qa/questions/:question_id/report', reportQuestion);
app.post('/api/qa/questions/:question_id/answers', addAnswer);
app.post('/api/qa/questions', addQuestion);
app.get('/api/qa/questions/:question_id/answers', listAnswers);
app.get('/api/qa/questions', listQuestions);
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
});