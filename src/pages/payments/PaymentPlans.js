import { useQuery } from "react-query";
import { getPaymentPlans } from "../../api/paymentPlans";
import PaymentPlan from "../../components/paymentPlan/PaymentPlan";
import PaymentPlanWrapper from "../../components/paymentPlan/PaymentPlanWrapper";
import { formatDate, formatPaymentType } from "../../utils/formats";
import { Dna } from "react-loader-spinner";
import { getStudents } from "../../api/students";
import { getEnrollments } from "../../api/enrollments";
import { getStudentFullName, getStudentIdFromEnrollmentId, getLanguageName, getCourseType } from "../../utils/entities";
import { formatPreferredLanguage, formatPreferredCourseType } from "../../utils/formats";

export default function PaymentPlans() {
  const { status, data: paymentPlans = [] } = useQuery({
    queryKey: ["paymentPlans"],
    queryFn: getPaymentPlans,
  });

  const { status: studentStatus, data: students = [] } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  const { status: enrollmentStatus, data: enrollments = [] } = useQuery({
    queryKey: ["enrollments"],
    queryFn: getEnrollments,
  });

  let numberOfPaymentPlans = paymentPlans.length;

  const planElements = paymentPlans.map((plan) => {

    const studentId = getStudentIdFromEnrollmentId(enrollments, plan.enrollmentId);

    const studentFullName = getStudentFullName(students, studentId);

    const languageName = formatPreferredLanguage(getLanguageName(enrollments, plan.enrollmentId));

    const courseType = formatPreferredCourseType(getCourseType(enrollments, plan.enrollmentId));

    return (
      <PaymentPlan
        no={numberOfPaymentPlans--}
        /* key={plan.enrollmentId} */
        studentFullName={studentFullName}
        enrollmentName={languageName + " " + courseType}
        agreedTotalPayment={plan.agreedTotalPayment}
        paymentMethod={formatPaymentType(plan.paymentMethod)}
        contractDate={formatDate(plan.contractDate)}
        paymentInAdvance={plan.paymentInAdvance}
        paymentNotes={plan.paymentNotes}
        installmentsCount={plan.installmentsCount}
      />
    );
  });

  if (status === "loading" || studentStatus === "loading" || enrollmentStatus === "loading") {
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
    <>
      {status === "loading" && <p>Loading...</p>}

      <p className="m-2">
        Toplam Ödeme Planı: <span className="font-bold">{paymentPlans.length}</span>
      </p>

      <PaymentPlanWrapper>{planElements}</PaymentPlanWrapper>
    </>
  );
}
