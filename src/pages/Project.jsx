import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'

function Project() {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <h3 className='text-center mt-5'>All Projects</h3>
            </div>
            <div className='row my-4'>
                <div className='col-md-4'></div>
                <div className='col-md-4 d-flex'>
                    <input type="text" className='form-control' placeholder='Search By Technology' />
                    <i class="fa-solid fa-magnifying-glass"
                        style={{ marginTop: '12px', marginLeft: '-28px', color: 'lightgrey' }}></i>
                </div>
                <div className='col-md-4'></div>
            </div>
            <div className='container row my-5 ms-5'>
                <div className='col-md-3'>
                    <ProjectCard/>
                </div>
            </div>
        </>
    )
}

export default Project