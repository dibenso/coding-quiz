import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Form, Button } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const renderers = {
  code: ({ value }) => <SyntaxHighlighter style={a11yDark} language="javascript" children={value} />
}
const Hr = () => <hr style={{ borderTop: "1px solid rgba(0, 0, 0, 0.3)" }} />;
const prevNextStyle = { marginLeft: 5, marginRight: 5 };
const backgroundColorForChoice = ({ answer, correct }, index, finished) => {
  if(!finished) return "white";
  if(answer !== correct && answer === index) return "rgba(255, 0, 0, 0.3)";
  if(answer === index || correct === index) return "rgba(0, 128, 0, 0.3)";
}

export default function Question({ question, finished, index, isFirst, isLast, onLast, onNext, onSubmit }) {
  const [choice, setChoice] = useState(null);

  return (
    <div style={{
      textAlign: "left",
      borderRadius: 10,
      margin: 20,
      padding: 20,
      boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.5)"
    }}>
      <Form.Group>
        <Form.Label>
          <ReactMarkdown renderers={renderers}>
            {`#### ${index + 1}. ${question.text}`}
          </ReactMarkdown>
        </Form.Label>
        <Hr />
        {question.choices.map((choice, idx) => (
          <Form.Check
            disabled={finished || question.answer !== undefined  }
            key={String(idx)}
            type="radio"
            label={<ReactMarkdown>{choice}</ReactMarkdown>}
            name={String(index)}
            onClick={() => setChoice(idx)}
            style={{ backgroundColor: backgroundColorForChoice(question, idx, finished) }}
          />
        ))}
        <Hr />
      </Form.Group>
      {!isFirst && (
        <Button variant="primary" onClick={onLast} style={prevNextStyle}>
          <FaArrowAltCircleLeft size={20} color="white" />
          {" "}
          Previous
        </Button>
      )}
      {!isLast && (
        <Button variant="primary" onClick={onNext} style={prevNextStyle}>
          Next
          {" "}
          <FaArrowAltCircleRight size={20} color="white" />
        </Button>
      )}
      {question.answer === undefined && !finished && (
        <Button className="float-right" variant="success" disabled={choice === null} onClick={() => onSubmit(choice)}>
          Submit Answer
        </Button>
      )}
    </div>
  );
}