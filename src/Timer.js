import useInterval from "@use-it/interval";

export default function Timer({ timeLeft, setTimeLeft }) {
  useInterval(() => setTimeLeft(timeLeft - 1), 1000);

  return <h2>{timeLeft} Seconds</h2>
}