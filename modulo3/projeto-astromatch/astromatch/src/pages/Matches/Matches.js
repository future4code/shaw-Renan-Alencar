import axios from "axios";
import React, { useEffect } from "react";
import { Clear } from "../../components/Clear/Clear";
import { Base_url } from "../../constants/Url";

const Matchs = () => {
  const [matches, setMatches] = React.useState("");

  useEffect(() => {
    axios
      .get(`${Base_url}/matches`)
      .then((res) => {
        setMatches(res.data.matches);
        
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente");
      });
  }, []);

  return (
    <div>
      <button onClick={Clear}>Resetar Matches</button>
      {matches && matches.map((match) => {
          return <li key={match.id}>{match.name}</li>;
        })}
    </div>
  );
};

export default Matchs;
