import React, { useEffect, useState } from "react";
import PersonCard from "../cards/person-card";
import StarshipCard from "../cards/starship-card";
import PlanetCard from "../cards/planet-card";
import { starWarsRequest } from "../../services/sw-service";

import './app.css'

function App() {
  const [data, setData] = useState([]);
  const [queryParams, setQueryParams] = useState({ id: 1, type: "people" });
  const [isWaiting, setWaiting] = useState(false)

  const fetchData = async () => {
    try {
      setWaiting(true)
      const data = await starWarsRequest(queryParams.type, queryParams.id);
      setData(data);
      setWaiting(false)
    } catch (error) {
      console.log("Error", error)
      setQueryParams({ id: queryParams.id + 1, type: queryParams.type })
    }
  }

  useEffect(() => {
   fetchData()
  }, [queryParams]);

  const onNextClick = () => setQueryParams({ id: queryParams.id + 1, type: queryParams.type })

  return (
    <div className="App">
      <header>
        <button disabled={isWaiting} onClick={() => setQueryParams({ id: 1, type: "people" })}>People</button>
        <button disabled={isWaiting} onClick={() => setQueryParams({ id: 1, type: "planets" })}>Planets</button>
        <button disabled={isWaiting} onClick={() => setQueryParams({ id: 1, type: "starships" })}>Starships</button>
      </header>
        {queryParams.type === "people" && <PersonCard person={data} />}
        {queryParams.type === "planets" && <PlanetCard planet={data} />}
        {queryParams.type === "starships" && <StarshipCard starship={data} />}
        <button disabled={isWaiting} className="btnNext" onClick={onNextClick}>Next</button>
    </div>
  );
}

export default App;
