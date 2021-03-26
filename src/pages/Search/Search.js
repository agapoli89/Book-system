import { useParams } from "react-router";

function Search(props) {

    const { term } = useParams();
    /* const searchHandler = term => {
        const newHotels = [...backendHotels].filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()));
        dispatch({ type: 'set-hotels', hotels: newHotels});
    } */

    return (
        <div>
            <h2>Wyniki frazy dla "{term}":</h2>
        </div>
    ) 
}

export default Search;