
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
  addQuestion
 } = require('./controllers');
//  const addAnswer = require('./controllers/addAnswer.js');
//  const   addQuestion
//  = require('./controllers/addQuestion.js');

app.use(express.json());
// app.use(cors());
app.use(morgan('dev'));

// app.get('/qa/questions', getQuestion);

// app.get('/qa/questions/:question_id/answers', getAnswers);

app.put('/qa/answers/:answer_id/report', reportAnswer);
app.put('/qa/answers/:answer_id/helpful', helpfulAnswer);
app.put('/qa/questions/:question_id/helpful', helpfulQuestion);
app.put('/qa/questions/:question_id/report', reportQuestion);
app.post('/qa/questions/:question_id/answers', addAnswer);
app.post('/qa/questions', addQuestion);
//app.get('qa/questions/:question_id/answers', listAnswers);
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
});