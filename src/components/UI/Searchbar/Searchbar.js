import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Searchbar(props) {
    const [term, setTerm] = useState('');
    const theme = useSelector(state => state.theme);
    const inputRef = useRef(null);
    const history = useHistory();

    const search = () => {
       history.push(`/wyszukaj/${term}`);
    }
    const onKeyDownHandler = e => {
        if (e.key === 'Enter') {
            search();
        }
    }

    const focusInput = () => {
        inputRef.current.focus();
    }

    useEffect(() => {
        focusInput();
    }, []);

    return (
        <div className="d-flex">
            <input 
            ref={inputRef}
            value={term}
            onKeyDown={onKeyDownHandler}
            onChange={e => setTerm(e.target.value)}
            className="form-control" 
            type="text" 
            placeholder="Szukaj..." />
            <button 
                onClick={search}
                className={`btn btn-${theme}`}>
                Szukaj
            </button>

        </div>
    )
}

export default Searchbar;