import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";


const Home = ({ searchInput }) => {
  const [movies, setMovies] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    let url = "";
    if (searchInput) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=229a6a0f891df5bf1176a4668af885c6&language=en-US&query=${searchInput}&page=1&include_adult=false`;
    } else {
      url =
        "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6";
    }

    axios({
      method: "get",
      url: url,
    })
      .then((response) => {
        setMovies(response.data.results);
      })
      .finally(() => {
        setShowLoading(false);
      });
  }, [searchInput]);

  return (
    <div className="flex w-full items-center justify-center mt-4">
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {showLoading && <CircularProgress />}
        
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="bg-gradient-to-r from-[#201d1f] to-[#3d272f] text-white hover:shadow-xl hover:shadow-black/30">
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                <img
                  className="h-full w-full aspect-[3/4] object-cover"
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                  alt=""
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/60 group-hover:via-black/90 group-hover:to-black/60"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center  text-center transition-all duration-500 group-hover:translate-y-0">
                  <p className="line-clamp-6 overflow-hidden mb-3 text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {movie.overview}
                  </p>
                </div>
              </div>
              <div className="flex justify-between p-2">
                <div>
                  <h1 className="line-clamp-2 text-lg font-bold text-white">
                    {movie.title
                      ? movie.title
                      : movie.original_title
                      ? movie.original_title
                      : movie.original_name}
                  </h1>
                </div>
                <div>
                  <button className="rounded-full bg-neutral-900 p-2 font-com text-sm text-white shadow shadow-black/60">
                    {movie.vote_average?.toFixed(1)}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
