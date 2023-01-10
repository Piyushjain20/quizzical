import { Form, redirect } from "react-router-dom";
export default function ConfigPage() {
  return (
    <div className="config--page">
      <h1>Configration Menu</h1>
      <Form method="post" action="/game">
        <label htmlFor="amount">Number of Questions(5-20):</label>
        <input type="number" name="amount" id="amount" required min={5} max={20} placeholder={5} />
        <label htmlFor="category">Select Category:</label>
        <select name="category" id="category">
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Computers</option>
          <option value="19">Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="30">Gadgets</option>
          <option value="31">Japanese Anime & Manga</option>
        </select>
        <label htmlFor="difficulty">Select Difficulty:</label>
        <select name="difficulty" id="difficulty">
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label htmlFor="type">Select Questions Type:</label>
        <select name="type" id="type">
          <option value="">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
        <button>Take quiz</button>
      </Form>
    </div>
  );
}
export const myConfigration = async ({ request }) => {
  const data = await request.formData();
  console.log(request);
  console.log(await data);
  const configObj = {
    amount: data.get("amount"),
    category: data.get("category"),
    difficulty: data.get("difficulty"),
    type: data.get("type"),
  };
  //   console.log(configObj);
  return null;
  //   return redirect("/game");
};
