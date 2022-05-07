import logo from './logo.svg';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
import {useState, useEffect} from "react"



function App() {
  const API_KEY="46f634da"
  const [movie, setMovie] = useState(null)
  const getMovie = async (searchTerm) => {
    //here we make the api call
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
    )
    //convert response to json
    //response has all kinds of extra stuff added so we use this to just get waht we need
    const data = await response.json()
    //updating the state
    // console.log(data)
    setMovie(data)
      // console.log("movie",movie)
  }

  console.log(movie)

  // useEffect takes a function and an array 
  //the function will run once when the component loads ONLY
  //will only repeat if any value in the array changes

  const movieList = ["Snatch", "71", "Fight Club", "Pulp Fiction"]
  const randomNum = Math.floor(Math.random()*movieList.length)
  useEffect(() => {getMovie(movieList[randomNum])}, [])



  
  return (
    <div className="App">
      {/* //pass the form the getMovie function as a prop */}
    <Form getMovie={getMovie}/>
    <MovieDisplay  movie={movie}/>
    </div>
  );

}

export default App;

// App()