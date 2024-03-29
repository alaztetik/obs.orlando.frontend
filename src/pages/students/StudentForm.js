import FormElement from "../../components/form/FormElement";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../../api/students";
import { useMutation, useQueryClient } from "react-query";

export default function StudentForm(props) {
  const queryClient = useQueryClient();

  const { status, error, mutate } = useMutation({
    mutationFn: addStudent,
    onSuccess: (newStudent) => {
      queryClient.setQueryData(["students"], (prevStudents) => {
        return [...prevStudents, newStudent];
      });
    },
  });

  const UserAuthContext = useContext(AuthContext);

  const navigate = useNavigate();

  const [studentForm, setStudentForm] = useState({
    firstName: "",
    lastName: "",
    tckn: "",
    phone: "",
    address: "",
    secondaryContact: "",
    workOrSchool: "",
    email: "",
    birthDate: "",
    birthPlace: "",
    parentName: "",
    parentTckn: "",
    parentPhone: "",
    parentAddress: "",
    studentNotes: "",
    creator: UserAuthContext.auth.username,
  });

  const [errorState, setErrorState] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudentForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitButtonDisabled(true);
    mutate(studentForm);
    navigate("/students/");
  };

  return (
    <div className="studentform flex flex-col justify-center w-2/3 m-auto">
      <form className="flex flex-col basis-2/3" onSubmit={handleSubmit}>
        <h3 className="text-center p-3 text-lg font-bold">Öğrenci Bilgileri</h3>

        {errorState && (
          <p className="border text-center mb-3">
            Formu dikkatli doldurunuz...
          </p>
        )}

        <FormElement labelName="Ad:">
          <input
            name="firstName"
            type="text"
            autoComplete="off"
            required
            autoFocus
            onChange={handleChange}
            value={studentForm.firstName}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          />
        </FormElement>

        <FormElement labelName="Soyad:">
          <input
            name="lastName"
            type="text"
            autoComplete="off"
            required
            onChange={handleChange}
            value={studentForm.lastName}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          ></input>
        </FormElement>

        <FormElement labelName="TCKN:">
          <input
            name="tckn"
            type="text"
            autoComplete="off"
            required
            onChange={handleChange}
            value={studentForm.tckn}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          ></input>
        </FormElement>

        <FormElement labelName="Telefon:">
          <input
            name="phone"
            type="tel"
            placeholder="0533..."
            autoComplete="off"
            required
            onChange={handleChange}
            value={studentForm.phone}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          ></input>
        </FormElement>

        <FormElement labelName="İkamet Adresi:">
          <input
            name="address"
            type="text"
            autoComplete="off"
            required
            onChange={handleChange}
            value={studentForm.address}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          ></input>
        </FormElement>

        <FormElement labelName="İkinci İletişim (Kişi+Telefon)">
          <input
            name="secondaryContact"
            type="text"
            placeholder="Ad Soyad Telefon"
            autoComplete="off"
            required
            onChange={handleChange}
            value={studentForm.secondaryContact}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          ></input>
        </FormElement>

        <FormElement labelName="İş / Okul-Bölüm:">
          <input
            name="workOrSchool"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.workOrSchool}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          />
        </FormElement>

        <FormElement labelName="E-Posta:">
          <input
            name="email"
            type="email"
            placeholder="ornek@ornek.com"
            autoComplete="off"
            required
            onChange={handleChange}
            value={studentForm.email}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          />
        </FormElement>

        <FormElement labelName="Doğum Tarihi">
          <input
            name="birthDate"
            type="date"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.birthDate}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          />
        </FormElement>

        <FormElement labelName="Doğum Yeri:">
          <input
            name="birthPlace"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.birthPlace}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          />
        </FormElement>

        <FormElement labelName="Öğrenci Özel Notu:">
          <input
            name="studentNotes"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.studentNotes}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          />
        </FormElement>

        <hr className="my-5" />

        <FormElement labelName="Veli Ad Soyadı:">
          <input
            name="parentName"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.parentName}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          />
        </FormElement>

        <FormElement labelName="Veli TCKN:">
          <input
            name="parentTckn"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.parentTckn}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          />
        </FormElement>

        <FormElement labelName="Veli Telefon:">
          <input
            name="parentPhone"
            type="tel"
            placeholder="0533..."
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.parentPhone}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          />
        </FormElement>

        <FormElement labelName="Veli Adres:">
          <input
            name="parentAddress"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.parentAddress}
            className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
          />
        </FormElement>

        <button
          disabled={isSubmitButtonDisabled}
          className="p-1 m-1 mt-6 border rounded bg-orlando-gray hover:bg-orlando-orange text-orlando-white hover:text-orlando-gray disabled:bg-gray-600 disabled:text-black"
        >
          Ekle
        </button>
      </form>
    </div>
  );
}
