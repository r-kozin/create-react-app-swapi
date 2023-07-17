import getAllStarships, {getNextPage} from "./services/sw-api.js";
import React, { useState, useEffect } from "react";
import StarShipCard from "./StarShipCard.js";
import './style.css';

export default function App() {
  const [shipList, setShipList] = useState([]);
  const [result, setResult] = useState([]);

  async function handleAddShips(){
    if (shipList.length < result.count){
      console.log('loading more ships...');
    const nextPageResult = await getNextPage(result);
    console.log(nextPageResult);
    setResult(nextPageResult);
    const newShips = nextPageResult.results
    console.log([...shipList, ...newShips]);
    setShipList([...shipList, ...newShips]);
    } else {
    alert('All ships listed successfully')
    }
  }

  useEffect(() => {
    (async () => {
      try {
        console.log('loading ships...');
        const result = await getAllStarships();
        const ships = result.results
        console.log(result);
        setResult(result);
        setShipList(ships);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="app">
    {shipList.map((ship, index) => (
      <StarShipCard key={index} name={ship.name} cost_in_credits={ship.cost_in_credits}/>
      ))}
      <button onClick={handleAddShips}>View More</button>
    </div>
  );
}
