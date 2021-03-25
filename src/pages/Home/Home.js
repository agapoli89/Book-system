import { useContext, useEffect } from 'react';
import LastHotel from '../../components/Hotels/LastHotel/LastHotel';
import useStateStorage from "../../hooks/useStateStorage";
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import BestHotel from '../../components/Hotels/BestHotel/BestHotel';
import Hotels from '../../components/Hotels/Hotels';
import ReducerContext from '../../context/reducerContext';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';

const backendHotels = [
    {
      id: 1,
      name: 'Przy ratuszu',
      city: 'Wrocław',
      rating: 8.4,
      description: 'Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.',
      image: ''
    },
    {
      id: 2,
      name: 'Pod stokiem',
      city: 'Wisła',
      rating: 9.5,
      description: 'Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.',
      image: ''
    },
    {
      id: 3,
      name: 'Nad morzem',
      city: 'Gdynia',
      rating: 7.8,
      description: 'Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.',
      image: ''
    }
  ]

export default function Home(props) {
    useWebsiteTitle('Noclegi-strona główna');
    const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);
    const reducer = useContext(ReducerContext);

    const getBestHotel = () => reducer.state.hotels.length < 2
        ? null 
        : reducer.state.hotels.sort((a,b) => a.rating > b.rating ? -1 : 1)[0];

    const openHotel = hotel => setLastHotel(hotel);
    const removeLastHotel = () => setLastHotel(null);

    useEffect(() => {
        setTimeout(() => {
          reducer.dispatch({ type: 'set-hotels', hotels: backendHotels });
          reducer.dispatch({ type: 'set-loading', loading: false })
        }, 1000);
    }, []);

    if (reducer.state.loading) {
        <LoadingIcon />;
    }

    return (
        <>
            {lastHotel ? <LastHotel {...lastHotel} onRemove={removeLastHotel}/> : null}
            {getBestHotel() ? <BestHotel getHotel={getBestHotel}/> : null}
            <Hotels onOpen={openHotel} hotels={reducer.state.hotels} />
        </>
    )
}