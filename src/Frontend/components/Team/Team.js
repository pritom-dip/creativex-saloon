import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = ({ image, name, designation }) => {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <Link to="/" target="_blank">
                <div className="team-member">
                    <figure className="team-member__thumb">
                        <img className="img-fluid" src={image} alt={name} />
                    </figure>
                    <div className="team-member__content">
                        <div className="member-info">
                            <h3>{name}</h3>
                            <span className="designation">{designation}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Team;