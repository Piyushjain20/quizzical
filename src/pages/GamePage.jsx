import { useState } from "react";
import { useActionData } from "react-router-dom";
import Question from "../components/question";

function GamePage() {
  const { results } = useActionData();
  const [data, setData] = useState(() => results);
  const [selectedAns, setSelectedAns] = useState([]);
  const handleClick = (id) => {};

  let listOfQues = data.map((obj, i) => {
    return <Question key={i} question={data[i].question} incorrect_answers={data[i].incorrect_answers} correct_answer={data[i].correct_answer} />;
  });

  return (
    <div className="game--page">
      {listOfQues}
      <button className="check--btn">Check answers</button>
    </div>
  );
}

export default GamePage;
