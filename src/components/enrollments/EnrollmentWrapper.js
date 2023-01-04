export default function EnrollmentWrapper(props) {
  return (
    <table className="table-auto border m-3">
      <thead>
        <tr className="border bg-orlando-orange text-orlando-gray hover:bg-orlando-slate hover:text-orlando-white">
          <th className="border px-1 py-1">No</th>
          <th className="border px-1 py-1">Öğrenci</th>
          <th className="border px-1 py-1">Dil</th>
          <th className="border px-1 py-1">Eğitim</th>
          <th className="border px-1 py-1">Gün</th>
          <th className="border px-1 py-1">Saat</th>
          <th className="border px-1 py-1">Seviye</th>
          <th className="border px-1 py-1">Kitap</th>
          <th className="border px-1 py-1">Notlar</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
