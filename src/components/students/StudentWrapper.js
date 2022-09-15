export default function StudentWrapper(props) {

  return (
    <table className="table-auto border m-3">
      <thead>
        <tr className="border bg-orlando-orange text-orlando-gray">
          <th className="border px-1 py-1">No</th>
          <th className="border px-1 py-1">Ad Soyad</th>
          <th className="border px-1 py-1">TCKN</th>
          <th className="border px-1 py-1">Telefon</th>
          <th className="border px-1 py-1">E-Posta</th>
          <th className="border px-1 py-1">Notlar</th>
          <th className="border px-1 py-1">İşlemler</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
