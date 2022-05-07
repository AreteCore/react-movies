import {useState} from 'react'


const Form = (props) => {
const [formState, setFormState] = useState({
    searchTerm: ""
})


function handleChange(event) {
    const newState = {...formState}
    //update the copy

    //this newState[event.target.name] is targeting whatever input you want, 
    //instead of something like formState.input and formState.title which isnt dry
    newState[event.target.name] = event.target.value
    setFormState(newState)

    //cleaner way:
    // setFormState({...formState, [event.target.name]: event.target.value})
    
    //below is the wrong way
    // formState.searchTerm = event.target.value 
    // console.log(formState)
    // setFormState(formState)
}

function handleSubmit(event) {
    //prevent refresh
    event.preventDefault()
    //now we gotta pass the searchTerm to getmovie
    props.getMovie(formState.searchTerm)
    setFormState({
        searchTerm: ""
    })

}
    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="searchTerm" 
            value={formState.searchTerm} 
            onChange={handleChange}/>
            <input type="submit" value="submit" />
        </form>
    </div>)
}

// we must export the Component to use it in other files
export default Form