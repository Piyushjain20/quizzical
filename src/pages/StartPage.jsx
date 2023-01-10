import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <div className="start--page">
      <h1>Quizzical</h1>
      <p>Conquer your cluelessness with the ingeneous quiz app that helps you learn about the questions</p>
      <Link to="config">
        <button>Lets Start!</button>
      </Link>
    </div>
  );
}
