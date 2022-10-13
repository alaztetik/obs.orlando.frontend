
import React, { useEffect, useState } from 'react';
import Expense from '../../components/expense/Expense';
import ExpenseWrapper from '../../components/expense/ExpenseWrapper';

export default function Expenses() {

    const [expenses, setExpenses] = useState([]);

    useEffect( () => {
        fetch('https://pear-shy-betta.cyclic.app/api/v0/expenses')
        .then(data => data.json())
        .then(data => setExpenses(data));
    }, []);

    return (
        <>
            {/* TODO: Show all the expenses in a table */}
            <p className='m-2'>Toplam Gider: <span className='font-bold'>{expenses.length}</span></p>
            <ExpenseWrapper>
                {expenses.map( expense => {
                    return (
                        <Expense
                            expenseType={expense.expenseType}
                            description={expense.description}
                            personPayed={expense.personPayed}
                            payDate={expense.payDate}
                            payAmounth={expense.payAmounth}
                        />
                    );
                })}
            </ExpenseWrapper>
        </>
    );
}