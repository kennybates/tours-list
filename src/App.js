import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'; // url to api for tours project

function App() {
  const [loading, setLoading] = useState(true); // state value for loading
  const [tours, setTours] = useState([]); // state value for tours set to empty array

  // fetch data
  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await fetch.json();
  }
  
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours />
    </main>
  );
  
}

export default App;
