export default function Question({ question, correct_answer, incorrect_answers }) {
  const randomIndex = Math.floor(Math.random() * incorrect_answers.length);
  incorrect_answers.splice(randomIndex, 0, correct_answer);

  return (
    <div className="question--container">
      <h2 className="question">{decodeHtml(question)}</h2>
      <div>
        {incorrect_answers.map((option, index) => (
          <button key={index} className="option">
            {decodeHtml(option)}
          </button>
        ))}
      </div>
    </div>
  );
}
function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
