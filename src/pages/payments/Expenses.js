import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Expense from '../../components/expense/Expense';
import ExpenseWrapper from '../../components/expense/ExpenseWrapper';

export default function Expenses() {

    const [expenses, setExpenses] = useState([]);

    useEffect( () => {
        // fetch('http://localhost:4000/api/v0/expenses')
        fetch('https://pear-shy-betta.cyclic.app/api/v0/expenses')
        .then(data => data.json())
        .then(data => setExpenses(data));
    }, []);

    function formatExpenseName(expenseType) {
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
            case "bookTrainingMaterial":
                return "Kitap / Eğitim Materiyali";
            case "payback":
                return "Kayıt İptali / İade";
            case "event":
                return "Organizasyon / Etkinlik";
            case "other":
                return "Diğer";
            default:
                return "";
        }
    }

    
    function formatWhoPaid(username) {
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

        expenses.forEach(expense => {
            total += expense.payAmounth;
        });

        return total;
    }


    function formatDate(stringDate) {
        moment.locale();
        const date = moment(stringDate).format('D MMM YY');
        return date;
    }


    function formatPaymentMethod(method) {
        switch (method) {
            case "creditCardCorporate":
                return "Kredi Kartı (Kurumsal)";
            case "creditCardPersonal":
                return "Kredi Kartı (Kişisel)";
            case "cash":
                return "Nakit";
            case "debitCardCorporate":
                return "Banka Kartı (Kurumsal)";
            case "debitCardPersonal":
                return "Banka Kartı (Kişisel)";
            case "founder":
                return "Kurucu";
            default:
                return "Diğer";
        }
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
                            expenseType={formatExpenseName(expense.expenseType)}
                            description={expense.description}
                            personPayed={formatWhoPaid(expense.personPayed)}
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