import FormElement from "../../components/form/FormElement";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentForm() {

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
    const {name, value} = event.target;

    setStudentForm(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://pear-shy-betta.cyclic.app/api/v0/students", {
        method: "POST",
        body: JSON.stringify(studentForm),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log(result);
      setErrorState(false);
      navigate('/students/students');
    } catch (err) {
      console.log("Error:", err);
      setErrorState(true);
      
    }
  };

  return (
    <div className="studentform flex flex-col justify-center w-2/3 m-auto">
      <form className="flex flex-col basis-2/3" onSubmit={handleSubmit}>
        <h3 className="text-center p-3 text-lg font-bold">Öğrenci Bilgileri</h3>

        {errorState && <p className="border text-center mb-3">Formu dikkatli doldurunuz...</p>}

        <FormElement labelName="Ad:">
          <input
            name="firstName"
            type="text"
            autoComplete="off"
            required
            autoFocus
            onChange={handleChange}
            value={studentForm.firstName}
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
          ></input>
        </FormElement>

        <FormElement labelName="İş / Okul-Bölüm">
          <input
            name="workOrSchool"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.workOrSchool}
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
          />
        </FormElement>

        <FormElement labelName="Doğum Tarihi (ay/gün/yıl)">
          <input
            name="birthDate"
            type="date"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.birthDate}
          />
        </FormElement>

        <FormElement labelName="Doğum Yeri:">
          <input
            name="birthPlace"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.birthPlace}
          />
        </FormElement>

        {/*TODO Veli kısmı ayrıca açılacak */}

        <FormElement labelName="Veli Ad Soyadı:">
          <input
            name="parentName"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.parentName}
          />
        </FormElement>

        <FormElement labelName="Veli TCKN:">
          <input
            name="parentTckn"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.parentTckn}
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
          />
        </FormElement>

        <FormElement labelName="Veli Adres:">
          <input
            name="parentAddress"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.parentAddress}
          />
        </FormElement>

        <FormElement labelName="Öğrenci Özet Notu:">
          <input
            name="studentNotes"
            type="text"
            autoComplete="off"
            onChange={handleChange}
            value={studentForm.studentNotes}
          />
        </FormElement>

        <button className="p-1 m-1 mt-6 border rounded bg-orlando-gray hover:bg-orlando-orange text-orlando-white hover:text-orlando-gray">
          Ekle
        </button>
      </form>
    </div>
  );
}
