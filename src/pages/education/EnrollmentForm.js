import { useState, useEffect } from "react";
import FormElement from "../../components/form/FormElement";
import Installment from "../../components/installment/Installment";

export default function EnrollmentForm() {

    const [enrollmentForm, setEnrollmentForm] = useState({
        student: "", // id
        // group: "", // id
        paymentPlan: "", // id
        preferredLanguage: "",
        preferredCourseType: "",
        preferredDays: "",
        preferredHours: "",
        contractDate: "",
        booksGiven: false,
        enrollmentNotes: "",
        languageLevel: "",
    });

    const [paymentPlanForm, setPaymentPlanForm] = useState({
        agreedTotalPayment: 0,
        paymentMethod: "cash",
        paymentInAdvance: 0,
        installments: [] // [id]
    });

    const [students, setStudents] = useState([]);

    const [paymentMethod, setPaymentMethod] = useState("cash");

    const [numberOfInstallments, setNumberOfInstallments] = useState(2);

    const installmentComponents = [];

    for (let i = 0; i < numberOfInstallments; i++) {
      installmentComponents.push(
        <Installment handleChange={handlePaymentChange} key={i} number={i + 1} />
      );
    }
    
    useEffect(() => {
          fetch(`${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/students`)
            .then((data) => data.json())
            .then((data) => setStudents(data));
    }, []);

    let selectedStudentNotes = students.find(student => student._id === enrollmentForm?.student)?.studentNotes;

    function handleEnrollmentChange(event) {
        setEnrollmentForm(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        });
    }

    function handlePaymentChange(event) {
        if (event.target.name === "paymentMethod") {
            setPaymentMethod(event.target.value);
        }

        if (event.target.name === 'numberOfInstallments') {
          setNumberOfInstallments(event.target.value);
        }

        setPaymentPlanForm(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        });
    }



    function handleSubmit(event) {
        event.preventDefault();

        if (paymentPlanForm.paymentMethod === 'installments') {
            const installmentObjects = [];

            for (let i = 1; i <= numberOfInstallments; i++) {

                installmentObjects.push({
                    amount: event.target[`amount${i}`].value,
                    paymentDate: event.target[`paymentDate${i}`].value
                });
            }
            setPaymentPlanForm(prev => {
                return {
                    ...prev,
                    installments: installmentObjects
                }
            });
        }
    }

    const studentOptions = students.map(student => {
        return (
            <option
                value={student._id}
                key={student._id}
            >{student.firstName + ' ' + student.lastName}</option>
        );
    });


    return (

        <div className="studentform flex w-full justify-center">
            <p className="p-2 bg-red-300">Deneme Sayfası</p>
            <form className="flex flex-col basis-2/3" onSubmit={handleSubmit}>
                <h3 className="text-center p-3 text-lg font-bold">
                    Yeni Ders Kaydı
                </h3>

                <FormElement labelName="Öğrenci:">
                    {/* Açılır menüden öğrenciyi seçince aşağıda yeni bir alan */}
                    {/* açılarak öğrenci notu gözükebilir */}
                    <select
                        name="student"
                        required
                        value={enrollmentForm.student}
                        onChange={handleEnrollmentChange}
                    >
                        {studentOptions}
                    </select>
                </FormElement>

                        <p className="text-right italic">
                            {selectedStudentNotes}
                        </p>

                <FormElement labelName="Dil:">
                    <select name="preferredLanguage" required onChange={handleEnrollmentChange}
                    value={enrollmentForm.preferredLanguage}>
                        <option value="english">İngilizce</option>
                        <option value="german">Almanca</option>
                        <option value="french">Fransızca</option>
                        <option value="arabic">Arapça</option>
                        <option value="italian">İtalyanca</option>
                        <option value="spanish">İspanyolca</option>
                        <option value="russian">Rusça</option>
                    </select>
                </FormElement>

                <FormElement labelName="Kayıt Olunan Eğitim:">
                    <select name="preferredCourseType" required onChange={handleEnrollmentChange}
                    value={enrollmentForm.preferredCourseType}>
                        <option value="1_1">1+1</option>
                        <option value="2_1">2+1</option>
                        <option value="3_1">3+1</option>
                        <option value="4_2">4+2</option>
                        <option value="private">Özel Ders</option>
                        <option value="examPrivate">Sınav (Özel)</option>
                        <option value="examGroup">Sınav (Grup)</option>
                        <option value="kidsFall">Kids Güz Dönemi</option>
                        <option value="kidsSummer">Kids Yaz Dönemi</option>
                    </select>
                </FormElement>

                <FormElement labelName="Dil Seviyesi:">
                    <select name="languageLevel" required onChange={handleEnrollmentChange}
                    value={enrollmentForm.languageLevel}>
                        <option value="A1">A1</option>
                        <option value="A2">A2</option>
                        <option value="B1">B1</option>
                        <option value="B2">B2</option>
                        <option value="C1">C1</option>
                        <option value="C2">C2</option>
                        <option value="other">Diğer</option>
                    </select>
                </FormElement>

                <FormElement labelName="Sözleşme Tarihi:">
                    <input name="contractDate" type="date" required onChange={handleEnrollmentChange}
                    value={enrollmentForm.contractDate}
                    />
                </FormElement>

                <FormElement labelName="Tercihi Ders Günleri:">
                    <select name="preferredDays" onChange={handleEnrollmentChange}
                    value={enrollmentForm.preferredDays}
                    >
                        <option value="mondayAndWednesday">
                            Pazartesi - Çarşamba
                        </option>
                        <option value="tuesdayandThursday">
                            Salı - Perşembe
                        </option>
                        <option value="saturdayAndSunday">
                            Cumartesi - Pazar
                        </option>
                        <option value="other">Diğer</option>
                    </select>
                </FormElement>

                <FormElement labelName="Tercihi Ders Saatleri:">
                    <select name="preferredHours" onChange={handleEnrollmentChange}
                    value={enrollmentForm.preferredHours}
                    >
                        <option value="9_12">09:00 - 12:10</option>
                        <option value="12_15">12:30 - 15:40</option>
                        <option value="16_19">16:00 - 19:10</option>
                        <option value="19_22">19:30 - 22:40</option>
                        <option value="other">Diğer</option>
                    </select>
                </FormElement>

                <FormElement labelName="Kitap:">
                    <select name="booksGiven" required onChange={handleEnrollmentChange}
                    value={enrollmentForm.booksGiven}
                    >
                        <option value={false}>Verilmedi</option>
                        <option value={true}>Verildi</option>
                    </select>
                </FormElement>

                <FormElement labelName="Eğitim Notu:">
                    <input name="enrollmentNotes" type="text" onChange={handleEnrollmentChange}
                    value={enrollmentForm.enrollmentNotes}
                    />
                </FormElement>

                <br />
                <br />
                <hr />

                <h3 className="text-center p-3 text-lg font-bold">
                    Ödeme Planı
                </h3>

                <FormElement labelName="Toplam Tutar:">
                    <input
                        name="agreedTotalPayment"
                        type="number"
                        required
                        placeholder="... ₺"
                        onChange={handlePaymentChange}
                        value={paymentPlanForm.agreedTotalPayment}
                    />
                </FormElement>

                <FormElement labelName={paymentPlanForm.paymentMethod === "cash" ? "Ödenen:" :"Ön Peşinat:"}>
                    <input
                        name="paymentInAdvance"
                        type="number"
                        placeholder="... ₺"
                        onChange={handlePaymentChange}
                        value={paymentPlanForm.paymentInAdvance}
                    ></input>
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

                {paymentMethod === "installments" && (
                    <>
                        <FormElement labelName="Taksit Sayısı">
                            <select name="numberOfInstallments" required onChange={handlePaymentChange}>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                            </select>
                        </FormElement>

                        <h4 className="text-center mt-3 mb-1">
                            Taksit Detayları:
                        </h4>

                        {installmentComponents}
                    </>
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
