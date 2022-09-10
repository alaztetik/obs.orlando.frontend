export default function StudentWrapper(props) {
  return (
    <table className="table-auto border m-2">
      <thead>
        <tr className="border">
          <th className="border">Ad Soyad</th>
          <th className="border">TCKN</th>
          <th className="border">Telefon</th>
          <th className="border">E-Posta</th>
          <th className="border">Notlar</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
