
export default function Student(props) {

    return (
        <tr className="border hover:bg-slate-400">
            <td className="border px-2">{props.no}</td>
            <td className="border px-2 font-bold">{props.firstName} {props.lastName}</td>
            <td className="border px-2">{props.tckn}</td>
            <td className="border px-2">{props.phone}</td>
            <td className="border px-2">{props.email}</td>
            <td className="border px-2">{props.note}</td>
            <td className="border px-2"></td>
        </tr>
    );
}