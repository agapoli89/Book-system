import { useState } from "react";
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

export default function Login(props) {
    const [auth, setAuth] = useAuth();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [passowrd, setPassowrd] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        setTimeout(() => {
            //logowanie
            setAuth(true);
            history.push('/');
        }, 500);
    }

    return (
        <div>
            <h2>Logowanie</h2>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Hasło</label>
                    <input 
                        type="password" 
                        value={passowrd} 
                        onChange={e => setPassowrd(e.target.value)} 
                        className="form-control"/>
                </div>
                <button className="btn btn-primary">Zapisz</button>
            </form>
        </div>
    )
}