import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showMsg, setShowMsg] = useState({});

    const onSubmit = (data, e) => {
        setShowMsg({});

        fetch(`https://enigmatic-savannah-40617.herokuapp.com/addContact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.response) {
                    setShowMsg({ success: 'Your message has been submitted successfully.' });
                    e.target.reset();
                }
            })
            .catch(error => {
                setShowMsg({ error: 'Something Went Wrong. Try again later.' });
            })
    }

    return (
        <div className="row">

            <div className="col-md-6 col-sm-12 col-xs-12 mb-4">
                <h3 className="mb-3">Contact Us Here</h3>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="row mb-3">
                        <div className="col">
                            <input  {...register("fname", { required: true })} type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            {errors.fname && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col">
                            <input  {...register("lname", { required: true })} type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            {errors.lname && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <textarea placeholder="Message Here..." {...register("msg", { required: true })} className="form-control"></textarea>
                            {errors.msg && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    {
                        showMsg?.success && <p className="text-success fw-bold">{showMsg.success}</p>
                    }
                    {
                        showMsg?.error && <p className="text-danger fw-bold">{showMsg.error}</p>
                    }

                    <button className="btn btn-info">Submit</button>

                </form>

            </div>

            <div className="col-md-6 col-sm-12 col-xs-12">
                <h3 className="text-center mb-4">Hello world</h3>
                <div className="d-flex justify-content-center align-items-center" style={{ fontSize: '22px' }}>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    <div className="mx-3">Khilkhet</div>
                </div>

                <div className="d-flex justify-content-center align-items-center" style={{ fontSize: '22px' }}>
                    <FontAwesomeIcon icon={faPhone} />
                    <div className="mx-3">01635544915</div>
                </div>

                <div className="d-flex justify-content-center align-items-center" style={{ fontSize: '22px' }}>
                    <FontAwesomeIcon icon={faEnvelopeSquare} />
                    <div className="mx-3">info@creativex.com</div>
                </div>

            </div>

        </div >

    );
};

export default Contact;