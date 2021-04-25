import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from 'src/App';

const Header = () => {
    const [user, setUser] = useContext(UserContext);

    return (
        <section className="site-header">
            <div className="container" style={{ alignSelf: 'flex-start' }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-white" to="/">CreativeX</Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ justifyContent: 'flex-end', alignItems: 'center', 'width': '100%' }}>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/admin/review/add" className="nav-link">Review</Link>
                                </li>

                                <li className="nav-item">
                                    {
                                        user?.email ? <span className="nav-link">{user.name}</span> : <Link to="/login" className="nav-link"><button className="btn btn-primary site-btn">Login</button></Link>
                                    }
                                </li>

                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Header;