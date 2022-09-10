import FormElement from "../../components/form/FormElement";
import React from 'react';
import { useState } from 'react';

export default function StudentForm() {

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:4000/api/v0/students', {
      method: 'GET',
      mode: 'cors'
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err.message))
  }

  const [studentForm, setStudentForm] = useState({
    firstName: '',
    lastName: '',
    tckn: '',
    phone: '',
    address: '',
    secondaryContact: '',
    secondaryAddress: '',
    email: '',
    birthDate: '',
    birthPlace: '',
    parentName: '',
    parentTckn: '',
    parentPhone: '',
    parentAddress: '',
    studentNote: '',
    contractDate: ''
  });


  return (
    <div className="studentform flex flex-col justify-center w-2/3 m-auto">
      <form className="flex flex-col basis-2/3" onSubmit={handleSubmit}>
        <h3 className="text-center p-3 text-lg font-bold">
          Öğrenci Bilgileri
        </h3>
        
        <FormElement labelName="Ad:">
          <input name="firstName" type="text" />
        </FormElement>

        <FormElement labelName="Soyad:">
          <input name="lastName" type="text"></input>
        </FormElement>

        <FormElement labelName="TCKN:">
          <input name="tckn" type="text"></input>
        </FormElement>

        <FormElement labelName="Telefon:">
          <input name="phone" type="tel" placeholder="0533..."></input>
        </FormElement>

        <FormElement labelName="İkamet Adresi:">
          <input name="address" type="text"></input>
        </FormElement>

        <FormElement labelName="İkinci İletişim (Kişi+Telefon)">
          <input
            name="secondaryContact"
            type="text"
            placeholder="Ad Soyad Telefon"
          ></input>
        </FormElement>

        <FormElement labelName="İş / Okul-Bölüm">
          <input name="secondaryAddress" type="text" />
        </FormElement>

        <FormElement labelName="E-Posta:">
          <input name="email" type="email" placeholder="ornek@ornek.com" />
        </FormElement>

        <FormElement labelName="Doğum Tarihi:">
          <input name="birthDate" type="date" />
        </FormElement>

        <FormElement labelName="Doğum Yeri:">
          <input name="birthPlace" type="text" />
        </FormElement>

        {/*TODO Veli kısmı ayrıca açılacak */}

        <FormElement labelName="Veli Ad Soyadı:">
          <input name="parentName" type="text" />
        </FormElement>

        <FormElement labelName="Veli TCKN:">
          <input name="parentTckn" type="text" />
        </FormElement>

        <FormElement labelName="Veli Telefon:">
          <input name="parentPhone" type="tel" placeholder="0533..." />
        </FormElement>

        <FormElement labelName="Veli Adres:">
          <input name="parentAddress" type="text" />
        </FormElement>

        <FormElement labelName="Öğrenci Özet Notu:">
          <input name="studentNote" type="text" />
        </FormElement>

        <button className="bg-gray-300 p-1 m-1 mt-6 border rounded hover:bg-orlando-slate">
          Ekle
        </button>
      </form>
    </div>
  );
}
