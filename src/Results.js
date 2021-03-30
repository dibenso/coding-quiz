import { Jumbotron } from "react-bootstrap";

export default function Results({ questions }) {
  const correct = questions.filter(question => question.answer === question.correct).length;
  const score = (correct / questions.length) * 100;

  return (
    <Jumbotron>
      <h1>{score} %</h1>
      <p>{correct} / {questions.length} questions answered correctly</p>
      {correct !== questions.length && <p>Scroll down to review quiz</p>}
    </Jumbotron>
  );
}