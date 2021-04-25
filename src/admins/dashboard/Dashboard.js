import React, { lazy, useContext, useEffect, useState } from 'react'
import { UserContext } from 'src/App';

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://enigmatic-savannah-40617.herokuapp.com/orders?email=${user.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.log(err));

    fetch(`https://enigmatic-savannah-40617.herokuapp.com/isAdmin?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setIsAdmin(true);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleChange = (id, e) => {
    const orderData = {
      status: e.target.value
    };

    fetch(`https://enigmatic-savannah-40617.herokuapp.com/updateOrder/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.response > 0) {
          alert('Updated Successfully')
        }
      })
      .catch(err => console.log(err));

  }

  return (
    <>
      <div className="row">
        <div className="col-md-12 col-xs-12 col-sm-12">
          <div className="card">
            <div className="card-header">
              {
                isAdmin ? 'All Orders' : 'My orders'
              }
            </div>
            <div className="card-body">
              {
                isAdmin ? (
                  <table id="example" className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>PaymentId</th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        orders.length > 0 ? orders.map(order => {
                          return (
                            <tr key={order?._id}>
                              <td>{order?.name}</td>
                              <td>{order?.paymentId}</td>
                              <td>{order?.service}</td>
                              <td>${order?.price}</td>
                              <td>
                                <select value={order?.status} onChange={(e) => handleChange(order?._id, e)}>
                                  <option value="Pending">Pending</option>
                                  <option value="Processing">Processing</option>
                                  <option value="Done">Done</option>
                                </select>
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
                ) :
                  (
                    <>
                      <div className="row">
                        {
                          orders.length > 0 && orders.map(order => {
                            return (
                              <div key={order?._id} className="col-md-6">
                                <div className="card">
                                  <div className="card-header d-flex justify-content-between">
                                    <div>
                                      <h3>{order?.service}</h3>
                                    </div>
                                    <div className="pull-right">
                                      <span className="badge bg-primary text-white">{order?.status}</span>
                                    </div>
                                  </div>
                                  <div className="card-body d-flex">
                                    <img style={{ height: '80px' }} src={`data:image/png;base64,${order?.image}`} />
                                    <div style={{ marginLeft: '10px' }}>
                                      <p><span>Price: </span>{order?.price}</p>
                                      <p><span>Email: </span>{order?.email}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }

                      </div>

                    </>
                  )
              }


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
