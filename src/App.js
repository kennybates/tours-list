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

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
    console.log(tours); //Check tours in console
  }
  // callback useEffect to fetchTours();
  useEffect(() => {
    fetchTours();
  },[]);

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours}/>
    </main>
  );
  
}

export default App;
