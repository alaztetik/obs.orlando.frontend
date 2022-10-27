import StudentEditModal from "../modal/StudentEditModal";

export default function Student(props) {

    return (
        <tr className="border hover:bg-slate-400">
            <td className="border px-2 text-orlando-orange">{props.no}</td>
            <td className="border px-2 font-bold">{props.firstName} {props.lastName}</td>
            {/* <td className="border px-2">{props.tckn}</td> */}
            <td className="border px-2">{props.phone}</td>
            <td className="border px-2">{props.email}</td>
            <td className="border px-2">{props.note}</td>
            <td className="border px-2 bg-slate-100 hover:bg-slate-200 text-center cursor-pointer text-lg">
                <StudentEditModal student={props.student} />
            </td>
        </tr>
    );
}