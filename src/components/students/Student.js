
export default function Student(props) {

    return (
        <tr className="border">
            <td className="border">{props.firstName} {props.lastName}</td>
            <td className="border">{props.tckn}</td>
            <td className="border">{props.phone}</td>
            <td className="border">{props.email}</td>
            <td className="border">{props.note}</td>
        </tr>
    );
}