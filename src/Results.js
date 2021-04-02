import { useState } from "react";
import { Jumbotron, Modal, Button, InputGroup, FormControl, Row, Col } from "react-bootstrap";
import Loader from "react-loader-spinner";
import Scores from "./Scores";

export default function Results({ questions }) {
  const correct = questions.filter(question => question.answer === question.correct).length;
  const score = (correct / questions.length) * 100;
  const [initials, setInitials] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);
  const [scores, setScores] = useState(null);
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Initials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <InputGroup>
              <FormControl onChange={event => setInitials(event.target.value)} />
            </InputGroup>
          </Col>
          <Col md={4} />
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            disabled={!initials || initials === ""}
            onClick={async () => {
              setFetching(true);
              setShow(false);
              try {
                const response = await fetch("/api/scores", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({ score, initials })
                });

                setError(false);
                setFetching(false);
                setScores((await response.json()).sort(({ score: score1 }, { score: score2 }) => score1 < score2));
              } catch {
                setError(true);
                setFetching(false);
              }
            }}
          >
            Submit Score
          </Button>
        </Modal.Footer>
      </Modal>
      <Jumbotron>
        <h1>{score} %</h1>
        <p>{correct} / {questions.length} questions answered correctly</p>
        {correct !== questions.length && <p>Scroll down to review quiz</p>}
        {fetching && <Loader type="Puff" color="black" height={100} width={100} />}
        {error && "Unable to fetch / submit score"}
        {scores && <Scores scores={scores} />}
      </Jumbotron>
    </>
  );
}