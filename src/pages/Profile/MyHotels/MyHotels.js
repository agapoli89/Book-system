import { Link, useRouteMatch } from 'react-router-dom';
import axios from '../../../axios';
import { useState, useEffect } from 'react';
import { objectToArrayWithId } from '../../../helpers/objects';
import useAuth from '../../../hooks/useAuth';

export default function MyHotels(props) {
    const [auth] = useAuth();
    const { url } = useRouteMatch();
    const [hotels, setHotels] = useState([]);

    const fetchHotels = async () => {
        try {
            const res = await axios.get('/hotels.json');
            const newHotels = objectToArrayWithId(res.data).filter(hotel => hotel.user_id === auth.userId);
            setHotels(newHotels);
        } catch (ex) {
            console.log(ex.response);
        }
    }

    useEffect(() => {
        fetchHotels();
    }, []);

    return (
        <div>
            {hotels ? (
                <table className="table">
                    <thead>
                        <th>Nazwa</th>
                        <th>Opcje</th>
                    </thead>
                    <tbody>
                        {hotels.map(hotel => (
                            <tr>
                                <td>{hotel.name}</td>
                                <td>
                                    <button className="btn btn-warning">Edytuj</button>
                                    <button className="btn btn-danger ml-2">Usuń</button>
                                </td>    
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
            <p>Nie masz jeszcze żadnego hotelu</p>)}
            <Link to={`${url}/dodaj`} className="btn btn-primary">Dodaj hotel</Link>
        </div>
    )
}