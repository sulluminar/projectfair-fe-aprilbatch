import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({ register }) {
    const registerForm = register ? true : false;
    return (
        <>
            <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='container w-75'>
                    <h5>
                        <Link className='text-warning' style={{ textDecoration: 'none', fontWeight: 'bolder' }} to={'/'}>
                            <i class="fa-solid fa-arrow-left me-3"></i>BACK TO HOME</Link>
                    </h5>
                    <div className='bg-light'>
                        <Row>
                            <Col md={6} className='p-4 d-flex justify-content-center align-items-center'>
                                <img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
                                    width='70%'
                                    alt=""

                                />
                            </Col>
                            <Col md={6} className='p-5 d-flex justify-content-center '>
                                <form className='w-100'>
                                    <h5 className='text-center'>
                                        <i class="fa-brands fa-stack-overflow me-3"></i>Project Fair</h5>
                                    {registerForm ?
                                        <>
                                            <h6 className='text-center mb-3 mt-3'>Sign Up To Your Account</h6>
                                            <input type="text" name="" id="" placeholder='Name' className='form-control rounded' />
                                        </>

                                        :
                                        <h6 className='text-center mb-3 mt-3'>Sign In To Your Account</h6>
                                    }
                                    <div className='mb-3 mt-3'>
                                        <input type="text" placeholder='Email Id' className='form-control rounded' />
                                    </div>
                                    <div className='mb-3'>
                                        <input type="password" placeholder='password' className='form-control rounded' />
                                    </div>
                                    {registerForm ?
                                        <div className='mb-3 mt-3'>
                                            <button className='btn btn-warning w-100 rounded'> REGISTER</button>
                                            <p className='mt-3'> Already A User? Click Here To
                                                <Link className='ms-2' style={{ textDecoration: 'none' }} to={'/login'}>LOGIN</Link></p>
                                        </div> :
                                        <div >
                                            <button className='btn btn-warning w-100 rounded'>LOGIN</button>
                                            <p className='mt-3'> Not Registered yet? Click Here To
                                                <Link className='ms-2' style={{ textDecoration: 'none' }} to={'/register'}>REGISTER</Link></p>
                                        </div>
                                    }
                                </form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth