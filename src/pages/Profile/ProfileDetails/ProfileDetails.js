import { useEffect, useState } from 'react';
import LoadingButton from '../../../components/UI/LoadingButton/LoadingButton';

export default function ProfileDetails(props) {

    const [email, setEmail] = useState('agapoli@gmail.pl');
    const [password, setpassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        setTimeout(() => {
        
            //zapisywanie
            
            setLoading(false);
        }, 500);
    }

    function validateEmail(text) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(text);
    }

    useEffect(() => {
        if (validateEmail(email)) {
            setErrors({...errors, email: ''})
        } else {
            setErrors({...errors, email: 'Niepoprawny email'})
        }
    }, [email]);

    useEffect(() => {
        if (password.length >= 4 || !password) {
            setErrors({...errors, password: ''})
        } else {
            setErrors({...errors, password: 'Wymagane co najmniej 4 znaki'})
        }
    }, [password]);

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
                        value={password} 
                        onChange={e => setpassword(e.target.value)} 
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}/>
                    <div className="invalid-feedback">
                        {errors.password}
                    </div>
                </div>
                <LoadingButton loading={loading}>Zapisz</LoadingButton>
            </form>
    );
};