import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6",
    }).then((response) => {
      console.log("Res.Data : ", response.data.results);
      setMovies(response.data.results);
    });
  }, []);

  return (
    <ul>
      {movies.map((m) => {
        return (
          <li>
            {m.title
              ? m.title
              : m.original_title
              ? m.original_title
              : m.original_name}
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
