import axios from '../../../../axios';
import { useHistory } from 'react-router-dom';
import HotelForm from '../HotelForm';

function AddHotel(props) {

    const history = useHistory();
    
    const submit = async form => {
        await axios.post('/hotels.json', form)
        history.push('/profil/hotele');
    }

    return (
        <div className="card">
            <div className="card-header">Dodaj hotel</div>
            <div className="card-body">
                <p className="text-muted">Uzupełnij dane hotelu</p>
                    <HotelForm 
                        buttonText="Dodaj!"
                        onSubmit={submit}
                    />       
            </div>
        </div>
    );
}

export default AddHotel;