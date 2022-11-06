import React, { useEffect, useState } from 'react';
import Expense from '../../components/expense/Expense';
import ExpenseWrapper from '../../components/expense/ExpenseWrapper';
import { formatUsername, formatExpenseName, formatPaymentMethod, formatDate } from '../../utils/formats';

export default function Expenses() {

    const [expenses, setExpenses] = useState([]);

    useEffect( () => {
        fetch(`${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/expenses`)
        .then(data => data.json())
        .then(data => setExpenses(data));
    }, []);


    function totalExpense() {

        let total = 0;

        expenses.forEach(expense => {
            total += expense.payAmounth;
        });

        return total;
    }


    let numberOfExpenses = expenses.length;


    return (
        <>
            <p className='m-2'>Kalem Sayısı: <span className='font-bold'>{expenses.length}</span></p>
            <p className='m-2'>Toplam Gider: <span className='font-bold'>{totalExpense()}</span> ₺</p>
            <ExpenseWrapper>
                {expenses.map( expense => {
                    return (
                        <Expense
                            no={numberOfExpenses--}
                            expense={expense}
                            key={expense._id}
                            expenseType={formatExpenseName(expense.expenseType)}
                            description={expense.description}
                            personPayed={formatUsername(expense.personPayed)}
                            paymentMethod={formatPaymentMethod(expense.paymentMethod)}
                            payDate={formatDate(expense.payDate)}
                            payAmounth={expense.payAmounth}
                        />
                    );
                })}
            </ExpenseWrapper>
        </>
    );
}