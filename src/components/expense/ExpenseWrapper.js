
export default function ExpenseWrapper(props) {

    return (
        <table className="table-auto border m-3">
            <thead>
                <tr className="border bg-orlando-orange text-orlando-gray hover:bg-orlando-slate hover:text-orlando-white">
                    <th className="border px-1 py-1">No</th>
                    <th className="border px-1 py-1">Gider Tipi</th>
                    <th className="border px-1 py-1">Açıklama</th>
                    <th className="border px-1 py-1">Ödeyen</th>
                    <th className="border px-1 py-1">Ödeme Metodu</th>
                    <th className="border px-1 py-1">Ödeme Tarihi</th>
                    <th className="border px-1 py-1">Tutar (₺)</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    );
}