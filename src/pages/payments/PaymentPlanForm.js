import FormElement from "../../components/form/FormElement";
import Installment from "../../components/installment/Installment";
import { useState, useContext } from "react";
import EnrollmentContext from "../../context/EnrollmentContext";
import { formatPreferredLanguage } from "../../utils/formats";


export default function PaymentPlanForm() {

  const [paymentPlanForm, setPaymentPlanForm] = useState({
    enrollmentId: "",
    agreedTotalPayment: 0,
    paymentMethod: "cash",
    contractDate: "",
    paymentInAdvance: 0,
    paymentNotes: "",
    installments: [], // [id]
  });

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [numberOfInstallments, setNumberOfInstallments] = useState(2);

  const installmentComponents = [];

  for (let i = 0; i < numberOfInstallments; i++) {
    installmentComponents.push(
      <Installment handleChange={handlePaymentChange} key={i} number={i + 1} />
    );
  }

  // TODO use installment state
  const [installmentsState, setInstallmentsState] = useState([]);

  const paymentLeft = paymentPlanForm.agreedTotalPayment - paymentPlanForm.paymentInAdvance;

  function handlePaymentChange(event) {
    if (event.target.name === "paymentMethod") {
      setPaymentMethod(event.target.value);
    }

    if (event.target.name === "numberOfInstallments") {
      setNumberOfInstallments(event.target.value);
    }

    setPaymentPlanForm((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (paymentPlanForm.paymentMethod === "installments") {
      const installmentObjects = [];

      for (let i = 1; i <= numberOfInstallments; i++) {
        installmentObjects.push({
          installmentAmount: event.target[`amount${i}`].value,
          installmentPaymentDate: event.target[`paymentDate${i}`].value,
          isPayed: false,
        });
      }
      setPaymentPlanForm((prev) => {
        return {
          ...prev,
          installments: installmentObjects,
        };
      });
    }

    console.log(paymentPlanForm);
  }

  const enrollmentContext = useContext(EnrollmentContext).enrollments;

  const students = [] // TODO

  function getStudentNameFromId(studentId) {
    const student = students.find((student) => student._id === studentId);
    return `${student.firstName} ${student.lastName}`;
  }

  const enrollmentAndStudentOptions = enrollmentContext.map((enrollment) => { 
    return (
      <option
        key={enrollment._id}
        value={enrollment._id}
      >
        {getStudentNameFromId(enrollment.student)} - {formatPreferredLanguage(enrollment.preferredLanguage)}
      </option>
    );
  });

  return (
    <div className="studentform flex w-full justify-center">
      <form className="flex flex-col basis-2/3" onSubmit={handleSubmit}>
        <h3 className="text-center p-3 text-lg font-bold">Ödeme Planı</h3>

        <FormElement labelName="Öğrenci - Ders Kaydı">
          <select
          name="enrollmentId"
          required
          value={paymentPlanForm.enrollmentId}
          onChange={handlePaymentChange}
          >
            <option key="fixed" value="">Öğrenci Ders Kaydı Seçin...</option>
            {enrollmentAndStudentOptions}
          </select>
        </FormElement>

        <FormElement labelName="Sözleşme Tarihi:">
          <input
            name="contractDate"
            type="date"
            required
            onChange={handlePaymentChange}
            value={paymentPlanForm.contractDate}
          />
        </FormElement>

        <FormElement labelName="Sözleşme Toplam Tutarı:">
          <input
            name="agreedTotalPayment"
            type="number"
            required
            placeholder="... ₺"
            onChange={handlePaymentChange}
            value={paymentPlanForm.agreedTotalPayment}
          />
        </FormElement>

        <FormElement labelName="Peşinat:">
          <input
            name="paymentInAdvance"
            type="number"
            placeholder="... ₺"
            onChange={handlePaymentChange}
            value={paymentPlanForm.paymentInAdvance}
            min={0}
            max={paymentPlanForm.agreedTotalPayment}
          ></input>
        </FormElement>

        <FormElement labelName="Kalan Ödeme:">
          <p className="text-left">{paymentLeft}</p>
        </FormElement>

        {paymentLeft > 0 && 

        <FormElement labelName="Kalan Ödeme Tarihi:">
            <input
              name="contractDate"
              type="date"
              required
              onChange={handlePaymentChange}
              value={paymentPlanForm.contractDate}
            />
          </FormElement>
    }

        <FormElement labelName="Ödeme Özel Notu:">
          <input
            name="paymentNotes"
            type="text"
            onChange={handlePaymentChange}
            value={paymentPlanForm.paymentNotes}
          />
        </FormElement>

        <FormElement labelName="Ödeme Tipi:">
          <select
            name="paymentMethod"
            required
            onChange={handlePaymentChange}
            value={paymentPlanForm.paymentMethod}
          >
            <option value="cash">Peşin</option>
            <option value="installments">Taksit</option>
          </select>
        </FormElement>

        {paymentMethod === "installments" ? (
          <>
            <FormElement labelName="Taksit Sayısı">
              <select
                name="numberOfInstallments"
                required
                onChange={handlePaymentChange}
              >
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
              </select>
            </FormElement>

            <h4 className="text-center mt-3 mb-1">Taksit Detayları:</h4>

            {installmentComponents}
          </>
        ) : (
          <></>
        )}

        <button
          className="bg-gray-300 p-1 m-1 mt-6 border rounded hover:bg-gray-500"
          type="submit"
        >
          Ekle
        </button>
      </form>
    </div>
  );
}
