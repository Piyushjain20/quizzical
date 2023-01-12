import { useEffect, useState } from "react";
import { Link, useActionData, useRouteError } from "react-router-dom";
import Question from "../components/question";

function GamePage() {
  const { results } = useActionData();
  const [data, setData] = useState(() => {
    function decodeHtml(html) {
      var txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    }
    function createOptions(obj) {
      const randomIndex = Math.floor(Math.random() * obj.incorrect_answers.length);
      obj.incorrect_answers.splice(randomIndex, 0, obj.correct_answer);
      return obj.incorrect_answers.map((opt) => decodeHtml(opt));
    }
    return results.map((obj, index) => {
      return {
        id: index,
        question: decodeHtml(obj.question),
        optionsArray: createOptions(obj),
        selectedOption: "",
        correct_answer: decodeHtml(obj.correct_answer),
      };
    });
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const selectOption = (id, optionValue) => {
    console.log(id, optionValue);
    setData((prev) =>
      prev.map((obj) => {
        return obj.id === id ? { ...obj, selectedOption: optionValue } : obj;
      })
    );
  };
  console.log(data);
  const checkAns = () => {
    setIsDisabled(true);
  };
  function calculateScore() {
    return data.filter((obj) => obj.selectedOption === obj.correct_answer).length;
  }

  let listOfQues = data.map((obj) => {
    return <Question key={obj.id} object={obj} selectOption={selectOption} on={isDisabled} />;
  });
  return (
    <div className="game--page">
      {listOfQues}
      {isDisabled ? (
        <>
          <h3>
            You scored {calculateScore()}/{data.length} correct answers
          </h3>
          <Link to="../config">
            <button className="check--btn">Play again</button>
          </Link>
        </>
      ) : (
        <button className="check--btn" onClick={checkAns}>
          Check answers
        </button>
      )}
    </div>
  );
}

export default GamePage;
