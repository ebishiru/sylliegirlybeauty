import { createContext, useState, } from 'react';

export const AdminContext = createContext();

const AdminProvider = ({children}) => {
    const [ adminAccess, setAdminAccess ] = useState(false);

    return (
        <AdminContext.Provider value={{adminAccess, setAdminAccess}}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminProvider;