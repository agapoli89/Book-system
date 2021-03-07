import React from 'react';
import styles from './Hotel.module.css';
import hotelImg from '../../assets/images/hotel.jpg'

function Hotel() {
    return (
        <div className={`row ${styles.hotel}`}>
            <div className="col-4">
                <img 
                    src={hotelImg}
                    alt=""
                    className="img-fluid"
                />
            </div>
            <div className="col-8">
                <div className="row">
                    <div className="col">
                        <p>Hotel</p>
                        <p>Miasto</p>
                    </div>
                    <div className="col">
                        <p>Ocena: 8.4</p>
                        <p>Opinie: 215</p>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <p>Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.</p>
                {/* eslint-disable-next-line */}
                <a href="#" className="btn btn-primary">Pokaż</a>
            </div>
        </div>
    )
}

export default Hotel;