import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import FormElement from "../../components/form/FormElement";
import { useNavigate } from "react-router-dom";

export default function EnrollmentForm() {

    const UserAuthContext = useContext(AuthContext);

    const navigate = useNavigate();

    const [enrollmentForm, setEnrollmentForm] = useState({
        student: "", // id
        // group: "", // id
        // paymentPlan: "", // id
        preferredLanguage: "english",
        preferredCourseType: "1_1",
        preferredDays: "mondayAndWednesday",
        preferredHours: "9_12",
        booksGiven: false,
        enrollmentNotes: "",
        languageLevel: "A1",
        creator: UserAuthContext.auth.username,
    });

    const [students, setStudents] = useState([]);
    
    useEffect(() => {
          fetch(`${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/students`)
            .then((data) => data.json())
            .then((data) => setStudents(data));
    }, []);

    let selectedStudentNotes = students.find(student => student._id === enrollmentForm?.student)?.studentNotes;

    const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);

    function handleEnrollmentChange(event) {
        setEnrollmentForm(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitButtonDisabled(true);

        try {
            const response = await fetch(`${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/enrollments`, { // TODO check url
                method: "POST",
                body: JSON.stringify(enrollmentForm),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();

            navigate('/education');
        } catch (error) {
            console.log("Error: ", error); // TODO log error
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
            <form className="flex flex-col basis-2/3" onSubmit={handleSubmit}>
                <h3 className="text-center p-3 text-lg font-bold">
                    Yeni Ders Kaydı
                </h3>

                <FormElement labelName="Öğrenci:">
                    <select
                        name="student"
                        required
                        value={enrollmentForm.student}
                        onChange={handleEnrollmentChange}
                    >
                        <option key="fixed" value="">Öğrenci Seçin...</option>
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

                <FormElement labelName="Tercihi Ders Günleri:">
                    <select name="preferredDays" onChange={handleEnrollmentChange}
                    value={enrollmentForm.preferredDays}
                    >
                        <option value="mondayAndWednesday">
                            Pazartesi - Çarşamba
                        </option>
                        <option value="tuesdayAndThursday">
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

                <button
                    disabled={isSubmitButtonDisabled}
                    className="bg-gray-300 p-1 m-1 mt-6 border rounded hover:bg-gray-500"
                    type="submit"
                >
                    Ekle
                </button>
            </form>
        </div>
    );
}
