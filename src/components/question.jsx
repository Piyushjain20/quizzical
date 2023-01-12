export default function Question({ object, selectOption, on }) {
  const { id, question, optionsArray, selectedOption, correct_answer } = object;
  function helper(option) {
    if (option === correct_answer) return "correct option";
    else if (option === selectedOption) return "wrong option disabled";
    else return "option disabled";
  }

  const AllOptionsEle = optionsArray.map((option, index) => {
    if (on) {
      return (
        <button key={index} className={helper(option)} onClick={() => selectOption(id, option)}>
          {option}
        </button>
      );
    }
    return (
      <button key={index} className={option === selectedOption ? "selected option" : "option"} onClick={() => selectOption(id, option)}>
        {option}
      </button>
    );
  });

  return (
    <div className="question--container">
      <h2 className="question">{question}</h2>
      <div className="options--container">{AllOptionsEle}</div>
    </div>
  );
}
