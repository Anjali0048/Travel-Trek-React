import React from "react";
import Tours from "./components/Tours";
import data from "./data";
import { useState } from "react";


const App = () => {

  const [tours, setTours] = useState(data)

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refersh
        </button>
      </div>
    );
  }

  return(  
    <div className="App">

      <Tours tours={tours} removeTour={removeTour}></Tours>

    </div>
  ) 
};

export default App;
