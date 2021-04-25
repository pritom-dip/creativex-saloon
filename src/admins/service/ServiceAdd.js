import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const ServiceAdd = () => {
    const [file, setFile] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleImage = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data, e) => {

        const formData = new FormData();

        formData.append('file', file);
        formData.append('name', data.name);
        formData.append('desc', data.desc);
        formData.append('price', data.price);

        fetch(`https://enigmatic-savannah-40617.herokuapp.com/addService`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.response) {
                    alert('Service added successfully');
                    e.target.reset();
                }

            })
            .catch(error => console.log(error));
    }

    return (
        <div className="row">
            <div className="col-md-12 col-xs-12" xs="12" md="12">
                <div className="card">
                    <div className="card-header">
                        Make New Service
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                            <div className="form-group row">
                                <div className="col-md-3" >
                                    <label>Name</label>
                                </div>
                                <div className="col-md-9 col-xs-12">
                                    <input {...register("name", { required: true })} type="text" className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-3" >
                                    <label>Short Description</label>
                                </div>
                                <div className="col-md-9 col-xs-12">
                                    <input {...register("desc", { required: true })} type="text" className="form-control" />
                                    {errors.desc && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-3" >
                                    <label>Price</label>
                                </div>
                                <div className="col-md-9 col-xs-12">
                                    <input {...register("price", { required: true })} type="text" className="form-control" />
                                    {errors.price && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-3" >
                                    <label>Image</label>
                                </div>
                                <div className="col-md-9 col-xs-12">
                                    <input onChange={handleImage} type="file" className="form-control" />
                                    {errors.image && <span className="text-danger">This field is required</span>}
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

export default ServiceAdd;