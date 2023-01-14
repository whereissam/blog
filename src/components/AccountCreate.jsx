import { useMutation } from "@apollo/client"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

import { ADD_USER } from "./mutation/userMutation"

export default function SettingInfo (addressObj) {

  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [userName, setUserName] = useState(undefined)
  const [address, setAddress] = useState(addressObj.address)
  const navigate = useNavigate()
  console.log(addressObj)

  const [addUser, { data }] = useMutation(ADD_USER, {
    variables: { name, userName, address, email },
  });

  if (data) navigate('/')

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !address || !userName) {
      return alert("Please fill out all fields");
    }

    addUser(name, email, address, userName);
  };


  return (
    <>
      <div className="container light-style flex-grow-1 container-p-y">

        <h4 className="font-weight-bold py-3 mb-4">
          Account settings
        </h4>
        <form onSubmit={onSubmit}>

          <div className="card overflow-hidden">
            <div className="row no-gutters row-bordered row-border-light">
              <div className="col-md-3 pt-0">
                <div className="list-group list-group-flush account-settings-links">
                  <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
                </div>
              </div>
              <div className="col-md-9">
                <div className="tab-content">
                  <div className="tab-pane fade active show" id="account-general">
                    <hr className="border-light m-0" />

                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="text-right mt-3">
                        <button type="submit" className="btn btn-primary">Create Account</button>&nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
