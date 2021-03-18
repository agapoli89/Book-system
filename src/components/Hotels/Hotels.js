import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel';
import styles from './Hotels.module.css';

const propTypes = {
    hotels: PropTypes.array.isRequired
}

//class component (dodatkowo musimy zaimportować PureComponent)
/* class Hotels extends PureComponent {
    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Oferty:</h2>
                {this.props.hotels.map(hotel => (
                    <Hotel 
                    key={hotel.id} {...hotel}
                    />
                ))}
            </div>
        )
    }
} */

function Hotels(props) {

    const count = props.hotels.length;
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Oferty ({count}):</h2>
            {props.hotels.map(hotel => (
                <Hotel 
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