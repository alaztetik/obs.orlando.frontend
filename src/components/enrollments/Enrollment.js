

export default function Enrollment(props) {

  return (
    <tr>
      <td className="border px-2 text-orlando-orange text-center">{props.no}</td>
      <td className="border px-2">{props.student}</td>
      <td className="border px-2">{props.preferredLanguage}</td>
      <td className="border px-2">{props.preferredCourseType}</td>
      <td className="border px-2">{props.preferredDays}</td>
      <td className="border px-2">{props.preferredHours}</td>
      <td className="border px-2">{props.languageLevel}</td>
      <td className="border px-2">{props.booksGiven ? "Evet" : "Hayır"}</td>
      <td className="border px-2">{props.enrollmentNotes}</td>
    </tr>
  );
}