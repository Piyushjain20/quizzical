import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="error--page">
      <h2>Error accured! Unable to fetch data</h2>
      <p>
        Tring going back to <Link to="config">Configration Menu</Link>
      </p>
    </div>
  );
}
