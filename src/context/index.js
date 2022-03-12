import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const State = ({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://smartqdemo.firebaseio.com/events-data.json"
      );

      const parsedResponse = await response.json();

      setData(parsedResponse);
    })();
  }, []);

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default State;
