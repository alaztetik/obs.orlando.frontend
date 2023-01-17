import React, { useReducer } from "react";
import Expense from "../../components/expense/Expense";
import ExpenseFilter from "../../components/expense/ExpenseFilter";
import ExpenseFiltersWrapper from "../../components/expense/ExpenseFiltersWrapper";
import ExpenseWrapper from "../../components/expense/ExpenseWrapper";
import {
    formatUsername,
    formatExpenseName,
    formatPaymentMethod,
    formatDate,
} from "../../utils/formats";
import { monthNames } from "../../utils/constants";
import { useQuery } from "react-query";
import { getExpenses } from "../../api/expenses";


const filterReducer = (state, action) => {


    switch(action.type) {
        case 'SET_PAYMENT_TYPE':
            return {
                ...state,
                paymentType: action.payload
            };
        case 'SET_PAYMENT_METHOD':
            return {
                ...state,
                paymentMethod: action.payload
            };
        case 'SET_PAYER':
            return {
                ...state,
                payer: action.payload
            };
        case 'SET_YEAR':
            return {
                ...state,
                year: action.payload
            };
        case 'SET_MONTH':
            return {
                ...state,
                month: action.payload
            };
        default:
            return;
    }
}


export default function Expenses() {

    const { status, error, data: expenses = [] } = useQuery({
        queryKey: ["expenses"],
        queryFn: getExpenses,
    });

    const [filters, dispatch] = useReducer(filterReducer, {
        paymentType: "",
        paymentMethod: "",
        payer: "",
        year: "",
        month: ""
    });

    let numberOfExpenses = expenses.length;

    function totalExpenseAmount() {
        let total = 0;

        expenses.forEach((expense) => {
            total += expense.payAmounth;
        });

        return total;
    }


    const filteredExpenses = expenses.filter(expense => {
        return expense?.expenseType?.includes(filters.paymentType)
            && expense?.paymentMethod?.includes(filters.paymentMethod)
            && expense?.personPayed?.includes(filters.payer)
            && expense?.payDate?.includes(filters.year)
    });


    function filteredExpenseAmount(){
        let total = 0;

        filteredExpenses.forEach(expense => {
            total += expense.payAmounth;
        });

        return total;
    }

    let numberOfFilteredExpenses = filteredExpenses.length;


    const expenseTypes = [];
    const payers = [];
    const paymentMethods = [];
    const years = [];
    
    const expenseElements = filteredExpenses.map((expense) => {
        expenseTypes.push(expense.expenseType);
        payers.push(expense.personPayed);
        paymentMethods.push(expense.paymentMethod);
        years.push((new Date(expense.payDate)).getFullYear());

        return (
            <Expense
                no={numberOfFilteredExpenses--}
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
    });

    const uniqueExpenseTypes = Array.from(new Set(expenseTypes));

    const expenseFilterElementsType = uniqueExpenseTypes.map((element) => {
        return {
            value: element,
            name: formatExpenseName(element),
        };
    });

    const uniquePayers = Array.from(new Set(payers));

    const expenseFilterElementsPayer = uniquePayers.map((payer) => {
        return {
            value: payer,
            name: formatUsername(payer),
        };
    });

    const uniquePaymentMethods = Array.from(new Set(paymentMethods));

    const expenseFilterElementsPaymentMethod = uniquePaymentMethods.map(
        (method) => {
            return {
                value: method,
                name: formatPaymentMethod(method),
            };
        }
    );

    const uniqueYears = Array.from(new Set(years));

    const expenseFilterElementsYears = uniqueYears.map( year => {
        return {
            value: year,
            name: year
        };
    })

    function handleExpenseTypeChange(value) {
        dispatch({
            type: 'SET_PAYMENT_TYPE',
            payload: value
        });
    }

    function handleExpenseMethodChange(value) {
        dispatch({
            type: 'SET_PAYMENT_METHOD',
            payload: value
        });
    }


    function handleExpensePayerChange(value) {
        dispatch({
            type: 'SET_PAYER',
            payload: value
        });
    }


    function handleExpenseYearChange(value) {
        dispatch({
            type: 'SET_YEAR',
            payload: value
        });
    }

    function handleExpenseMonthChange(value) {
        dispatch({
            type: 'SET_MONTH',
            payload: value
        });
    }

    if (status === "loading") {
        return <div>Giderler yükleniyor...</div>;
    }

    return (
        <>
            <p className="m-2 font-bold">
                Kalem Sayısı:{" "}
                <span className=" text-orange-600 text-lg tracking-wide">{filteredExpenses.length}</span>
                {" / "}
                <span className="text-lg tracking-wide">{numberOfExpenses}</span>
            </p>
            <p className="m-2 font-bold">
                Toplam Gider:{" "}
                <span className="text-orange-600 text-lg tracking-wide">{filteredExpenseAmount()}</span>
                {" / "}
                <span className="text-lg tracking-wide">{totalExpenseAmount()}</span> ₺
            </p>
            <ExpenseFiltersWrapper>
                <ExpenseFilter
                    name="Gider Tipi"
                    elements={expenseFilterElementsType}
                    handleChange={handleExpenseTypeChange}
                />

                <ExpenseFilter
                    name="Ödeme Metodu"
                    elements={expenseFilterElementsPaymentMethod}
                    handleChange={handleExpenseMethodChange}
                />

                <ExpenseFilter
                    name="Ödeyen"
                    elements={expenseFilterElementsPayer}
                    handleChange={handleExpensePayerChange}
                />

                <ExpenseFilter
                    name="Yıl"
                    elements={expenseFilterElementsYears}
                    handleChange={handleExpenseYearChange}
                />

                <ExpenseFilter 
                    name="Ay" 
                    elements={monthNames}
                    handleChange={handleExpenseMonthChange} 
                />
            </ExpenseFiltersWrapper>
            <ExpenseWrapper>{expenseElements}</ExpenseWrapper>
        </>
    );
}
