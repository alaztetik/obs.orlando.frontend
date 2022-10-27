
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

    function returnFormattedExpenseName(expenseType) {
        switch (expenseType) {
            case "startup":
                return "Kuruluş";
            case "electricity":
                return "Elektrik Faturası";
            case "water":
                return "Su Faturası";
            case "internet":
                return "Internet Faturası";
            case "phone":
                return "Telefon Faturası";
            case "naturalGas":
                return "Doğal Gaz";
            case "assests":
                return "Demirbaş";
            case "stationery":
                return "Kırtasiye";
            case "rent":
                return "Kira";
            case "restoration":
                return "Tadilat";
            case "transportation":
                return "Ulaşım";
            case "taxes":
                return "Vergi";
            case "shopping":
                return "Market";
            case "food":
                return "Yemek";
            case "finance":
                return "Finans";
            case "personelSalary":
                return "Personel - Maaş";
            case "personelInsurance":
                return "Personel - SGK";
            case "personelBonus":
                return "Personel - Prim";
            default:
                return "";
        }
    }

    
    function whoPaid(username) {
        switch (username) {
            case "ebruerkan":
                return "Ebru Erkan";
            case "emretas":
                return "Emre Taş";
            case "dogukani":
                return "Doğukan İzlimek";
            case "meltemmeraki":
                return "Meltem Meraki";
            case "alaztetik":
                return "admin";
            default:
                break;
        }
    }


    function totalExpense() {

        let total = 0;

        expenses.map(expense => {
            total += expense.payAmounth;
        });

        return total;
    }


    return (
        <>
            <p className='m-2'>Kalem Sayısı: <span className='font-bold'>{expenses.length}</span></p>
            <p className='m-2'>Toplam Gider: <span className='font-bold'>{totalExpense()}</span> ₺</p>
            <ExpenseWrapper>
                {expenses.map( expense => {
                    return (
                        <Expense
                            key={expense._id}
                            expenseType={returnFormattedExpenseName(expense.expenseType)}
                            description={expense.description}
                            personPayed={whoPaid(expense.personPayed)}
                            payDate={expense.payDate}
                            payAmounth={expense.payAmounth}
                        />
                    );
                })}
            </ExpenseWrapper>
        </>
    );
}