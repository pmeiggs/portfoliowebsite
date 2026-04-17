import "./banner.css";
import { useState, useEffect } from "react";
import bgImg from ".././images/ff.jpg";


function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    fetch("../data/movieData.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner movie">
      <img src="" alt="Background Image" className="bgImg active" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="content active">
              <img src="" alt="Movie Title" className="movie-title" />
              <h1 className="Title">Welcome to 123moovies</h1>
              <h4>
                <span>Year</span>
                <span><i>age</i></span>
                <span>lenght</span>
                <span>category</span>
              </h4>
              <p>loremasfasfafafaafafafaafaf</p>
              <div className="button">Button</div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="date">
              <h2>On 15th August</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;