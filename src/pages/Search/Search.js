import { useParams } from 'react-router-dom';
import { objectToArrayWithId } from '../../helpers/objects';
import axios from '../../axios';
import Hotels from '../../components/Hotels/Hotels';
import { useEffect, useState } from "react";

export default function Search(props) {
  const { term } = useParams();
  const [hotels, setHotels] = useState([]);

  const search = async () => {
    try {
      const res = await axios.get('/hotels.json');
      const newHotels = objectToArrayWithId(res.data)
                    .filter(hotel => hotel.name.toLowerCase().includes(term.toLowerCase()));
      setHotels(newHotels);
    } catch (ex) {
      console.log(ex.response);
    }
  }

  useEffect(() => {
    search();
  }, [term]);

  return (
    <div>
      <h2>Wyniki dla frazy "{term}":</h2>
      <Hotels hotels={hotels} />
    </div>
  );
}