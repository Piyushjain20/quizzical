function GamePage() {
  return (
    <div className="game--page">
      <p>Hello Game Page</p>
    </div>
  );
}

export default GamePage;

export function loader({ request, params }) {
  //   console.log(params);
  //   console.log(request);
  //   const getQuestions = async () => {
  //     let query = `amount=${configObj.amount}`;
  //     if (configObj.category) query += `category${configObj.category}`;
  //     if (configObj.difficulty) query += `difficulty${configObj.difficulty}`;
  //     if (configObj.type) query += `type${configObj.type}`;
  //     const res = await fetch(`https://opentdb.com/api.php?${query}`);
  //     return res.json();
  //   };
  //   return getQuestions();
  return null;
}
