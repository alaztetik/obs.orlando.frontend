import { createContext, useState, useEffect } from "react";

const EnrollmentContext = createContext([]);

export const EnrollmentProvider = ({children}) => {

    const [enrollments, setEnrollments] = useState([]);

    useEffect( () => {
      fetch(`${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/enrollments`)
          .then( (data) => data.json() )
          .then( (data) => setEnrollments(data) );
  });

    return (
        <EnrollmentContext.Provider value={{enrollments, setEnrollments}}>
            {children}
        </EnrollmentContext.Provider>
    );
};

export default EnrollmentContext;