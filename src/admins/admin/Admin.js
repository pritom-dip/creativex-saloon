import React from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        fetch(`https://enigmatic-savannah-40617.herokuapp.com/addAdmin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.response) {
                    alert('inserted successfully');
                    e.target.reset();
                }
            })
    }

    return (
        <div className="row">
            <div className="col-md-12 col-xs-12" xs="12" md="12">
                <div className="card">
                    <div className="card-header">
                        Make Admin
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                            <div className="form-group row">
                                <div className="col-md-3" >
                                    <label>Email</label>
                                </div>
                                <div className="col-md-9 col-xs-12">
                                    <input {...register("email", { required: true })} type="email" className="form-control" />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>

                            <div className="d-flex justify-content-end">
                                <button className="btn btn-info" type="submit">Save</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Admin;