import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";

function Hotel(props) {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);

    const setTitle = useWebsiteTitle();
    
    const fetchHotel = () => {
        
        setHotel({
            id: 1,
            name: 'Przy ratuszu',
            city: 'Wrocław',
            rating: 8.4,
            description: 'Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.',
            image: ''
          });
          setTitle('Przy ratuszu')
          setLoading(false);
    }

    useEffect(() => {
        setTimeout(() => {
            fetchHotel();
        }, 500);
    }, []);

    return loading ? <LoadingIcon /> : (
        <h1>Hotel: {hotel.name}</h1>
    );
}

export default Hotel;