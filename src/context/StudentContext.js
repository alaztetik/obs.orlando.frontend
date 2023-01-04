import { createContext, useState, useEffect } from "react";

const StudentContext = createContext([]);

export const StudentProvider = ({children}) => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/students`)
            .then((data) => data.json())
            .then((data) => setStudents(data));
    }, []);

    return (
        <StudentContext.Provider value={{students, setStudents}}>
            {children}
        </StudentContext.Provider>
    );
};

export default StudentContext;