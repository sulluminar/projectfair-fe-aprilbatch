import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import { getAllProjectApi } from '../services/allApi'

function Project() {
    const [allProject, setAllProject] = useState([])
    const getAllProject = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token");
            const reqHeader = {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
            }
            const result = await getAllProjectApi(reqHeader);
            console.log("User Project");
            console.log(result)
            setAllProject(result.data)
        }

    }
    useEffect(() => {
        getAllProject()
    }, [])
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

                {
                    allProject.length > 0 ?
                        allProject.map((item) => (
                            <div className='col-md-3'>
                                <ProjectCard project={item} />
                            </div>
                        )) :
                        <p>No Projects found</p>
                }

            </div>
        </>
    )
}

export default Project