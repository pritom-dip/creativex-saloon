import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="row footer-wrapper">
            <div className="col-md-3 col-sm-12 col-xs-12">
                <Link to="/" className="logo_name">CreativeX</Link>
                <p className="mt-3 text-white">Your thinking, We create.</p>
            </div>

            <div className="col-md-3 col-sm-12 col-xs-12">
                <h3>About Us</h3>
                <ul className="about-menu mt-4">
                    <li>
                        <Link to="/">Hello</Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/review/add">Review</Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-3 col-sm-12 col-xs-12">
                <h3>Connect</h3>
                <ul className="about-menu mt-4">
                    <li>
                        <Link to="/">Facebook</Link>
                    </li>
                    <li>
                        <Link to="/">Twitter</Link>
                    </li>
                </ul>
            </div>

            <div className="col-md-3 col-sm-12 col-xs-12">
                <h3>Contact</h3>
                <p className="mt-4 text-white">Nikunja-2, Khilkhet, Dhaka</p>
                <p className="text-white">01635544915</p>
            </div>

        </div>
    );
};

export default Footer;