import React, { Component } from 'react';
import Hotel from './Hotel';
import styles from './Hotels.module.css';

class Hotels extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>Oferty:</h2>
                <Hotel />
                <Hotel />
                <Hotel />
            </div>
        )
    }
}

/* function Hotels() {
    return (
        <div>
            Hotele
        </div>
    )
} */

export default Hotels;