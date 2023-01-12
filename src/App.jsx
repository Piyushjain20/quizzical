import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ConfigPage, { getQuesForMyConfig } from "./pages/ConfigPage";
import GamePage from "./pages/GamePage";
import blob1 from "./assets/blob1.svg";
import blob2 from "./assets/blob2.svg";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <div className="App">
      <img src={blob1} alt="blob1" className="blob1" />
      <RouterProvider router={router} />
      <img src={blob2} alt="blob2" className="blob2" />
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />}>
      <Route index element={<StartPage />}></Route>
      <Route path="config" element={<ConfigPage />}></Route>
      <Route path="game" element={<GamePage />} action={getQuesForMyConfig} errorElement={<ErrorPage />}></Route>
    </Route>
  )
);
