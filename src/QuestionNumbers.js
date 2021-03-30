import { Button, ButtonGroup } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

const buttonLogo = ({ answer, correct }) => {
  if(answer === correct) return <FaCheck size={10} color="white" />
  
  return <FaTimes size={10} color="white" />
}
const variant = ({ answer, correct }, finished) => {
  if(finished && answer === correct) return "success";
  if(finished) return "danger";
  if(answer !== null) return "secondary";
  
  return "primary";
}

export default function QuestionNumbers({ questions, finished, onChange }) {
  return (
    <ButtonGroup aria-label="Question Numbers">
      {questions.map((question, index) => (
        <Button
          key={String(index)}
          variant={variant(question, finished)}
          style={{ marginLeft: 5, marginRight: 5 }}
          onClick={() => onChange(index)}
        >
          {finished && buttonLogo(question)}
          {" "}
          {index + 1}
        </Button>
      ))}
    </ButtonGroup>
  );
}