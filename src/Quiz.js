import { useState, useEffect } from "react";
import { Carousel, Row, Col, Button } from "react-bootstrap";
import Question from "./Question";
import QuestionNumbers from "./QuestionNumbers";
import Results from "./Results";
import Timer from "./Timer";

const quiz = [
  {
    text: "In JavaScript, you can't assign a `function` to a variable.",
    choices: ["True", "False"],
    correct: 1,
    answer: undefined
  },
  {
    text: "What method is used to return a `Promise` with a given value?",
    choices: ["`accept()`", "`then()`", "`finally()`", "`resolve()`"],
    correct: 3,
    answer: undefined
  },
  {
    text: `What is the value of \`sum\` after the loop?     

    let sum = 0;
    for(var i = 0; i < 5; i++) {
      sum += i % 2 === 0 ? 10 : 0;
    }`,
    choices: ["20", "30", "0", "10"],
    correct: 1,
    answer: undefined
  },
  {
    text: "Which data type holds `true` and `false` values?",
    choices: ["`String`", "`boolean`", "`Object`", "`Number`"],
    correct: 1,
    answer: undefined
  },
  {
    text: `What is the value of \`indicator\`?
    
    const indicator = 2 == "2";`,
    choices: ["`null`", "0", "`true`", "`false`"],
    correct: 2,
    answer: undefined
  },
  {
    text: "Node.js applications cannot run in a web browser.",
    choices: ["True", "False"],
    correct: 0,
    answer: undefined
  },
  {
    text: "Which of the follwing is an alternative package manager to NPM?",
    choices: ["Webpack", "Gulp", "Yarn", "package.json"],
    correct: 2,
    answer: undefined
  },
  {
    text: "Which of the following is a valid method used for fetching initial data in React?",
    choices: ["`componentDidMount()`", "`setState()`", "`document.onload()`", "`document.ready()`"],
    correct: 0,
    answer: undefined
  },
  {
    text: "JavaScript has a garbage collector to reclaim unused memory.",
    choices: ["True", "False"],
    correct: 0,
    answer: undefined
  },
  {
    text: "In the context of async / await, how do you handle errors?",
    choices: ["`await`", "`reject`", "`catch`", "`then`"],
    correct: 2,
    answer: undefined
  }
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180);
  const [finished, setFinished] = useState(false);
  const [timeoutId, setTimeoutId] = useState(setTimeout(() => setFinished(true), timeLeft * 1000));
  const [questions, setQuestions] = useState(quiz);
  const handleSelect = selectedIndex => setIndex(selectedIndex);

  useEffect(() => {
    if(questions.filter(question => question.answer !== undefined).length === questions.length) setFinished(true);
  }, [questions]);

  return (
    <Row>
      <Col md={3} />
      <Col md={6}>
        {finished ? <Results questions={questions} /> : <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />}
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
                onSubmit={answerIndex => {
                  questions[index].answer = answerIndex;
                  setQuestions([...questions]);

                  if(questions[index].correct !== answerIndex) {
                    const newTimeLeft = timeLeft - 10;

                    setTimeLeft(newTimeLeft);
                    clearTimeout(timeoutId);
                    setTimeoutId(setTimeout(() => setFinished(true), newTimeLeft * 1000));
                  }
                  if(index !== questions.length - 1) setIndex(index + 1);
              }} />
            </Carousel.Item>
          ))}
        </Carousel>
        <QuestionNumbers questions={questions} finished={finished} onChange={handleSelect} />
        <br />
        {!finished &&
          <Button
            variant="success"
            size="lg"
            style={{ marginTop: 5 }}
            onClick={() => {
              setFinished(true);
              setIndex(0);
            }}>
            Submit Quiz
          </Button>
        }
      </Col>
      <Col md={3} />
    </Row>
  );
}