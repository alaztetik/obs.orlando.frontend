import ExpenseEditModal from "../modal/ExpenseEditModal";

export default function Expense(props) {

    return (

        <tr className="border hover:bg-slate-400">
            <td className="border px-2 text-orlando-orange">{props.no}</td>
            <td className="border px-2 font-bold">{props.expenseType}</td>
            <td className="border px-2">{props.description}</td>
            <td className="border px-2">{props.personPayed}</td>
            <td className="border px-2">{props.paymentMethod}</td>
            <td className="border px-2">{props.payDate}</td>
            <td className="border px-2 font-bold text-right">{props.payAmounth}</td>
            <td className="border px-2 bg-slate-100 hover:bg-slate-200 text-center cursor-pointer text-lg">
                <ExpenseEditModal expense={props.expense} />
            </td>
        </tr>
    );
}