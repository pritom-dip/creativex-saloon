import {
    CBadge,
    CDataTable,
    CRow
} from '@coreui/react'
import { useEffect, useState } from 'react';
import usersData from '../users/UsersData';

const getBadge = status => {
    switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: return 'primary'
    }
}
const fields = ['name', 'registered', 'role', 'status']

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://enigmatic-savannah-40617.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const deleteService = id => {
        fetch(`https://enigmatic-savannah-40617.herokuapp.com/service/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.response) {
                    alert('Service deleted successfully');
                    const filteredId = services.filter(service => service?._id !== id);
                    setServices(filteredId);
                }
            })
            .catch(error => console.log(error));
    }


    return (
        <div className="row">
            <div className="col-md-12 col-xs-12 col-sm-12">
                <div className="card">
                    <div className="card-header">
                        Combined All Table
                    </div>
                    <div className="card-body">
                        <table id="example" className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    services.length > 0 ? services.map(service => {
                                        return (
                                            <tr key={service?._id}>
                                                <td>{service?.name}</td>
                                                <td>{service?.desc}</td>
                                                <td>{service?.price}</td>
                                                <td>
                                                    <img style={{ height: '50px' }} src={`data:image/png;base64,${service?.image.img}`} />
                                                </td>
                                                <td>
                                                    <button onClick={() => deleteService(service?._id)} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }) : (
                                            <tr>
                                                <td colSpan='5'>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div className="spinner-border" role="status">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                }



                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;