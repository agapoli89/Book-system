import React from 'react';
import styles from './Hotel.module.css';
import hotelImg from '../../assets/images/hotel.jpg'

function Hotel() {
    return (
        <div className={`card ${styles.hotel}`}>
            <div className="card-body">
                <div className={`row`}>
                    <div className="col-4">
                        <img 
                            src={hotelImg}
                            alt=""
                            className="img-fluid img-thumbnail"
                        />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <p className={styles.title}>Hotel</p>
                                <span className="badge badge-light">Wrocław</span>
                            </div>
                            <div className="col text-right">
                                <h5>Ocena: 8.4</h5>
                                {/* eslint-disable-next-line */}  
                                <a href="#" className="btn btn-primary float-right mt-2 px-5">Pokaż</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className={styles.description}>Fuga nihil quae, aperiam dolorem repudiandae voluptatibus incidunt eaque maiores voluptate iusto quo explicabo culpa alias dolorum accusamus corporis quibusdam ipsum iure.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel;