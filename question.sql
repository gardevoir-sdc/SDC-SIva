-- // //QUESTIONS AND ANSWERS : MONGODB SCHEMA

-- // //Add a question
-- // const questionSchema = new Schema({
-- //   _id: Number
-- //   body: String,
-- //   name: String,
-- //   email: String,
-- //   helpfulness: Number,
-- //   reported: Boolean,
-- //   product_id: Number,
-- //   date: {type: Date, default: Date.now}
-- // })

-- // //Add a answer
-- // const answerSchema = new Schema({
-- //   _id: Number
-- //   body: String,
-- //   name: String,
-- //   email: String,
-- //   helpfulness: Number,
-- //   photos: [String],
-- //   reported: Boolean,
-- //   question_id: Number,
-- //   date: {type: Date, default: Date.now}
-- // })
CREATE DATABASE siva;
\connect siva;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS answers_photos;

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  body VARCHAR(1000),
  date_written BIGINT NOT NULL,
  asker_name VARCHAR(50),
  asker_email VARCHAR(62),
  reported SMALLINT,
  helpfulness INT
);
CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  question_id INT NOT NULL,
  body VARCHAR(1000),
  date_written BIGINT NOT NULL,
  answerer_name VARCHAR(50),
  answerer_email VARCHAR(62),
  reported SMALLINT,
  helpfulness INT
);
CREATE TABLE answers_photos (
   id SERIAL PRIMARY KEY,
   answer_id INT NOT NULL,
   url VARCHAR(1000)
);

\COPY questions(id, product_id, body, date_written, asker_name, asker_email, reported, helpfulness)
FROM './csvs/questions.csv'
DELIMITER ','
CSV HEADER;

\COPY answers(id, question_id, body, date_written, answerer_name, answerer_email, reported, helpfulness)
FROM './csvs/answers.csv'
DELIMITER ','
CSV HEADER;

\COPY answers_photos(id, answer_id, url)
FROM './csvs/answers_photos.csv'
DELIMITER ','
CSV HEADER;

CREATE INDEX idx_product_id ON questions(product_id);
CREATE INDEX idx_question_id ON answers(question_id);
CREATE INDEX idx_answer_id ON answers_photos(answer_id);
CREATE INDEX idx_answers_reported ON answers (reported)
WHERE reported = 0;