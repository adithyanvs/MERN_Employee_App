import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
    return (
        <div className='container' >
            <NavLink to="/" > Home  </NavLink>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <form className='mt-5' >
                        <div className="mb-3 col-lg-8 col-md-8 col-12 ">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3 col-lg-8 col-md-8 col-12 ">
                            <label for="exampleInputPassword1" class="form-label">Age</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 col-lg-8 col-md-8 col-12 ">
                            <label for="exampleInputPassword1" class="form-label">Profession</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3 col-lg-8 col-md-8 col-12 ">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>

                    </form>
                </div>
                <div className="col-2"></div>
            </div>


        </div>
    )
}

export default Register