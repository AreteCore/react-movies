//this way is destructuring movie out of props, by itself. if props had other properties, you could enumerate them here too
//such as ({movie, venue, etc})
const MovieDisplay = ({ movie }) => {
    //this further destructures the properties of movie, so you can use {Title} {Year} etc
    if (movie) {
        const { Title, Poster, Year, Plot } = movie
        return (<div className="movie">
            <h1>The Movie Display Component</h1>
            <h2>{Title} ({Year})</h2>
            <h3>{Plot}</h3>
            <img src={Poster} />
        </div>)
    } else {
        // console.log("movie:", props.movie)
        return <h2>movie is null, search for something!</h2>
    }

}
//simplest way
// const MovieDisplay = (props) => {
//     if (movie) {
//         return <>
//         <h1>The Movie Display Component</h1>
//             <h2>{props.movie.Title} ({props.movie.Year})</h2>
//             <h3>{props.movie.Plot}</h3>
//             <img src={props.movie.Poster}/>
//         </>
//     } else {
//         // console.log("movie:", props.movie)
//         return <h2>movie is null, search for something!</h2>
//     }

// }

// we must export the Component to use it in other files
export default MovieDisplay

