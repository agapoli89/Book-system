import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/themeContext';

const propTypes = {
    onSearch: PropTypes.func.isRequired
};

function Searchbar(props) {
    const [term, setTerm] = useState('');
    const theme = useContext(ThemeContext);

    const search = () => {
        /* console.log('szukaj', term); */
        props.onSearch(term);
    }
    const onKeyDownHandler = e => {
        if (e.key === 'Enter') {
            /* props.onSearch(term); */
            search();
        }
    }

    const focusInput = () => {
        const input = document.querySelector('.toFocus').focus();
    }

    useEffect(() => {
        focusInput();
    }, []);


    return (
        <div className="d-flex">
            <input 
            value={term}
            onKeyDown={onKeyDownHandler}
            onChange={e => setTerm(e.target.value)}
            className="form-control toFocus" 
            type="text" 
            placeholder="Szukaj..." />
            <button 
                onClick={search}
                className={`btn btn-${theme.color}`}>
                Szukaj
            </button>

        </div>
    )
}

Searchbar.propTypes = propTypes;

export default Searchbar;