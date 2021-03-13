import { useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../../context/themeContext';

const propTypes = {
    onSearch: PropTypes.func.isRequired
};

function Searchbar(props) {
    const [term, setTerm] = useState('');
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

    return (
        <div className="d-flex">
            <input 
            value={term}
            onKeyDown={onKeyDownHandler}
            onChange={e => setTerm(e.target.value)}
            className="form-control" 
            type="text" 
            placeholder="Szukaj..." />
            <ThemeContext.Consumer>
                {value => 
                    <button 
                    onClick={search}
                    className={`btn btn-${value}`}>
                    Szukaj
                </button>
                }
            </ThemeContext.Consumer>
        </div>
    )
}

Searchbar.propTypes = propTypes;

export default Searchbar;