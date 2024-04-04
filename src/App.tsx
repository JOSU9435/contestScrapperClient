import { useEffect, useState } from "react";
import Contest from "./components/Contest/Contest";
import * as Interfaces from "./global/interface";
import axios from "axios";

import "./App.scss";

function App() {
  const [contests, setContests] = useState<Interfaces.Contest.Contest[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/contest`
      );

      const data = response.data as Interfaces.Contest.Contest[];

      data.sort((a, b) => {
        return (
          new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
        );
      });
      setContests(data);
    })();
  }, []);

  return (
    <>
      <div className="top-bar">
        <div className="thead">
          <div>Contests</div>
          <div className="head-time">Time</div>
        </div>
      </div>
      <div className="app">
        {contests.map((contest, i) => (
          <Contest key={i} contest={contest} />
        ))}
      </div>
    </>
  );
}

export default App;
