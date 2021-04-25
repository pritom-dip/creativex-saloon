import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from 'src/App';

const Review = () => {
    const [user, setUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        data.name = user.name;
        fetch(`https://enigmatic-savannah-40617.herokuapp.com/addReview`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.response) {
                    alert('Review Given Successfully');
                    e.target.reset();
                }
            })
    }

    return (
        <div className="row">
            <div className="col-md-12 col-xs-12" xs="12" md="12">
                <div className="card">
                    <div className="card-header">
                        Give a review
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                            <div className="form-group row">
                                <div className="col-md-3" >
                                    <label>Name</label>
                                </div>
                                <div className="col-md-9 col-xs-12">
                                    <input {...register("review", { required: true })} type="text" className="form-control" />
                                    {errors.review && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-3" >
                                    <label>Description</label>
                                </div>
                                <div className="col-md-9 col-xs-12">
                                    <input {...register("desc", { required: true })} type="text" className="form-control" />
                                    {errors.desc && <span className="text-danger">This field is required</span>}
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

export default Review;