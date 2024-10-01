import React, { createContext, useState } from 'react'

export const addProjectResponseContext = createContext()

function ContextShare({ children }) {
    // children is predifined props name used to share data beween compoents
    // create a state that need to be shared;
    const [addProjectResponse, setAddProjectResponse] = useState({})
    return (
        <>
            <addProjectResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
                {children}
            </addProjectResponseContext.Provider>
        </>
    )
}

export default ContextShare