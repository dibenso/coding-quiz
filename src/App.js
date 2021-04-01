import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaRegClock } from "react-icons/fa";
import Quiz from "./Quiz";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      <h2>Coding Quiz</h2>
      {started ? <Quiz /> :
        <Button variant="primary" onClick={() => setStarted(true)}>
          <p>Start Quiz</p>
          3 Minutes
          {" "}
          <FaRegClock size={20} color="white" />
        </Button>}
    </div>
  );
}

export default App;
