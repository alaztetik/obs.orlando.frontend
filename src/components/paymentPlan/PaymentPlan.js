import editIcon from '../../icons/edit.png';

export default function PaymentPlan({
  no,
  studentFullName,
  enrollmentName,
  agreedTotalPayment,
  paymentMethod,
  contractDate,
  paymentInAdvance,
  paymentNotes,
  installmentsCount,
}) {
  return (
    <tr className="border hover:bg-slate-400">
      <td className="border px-2 text-orlando-orange">{no}</td>
      <td className="border px-2">{studentFullName}</td>
      <td className="border px-2">{enrollmentName}</td>
      <td className="border px-2">{contractDate}</td>
      <td className="border px-2">{agreedTotalPayment}</td>
      <td className="border px-2">{paymentInAdvance}</td>
      <td className="border px-2">{paymentMethod}</td>
      <td className="border px-2">{installmentsCount === 0 ? '-' : installmentsCount}</td>
      <td className="border px-2">{paymentNotes}</td>
      <td className="border px-2 hover:animate-spin">
        <img src={editIcon} alt="Edit" className='mx-auto p-1' />
      </td>
    </tr>
  );
}
