import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, price, desc, image } = service;
    return (
        <div className="col-md-4 custom-product mb-4">
            <Link to={`/admin/booking/${_id}`}>
                <div className="card single-product">
                    <div className="img-wrapper">
                        <img src={`data:image/png;base64,${image?.img}`} className="card-img-top" alt="image" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p>{desc}</p>

                        <div className="d-flex bd-highlight justify-content-between align-items-center">
                            <p style={{ fontWeight: 'bold', marginBottom: '0px' }}>Price : ${price}</p>
                            <div className="bd-highlight">
                                <button className="site-btn btn btn-primary rounded-pill">Get Service</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default Service;