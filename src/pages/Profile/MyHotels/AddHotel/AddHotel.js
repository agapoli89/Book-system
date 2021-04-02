import { useRef, useState } from "react";
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";
import Input from '../../../../components/Input/Input';

function AddHotel(props) {
    const imageRef = useRef();
    const [form, setForm] = useState({
        name: {
            value: '',
            error: '',
            showError: false,
            rules: ['required'],
        },
        description: {
            value: '',
            error: '',
            showError: false,
            rules: ['required'],
        },
        city: {
            value: '',
            error: '',
            showError: false,
            rules: ['required'],
        },
        rooms: {
            value: 2,
            error: '',
            showError: false,
            rules: ['required'],
        },
        features: {
            value: [],
            error: '',
            showError: false,
        },
        image: {
            value: null,
            error: '',
            showError: false,
        },
        status: {
            value: 0,
            error: '',
            showError: false,
            rules: ['required'],
        },
    });
    const [loading, setLoading] = useState(false);

    const submit = e => {
        e.preventDefault();
        setLoading(true);
        
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }

    const changeHandler = (value, fieldName) => setForm({...form, [fieldName]: {...form[fieldName], value} });

    return (
        <div className="card">
            <div className="card-header">Nowy hotel</div>
            <div className="card-body">

                <p className="text-muted">Uzupełnij dane hotelu</p>
                <form onSubmit={submit}>

                    <Input 
                        label="Nazwa"
                        value={form.name.value}
                        onChange={val => changeHandler(val, 'name')}
                        isValid={true}
                        showError={false}/>

                    <Input 
                        label="Opis"
                        type="textarea"
                        value={form.description.value}
                        onChange={val => changeHandler(val, 'description')}
                        error=""
                        showError={false}/>
                    
                    <Input 
                        label="Miejscowość"
                        value={form.city.value}
                        onChange={val => changeHandler(val, 'city')}
                        error=""
                        showError={false}/>

                    <Input 
                        label="Ilość pokoi"
                        value={form.rooms.value}
                        type="select"
                        onChange={val => changeHandler(val, 'rooms')}
                        options={[
                            { value: 1, label: 1},
                            { value: 2, label: 2},
                            { value: 3, label: 3},
                            { value: 4, label: 4},
                        ]}
                        error=""
                        showError={false}/>     

                    <h4>Udogodnienia</h4>
                    <Input 
                        type="checkbox"
                        value={form.features.value}
                        onChange={val => changeHandler(val, 'features')}
                        options={[
                            { value: 'tv', label: 'TV' },
                            { value: 'wifi', label: 'WiFi' },
                            { value: 'parking', label: 'Parking' },
                        ]}
                        error=""
                        showError={false}/>

                    <h4>Zdjęcie</h4>
                    <Input 
                        type="file"
                        onChange={val => changeHandler(val, 'image')}/>

                    <h4>Status</h4>
                    <Input 
                        type="radio"
                        name="status"
                        value={form.status.value}
                        onChange={val => changeHandler(val, 'status')}
                        options={[
                            { value: '1', label: 'Aktywny' },
                            { value: '0', label: 'Ukryty' },
                        ]}
                        error=""
                        showError={false}/>

                    <div className="text-right">
                        <LoadingButton loading={loading} className="btn-success">
                            Dodaj hotel!
                        </LoadingButton>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default AddHotel;