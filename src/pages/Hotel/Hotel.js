import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import LoadingIcon from "../../components/UI/LoadingIcon/LoadingIcon";
import useWebsiteTitle from "../../hooks/useWebsiteTitle";
import axios from '../../axios';
import useAuth from '../../hooks/useAuth';

function Hotel(props) {
    const history = useHistory();
    const [auth] = useAuth();
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(5);

    const setTitle = useWebsiteTitle(); 
    
    const fetchHotel =  async () => {
        try {
            const res = await axios.get(`/hotels/${id}.json`);
            setHotel(res.data);
            setTitle('Hotel - ' + res.data.name);
          } catch (ex) {
            console.log(ex.response);
          }
          setLoading(false);
    }

    useEffect(() => {
        fetchHotel();
    }, []);

    return loading ? <LoadingIcon /> : (
        <h1>Hotel: {hotel.name}</h1>
    );
}

export default Hotel;