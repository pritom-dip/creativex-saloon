import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from 'src/App';
import Payment from '../payment/Payment';

const Booking = ({ match }) => {
    const [user, setUser] = useContext(UserContext);
    const [service, setService] = useState({});
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [bookingData, setBookingData] = useState({});
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        fetch(`https://enigmatic-savannah-40617.herokuapp.com/service/${match.params.id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [match.params.id]);

    const onSubmit = (data, e) => {
        setShowPaymentForm(true);
        setBookingData(data);
    }

    const handlePayment = paymentId => {
        const bookingDetails = {
            ...user,
            ...bookingData,
            paymentId,
            orderTime: new Date(),
            price: service.price,
            service: service.name,
            image: service.image.img,
            status: 'Pending'
        };

        fetch(`https://enigmatic-savannah-40617.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.response) {
                    alert('Booking Done successfully');
                    history.push('/admin/dashboard');
                }
            });
    }

    return (
        <div className="row">
            <div className="col-md-12 col-xs-12" xs="12" md="12">
                <div className="card">
                    <div className="card-header">
                        Make a Booking Online.
                    </div>
                    <div className="card-body">

                        {
                            !showPaymentForm ? (
                                <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                                    <div className="form-group row">
                                        <div className="col-md-3" >
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-9 col-xs-12">
                                            <input defaultValue={user?.name} {...register("name", { required: true })} type="text" className="form-control" />
                                            {errors.name && <span className="text-danger">This field is required</span>}
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-3" >
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-9 col-xs-12">
                                            <input defaultValue={user?.email} {...register("email", { required: true })} type="text" className="form-control" />
                                            {errors.email && <span className="text-danger">This field is required</span>}
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-md-3" >
                                            <label>Service</label>
                                        </div>
                                        <div className="col-md-9 col-xs-12">
                                            <input defaultValue={service?.name} {...register("service")} type="text" className="form-control" />
                                            {errors.service && <span className="text-danger">This field is required</span>}
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-info">Submit</button>

                                </form>
                            ) : (
                                    <div className="form-group row">
                                        <Payment handlePayment={handlePayment} />
                                    </div>
                                )
                        }

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Booking;