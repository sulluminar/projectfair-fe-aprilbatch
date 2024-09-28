import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddProject from './AddProject'
import EditProject from './EditProject'
import { getUserProjectApi } from '../services/allApi'

function MyProject() {
    const [userProject, setuserProject]=useState([])
    const getUserProjects = async () => {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        const result = await getUserProjectApi(reqHeader);
        console.log("User project");
        console.log(result)
        setuserProject(result.data)
    }
    useEffect(() => {
        getUserProjects()
    }, [])
    return (
        <>
            <div className='shadow p-5 mb-5'>
                <div className='d-flex mt-4'>
                    <h5 className='text-success me-auto'>My Projects</h5>
                    <AddProject />
                </div>
                <div className='p-3 mt-4 rounded-2 d-flex bg-light'>
                    <h5>Media Player</h5>

                    <div className='d-flex ms-auto align-items-center'>
                        <EditProject />
                        <Link className='ms-3 text-success'>
                            <i class="fa-solid fa-link"></i>
                        </Link>
                        <Link className='ms-3 text-warning'>
                            <i class="fa-brands fa-github"></i>
                        </Link>
                        <Link className='ms-3 text-danger'>
                            <i class="fa-solid fa-trash"></i>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProject