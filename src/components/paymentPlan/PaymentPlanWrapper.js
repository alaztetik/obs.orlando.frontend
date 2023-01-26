
export default function PaymentPlanWrapper(props) {

  return (
    <table className="table-auto border m-3">
      <thead>
        <tr className="border bg-orlando-orange text-orlando-gray hover:bg-orlando-slate hover:text-orlando-white">
          <th className="border px-1 py-1">No</th>
          <th className="border px-1 py-1">Öğrenci</th>
          <th className="border px-1 py-1">Ders Kaydı</th>
          <th className="border px-1 py-1">Sözleşme Tarihi</th>
          <th className="border px-1 py-1">Sözleşme Tutarı</th>
          <th className="border px-1 py-1">Peşin Ödeme Miktarı</th>
          <th className="border px-1 py-1">Ödeme Tipi</th>
          <th className="border px-1 py-1">Taksit Sayısı</th>
          <th className="border px-1 py-1">Ödeme Notu</th>
          <th className="border px-1 py-1"></th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}