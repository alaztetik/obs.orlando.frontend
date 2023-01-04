import { createContext, useState, useEffect } from "react";

const ExpenseContext = createContext([]);

export const ExpenseProvider = ({children}) => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/expenses`)
            .then((data) => data.json())
            .then((data) => setExpenses(data));
    });

    return (
        <ExpenseContext.Provider value={{expenses, setExpenses}}>
            {children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseContext;