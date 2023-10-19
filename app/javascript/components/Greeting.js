import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const RandomGreeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.content);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default RandomGreeting;
