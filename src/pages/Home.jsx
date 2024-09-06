import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import home_image from '../assets/image2.png'
import ProjectCard from '../components/ProjectCard'

function Home() {
    return (
        <>
            <div className='container-fluid bg-success p-4 mb-4 mt-4' style={{ width: '100%', height: '75vh' }}>
                <Row>

                    <Col md={6} className='d-flex justify-content-center align-items-center flex-column'>
                        <div>
                            <h3 className='text-light'>Project Fair</h3>
                            <h6>One stop destination for may sofware projects</h6>
                        </div>
                        <Link to={'/login'}>
                            <button className='btn btn-outline-light my-4'>GET STARTED<i class="fa-solid fa-arrow-right ms-3"></i></button>
                        </Link>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center align-items-center flex-column mt-5'>
                        <img src={home_image} width="75%" alt="" />
                    </Col>
                </Row>
            </div>
            <div className='container-fluid mb-5'>
                <h2 className='text-center my-5'>Expolre our Projects</h2>
                <marquee scrollAmount={20}>
                    <div className='row'>
                        <div className='col-md-4 justify-content-center d-flex p-4' style={{width:'400px'}}>
                            <ProjectCard />
                        </div>
                        <div className='col-md-4 justify-content-center d-flex p-4' style={{width:'400px'}}>
                            <ProjectCard />
                        </div>
                        <div className='col-md-4 justify-content-center d-flex p-4' style={{width:'400px'}}>
                            <ProjectCard />
                        </div>
                    </div>
                </marquee>

                <Link to={'/project'} className='text-primary' style={{ textDecoration: 'none' }}>
                    <h5 className='text-center'>See More Projects</h5>
                </Link>
            </div>
        </>
    )
}

export default Home