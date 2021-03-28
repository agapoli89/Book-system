import { useEffect, useState } from 'react';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';

export default function ProfileDetails(props) {

    const [email, setEmail] = useState('agapoli@gmail.pl');
    const [passowrd, setPassowrd] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        email: '',
        passowrd: '',
    });

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        setTimeout(() => {
        
            //zapisywanie
            
            setLoading(false);
        }, 500);
    }

    useEffect(() => {

    }, [email]);

    return (
        <form onSubmit={submit}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        className={`form-control ${errors.email ? "is-invalid" : "is-valid"}`}/>
                    <div className="invalid-feedback">
                        {errors.email}
                    </div>
                    <div className="valid-feedback">Wszystko gra!</div>
                </div>
                <div className="form-group">
                    <label>Hasło</label>
                    <input 
                        type="password" 
                        value={passowrd} 
                        onChange={e => setPassowrd(e.target.value)} 
                        className={`form-control ${errors.passowrd ? "is-invalid" : ""}`}/>
                    <div className="invalid-feedback">
                        {errors.passowrd}
                    </div>
                </div>
                <LoadingButton loading={loading}>Zapisz</LoadingButton>
            </form>
    );
};