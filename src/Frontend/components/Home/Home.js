import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Team from '../Team/Team';
import Review from '../Review/Review';
import Service from '../Service/Service';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import './Home.css';
import Team1 from 'src/assets/images/team1.jpg'
import Team2 from 'src/assets/images/team2.jpg'
import Team3 from 'src/assets/images/team3.jpg'
import Gallery1 from 'src/assets/images/01.jpg'
import Gallery2 from 'src/assets/images/02.jpg'
import Gallery3 from 'src/assets/images/03.jpg'

const Home = () => {
    const [services, setServices] = useState([]);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://enigmatic-savannah-40617.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data));

        fetch(`https://enigmatic-savannah-40617.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <main className="container mt-5">

                <section className="Gallery-part pt-5 mt-5">
                    <div className="col-md-12">
                        <div className="text-center mb-5 ">
                            <h6 className="service-subtitle">Gallery</h6>
                            <h1 className="service-title pb-5">Our Recent Works</h1>
                        </div>
                    </div>

                    <div className="row">
                        <Gallery image={Gallery1} />
                        <Gallery image={Gallery2} />
                        <Gallery image={Gallery3} />
                    </div>

                </section>


                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center mt-5 mb-5" id="service">
                            <h6 className="service-subtitle">Our Services</h6>
                            <h1 className="service-title pb-5">What We Offer</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        services.length > 0 && services.map(service => <Service key={service?._id} service={service} />)
                    }
                </div>

                <section className="project-part pt-5 mt-5">
                    <div className="col-md-12">
                        <div className="text-center mb-5 ">
                            <h6 className="service-subtitle">Teams</h6>
                            <h1 className="service-title pb-5">Our Team Members</h1>
                        </div>
                    </div>

                    <div className="row">
                        <Team image={Team1} name={'John Doe'} designation={'Hair Specialist'}></Team>
                        <Team image={Team2} name={'Maria Doe'} designation={'Straightner Specialist'}></Team>
                        <Team image={Team3} name={'Sub Doe'} designation={'Hair Specialist'}></Team>
                    </div>
                </section>

                <section className="review-part pt-5 mt-5">
                    <div className="col-md-12">
                        <div className="text-center mb-5 ">
                            <h6 className="service-subtitle">Reviews</h6>
                            <h1 className="service-title pb-5">See What Our Clients Say</h1>
                        </div>
                    </div>

                    <div className="row">
                        {
                            reviews.length && reviews.map(review => <Review key={review?._id} review={review} />)
                        }
                    </div>

                </section>

                <section className="Contact-part pt-5 mt-5">
                    <div className="col-md-12">
                        <div className="text-center mb-5 ">
                            <h6 className="service-subtitle">Contact</h6>
                            <h1 className="service-title pb-5">Get In Touch</h1>
                        </div>
                    </div>

                    <Contact />

                </section>

            </main>

            <footer className="footer mt-5 p-5">
                <div className="container">
                    <Footer />
                </div>
            </footer>

        </div>
    );
};

export default Home;