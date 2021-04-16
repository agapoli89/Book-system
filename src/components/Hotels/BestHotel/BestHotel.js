import { useEffect, useRef, useState } from "react";
import moment from 'moment';
import { Link } from 'react-router-dom';



const BestHotel = (props) => {
    const [time, setTime] = useState('');
    const endTime = useRef(moment().add(10, 'minutes').add(34, 'seconds'));
    const hotel = props.getHotel();
    let interval = useRef(null);
    

    useEffect(() => {
        interval.current = setInterval(() => {
            const leftTime = -moment().diff(endTime.current) / 1000;
            const minutes = Math.floor(leftTime / 60);
            const seconds = Math.floor(leftTime % 60);
            setTime(minutes > 0 || seconds > 0 ? `minut: ${minutes}, sekund: ${seconds}` : `Czas minął :(`);
            if (minutes < 0 && seconds < 0) {
                clearInterval(interval.current);
            }
        }, 1000);

        return () => clearInterval(interval.current)
    }, [endTime])

    if (!hotel) return null;

    return (
        <div className='card bg-success text-white'>
            <div className="card-header">Najlepsza oferta!</div>
            <div className='card-body d-flex justify-content-between'>
                <h5 className='card-title'>{hotel.name}</h5> <p>Ocena: {hotel.rating}</p>
                <Link to={`/hotele/${hotel.id}`} className="btn btn-sm btn-light d-flex align-items-center">Pokaż</Link>
            </div>
            <p className="text-center">Do końca oferty pozostało: {time}</p>
        </div>
    )
}

export default BestHotel;