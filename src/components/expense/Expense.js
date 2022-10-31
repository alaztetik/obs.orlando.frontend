
export default function Expense(props) {

    return (

        <tr className="border hover:bg-slate-400">
            <td className="border px-2 text-orlando-orange"></td>
            <td className="border px-2 font-bold">{props.expenseType}</td>
            <td className="border px-2">{props.description}</td>
            <td className="border px-2">{props.personPayed}</td>
            <td className="border px-2">{props.paymentMethod}</td>
            <td className="border px-2">{props.payDate}</td>
            <td className="border px-2 font-bold">{props.payAmounth}</td>
        </tr>
    );
}