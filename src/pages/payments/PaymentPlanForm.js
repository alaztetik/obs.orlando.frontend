import FormElement from "../../components/form/FormElement";
import Installment from "../../components/installment/Installment";
import { useState, useContext } from "react";
import { formatPreferredLanguage } from "../../utils/formats";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { getEnrollments } from "../../api/enrollments";
import { getStudents } from "../../api/students";
import { Dna } from "react-loader-spinner";
import AuthContext from "../../context/AuthProvider";
import { addPaymentPlan } from "../../api/paymentPlans";
import { useNavigate } from "react-router-dom";


export default function PaymentPlanForm() {

  const queryClient = useQueryClient();

  const { mutate: mutatePaymentPlan } = useMutation({
    mutationFn: addPaymentPlan,
    onSuccess: (newPaymentPlan) => {
      queryClient.setQueryData(["paymentPlans"], (prevPaymentPlans) => {
        return [...prevPaymentPlans, newPaymentPlan];
      });
    },
  });

  const { status: enrollmentsStatus, data: enrollments = [] } = useQuery({
    queryKey: ["enrollments"],
    queryFn: getEnrollments,
  });

  const { status: studentsStatus, data: students = [] } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  const UserAuthContext = useContext(AuthContext);

  const [paymentPlanForm, setPaymentPlanForm] = useState({
    enrollmentId: "",
    agreedTotalPayment: 0,
    paymentMethod: "cash",
    contractDate: "",
    paymentInAdvance: 0,
    leftPaymentDate: "",
    paymentNotes: "",
    installmentsCount: 0,
    installments: [],
    creator: UserAuthContext.auth.username,
  });

  const navigate = useNavigate();

  const installmentComponents = [];

  for (let i = 0; i < paymentPlanForm.installmentsCount; i++) {
    installmentComponents.push(
      <Installment handleChange={handlePaymentChange} key={i} number={i + 1} />
    );
  }

  const paymentLeft =
    paymentPlanForm.agreedTotalPayment - paymentPlanForm.paymentInAdvance;

  const [balanceWarning, setBalanceWarning] = useState(false);

  function handlePaymentChange(event) {

    if (event.target.name.includes("installmentAmount")) {
      let number = event.target.name.slice(-1);
      
      setPaymentPlanForm(prev => {

        let obj = {
          ...prev
        };

        obj.installments[number-1] = {
          ...prev.installments[number-1],
          installmentAmount: parseInt(event.target.value)
        }

        return obj;
      });
    }

    if (event.target.name.includes("installmentPaymentDate")) {
      let number = event.target.name.slice(-1);

      setPaymentPlanForm(prev => {

        let obj = {
          ...prev
        };

        obj.installments[number-1] = {
          ...prev.installments[number-1],
          installmentPaymentDate: event.target.value
        }

        return obj;
      });
    }

    if (event.target.name === "paymentMethod") {
      setPaymentPlanForm((prev) => {
        return {
          ...prev,
          paymentMethod: event.target.value,
          installmentsCount: event.target.value === "cash" ? 0 : 2,
          installments: event.target.value === "cash" ? [] : prev.installments,
        };
      });
    }

    if (event.target.name === "enrollmentId" || event.target.name === "contractDate" || event.target.name === "leftPaymentDate" || event.target.name === "paymentNotes") {
      setPaymentPlanForm(prev => {
        return {
          ...prev,
          [event.target.name]: event.target.value,
        };
      })
    }

    if (
      event.target.name === "agreedTotalPayment" ||
      event.target.name === "paymentInAdvance" ||
      event.target.name === "installmentsCount"
    ) {
      setPaymentPlanForm((prev) => {
          return {
            ...prev,
            [event.target.name]: parseInt(event.target.value),
          };
        });
    } 
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (checkBalance()) {
      // submit
      setBalanceWarning(false);
    } else {
      // warn
      setBalanceWarning(true);
    }

    mutatePaymentPlan(paymentPlanForm);
    console.log(paymentPlanForm);
  }

  function checkBalance() {
    if (paymentPlanForm.paymentMethod === "cash") {
      return (
        paymentPlanForm.agreedTotalPayment >= paymentPlanForm.paymentInAdvance
      );
    } else if (paymentPlanForm.paymentMethod === "installments") {
      let installmentsTotal = 0;
      for (let i = 0; i < paymentPlanForm.installmentsCount; i++) {
        installmentsTotal += paymentPlanForm.installments[i]?.installmentAmount;
      }
      return (
        paymentPlanForm.agreedTotalPayment ===
        paymentPlanForm.paymentInAdvance + installmentsTotal
      );
    }
  }

  function toggleBalanceWarningComponent() {
    const BalanceWarningComponent = <></>;


  }

  function getStudentNameFromId(studentId) {
    const student = students.find((student) => student._id === studentId);
    return `${student?.firstName} ${student?.lastName}`;
  }

  const enrollmentAndStudentOptions = enrollments.map((enrollment) => {
    return (
      <option key={enrollment?._id} value={enrollment?._id}>
        {getStudentNameFromId(enrollment?.student)} -{" "}
        {formatPreferredLanguage(enrollment?.preferredLanguage)}
      </option>
    );
  });

  if (enrollmentsStatus === "loading" || studentsStatus === "loading") {
    return (
      <div className="top-10 grid justify-items-center align-middle">
        <Dna
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

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
            <option key="fixed" value="">
              Öğrenci Ders Kaydı Seçin...
            </option>
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

        <FormElement active={false} labelName="Kalan Ödeme:">
          <p className="text-left text-gray-500 cursor-not-allowed">{paymentLeft}</p>
        </FormElement>

        {paymentLeft > 0 && (
          <FormElement labelName="Kalan Ödeme Tarihi:">
            <input
              name="leftPaymentDate"
              type="date"
              required
              onChange={handlePaymentChange}
              value={paymentPlanForm.leftPaymentDate}
            />
          </FormElement>
        )}

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

        {paymentPlanForm.paymentMethod === "installments" ? (
          <>
            <FormElement labelName="Taksit Sayısı">
              <select
                name="installmentsCount"
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

            {balanceWarning && (
          <p className="text-center text-red-700">
            Peşinat ve taksitlerin toplamı, sözleşme toplam tutarından fazla olamaz.
            </p>
            )
        }
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
