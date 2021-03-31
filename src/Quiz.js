import { useState, useEffect } from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import Question from "./Question";
import QuestionNumbers from "./QuestionNumbers";
import Results from "./Results";

const quiz = [
  {
    text: "In JavaScript, you can't assign a `function` to a variable.",
    choices: ["True", "False"],
    correct: 1,
    answer: null
  },
  {
    text: "What method is used to return a `Promise` with a given value?",
    choices: ["`accept()`", "`then()`", "`finally()`", "`resolve()`"],
    correct: 3,
    answer: null
  },
  {
    text: `What is the value of \`sum\` after the loop?     

    let sum = 0;
    for(var i = 0; i < 5; i++) {
      sum += i % 2 === 0 ? 10 : 0;
    }`,
    choices: ["20", "30", "0", "10"],
    correct: 1,
    answer: null
  },
  {
    text: "Which data type holds `true` and `false` values?",
    choices: ["`String`", "`boolean`", "`Object`", "`Number`"],
    correct: 1,
    answer: null
  },
  {
    text: `What is the value of \`indicator\`?
    
    const indicator = 2 == "2";`,
    choices: ["`null`", "0", "`true`", "`false`"],
    correct: 2,
    answer: null
  },
  {
    text: "Node.js applications cannot run in a web browser.",
    choices: ["True", "False"],
    correct: 0,
    answer: null
  },
  {
    text: "Which of the follwing is an alternative package manager to NPM?",
    choices: ["webpack", "gulp", "yarn", "package.json"],
    correct: 2,
    answer: null
  },
  {
    text: "Which of the following is a valid method used for fetching initial data in React?",
    choices: ["`componentDidMount()`", "`setState()`", "`document.onload()`", "`document.ready()`"],
    correct: 0,
    answer: null
  },
  {
    text: "JavaScript has a garbage collector to reclaim unused memory.",
    choices: ["True", "False"],
    correct: 0,
    answer: null
  },
  {
    text: "In the context of async / await, how do you handle errors?",
    choices: ["`await`", "`reject`", "`catch`", "`then`"],
    correct: 2,
    answer: null
  }
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [allAnswered, setAllAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [questions, setQuestions] = useState(quiz);
  const handleSelect = selectedIndex => setIndex(selectedIndex);

  useEffect(() => setAllAnswered(questions.filter(question => question.answer !== null).length === questions.length), [questions])

  return (
    <Row>
      <Col md={3} />
      <Col md={6}>
        {finished && <Results questions={questions} />}
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={1000*60*60*24}>
          {questions.map((question, index) => (
            <Carousel.Item key={String(index)}>
              <Question
                question={question}
                finished={finished}
                index={index}
                isFirst={index === 0}
                isLast={index === questions.length - 1}
                onLast={() => setIndex(index - 1)}
                onNext={() => setIndex(index + 1)}
                onChange={answerIndex => {
                  questions[index].answer = answerIndex;
                  setQuestions([...questions]);
              }} />
            </Carousel.Item>
          ))}
        </Carousel>
        {!finished &&
          <Button
            variant="primary"
            size="lg"
            disabled={!allAnswered}
            style={{ marginBottom: 5 }}
            onClick={() => {
              setFinished(true);
              setIndex(0);
            }}>
            Submit Quiz
          </Button>
        }
        <br />
        <QuestionNumbers questions={questions} finished={finished} onChange={handleSelect} />
      </Col>
      <Col md={3} />
    </Row>
  );
}