import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReducerContext from "../../context/reducerContext";

function Hotel(props) {
    const { id } = useParams();
    const [hotel, setHotel] = useState({});
    const reducer = useContext(ReducerContext);
    
    const fetchHotel = () => {
        
        setHotel({
            id: 1,
            name: 'Przy ratuszu',
            city: 'Wrocław',
            rating: 8.4,
            description: 'Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.',
            image: ''
          });
          reducer.dispatch({ type: 'set-loading', loading: false })
    }

    useEffect(() => {
        reducer.dispatch({ type: 'set-loading', loading: true })
        setTimeout(() => {
            fetchHotel();
        }, 500);
    }, []);

    if (reducer.state.loading) return null;

    return <h1>Hotel: {hotel.name}</h1>;
}

export default Hotel;