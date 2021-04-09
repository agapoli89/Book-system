import React from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel';
import styles from './Hotels.module.css';

const propTypes = {
    hotels: PropTypes.array.isRequired,
}

function Hotels(props) {
    console.log(props);
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Oferty:</h2>
            {props.hotels.map(hotel => (
                <Hotel 
                    onOpen={props.onOpen}
                    key={hotel.id} {...hotel}
                />
            ))}
        </div>
    )
} 

Hotels.propTypes = propTypes;

const areEqual = (prevProps, nextProps) => {
    if (prevProps.hotels === nextProps.hotels);
}

export default React.memo(Hotels, areEqual);