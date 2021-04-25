import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero-banner d-flex justify-content-left align-items-center text-white">
            <div className='custom-width w-50' style={{ paddingLeft: '50px' }}>
                <h1 className="hero-title pb-3">Creative & Professional</h1>
                <p className="hero-description pb-3 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur porro voluptatem id officiis commodi adipisci.</p>
                <Link to="/admin/dashboard"><button className="btn  site-btn">Get In Touch</button></Link>
            </div>
        </div>
    );
};

export default Banner;