import { Table } from "react-bootstrap";

export default function Scores({ scores }) {
  console.log(scores);
  return (
    <>
      <h2>Scores</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Initials</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(({ initials, score }, index) => (
            <tr key={index}>
              <td>{initials}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}