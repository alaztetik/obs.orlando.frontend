import FormElement from '../../components/form/FormElement';

export default function EnrollmentForm() {
  return (
    <div className="studentform flex w-full justify-center">
      <form className="flex flex-col basis-2/3">

        <h3 className='text-center p-3 text-lg font-bold'>Yeni Ders Kaydı</h3>

        <FormElement labelName="Öğrenci:">
            <select name="student">
                <option>Mert Demir</option>
                <option>Alihan Ulusoy</option>
                <option>Murat Abacı</option>
            </select>
        </FormElement>

        <FormElement labelName='Dil:'>
            <select>
                <option>İngilizce</option>
                <option>Almanca</option>
                <option>Fransızca</option>
                <option>Arapça</option>
                <option>İtalyanca</option>
                <option>İspanyolca</option>
                <option>Rusça</option>
                <option>Diğer</option>
            </select>
        </FormElement>

        <FormElement labelName="Kayıt Olunan Eğitim:">
            <select name="courseName">
                <option>1+1</option>
                <option>2+1</option>
                <option>3+1</option>
                <option>4+2</option>
                <option>Özel Ders</option>
                <option>Sınav (Özel)</option>
                <option>Sınav (Grup)</option>
                <option>Kids Güz Dönemi</option>
                <option>Kids Yaz Dönemi</option>
            </select>
        </FormElement>

        <FormElement labelName="Sözleşme Tarihi:">
          <input name="contractDate" type="date" />
        </FormElement>

        <FormElement labelName="Ders Günleri:">
            <select name="courseDay">
                <option>Pazartesi - Çarşamba</option>
                <option>Salı - Perşembe</option>
                <option>Cumartesi - Pazar</option>
                <option selected>Belirsiz</option>
            </select>
        </FormElement>

        <FormElement labelName="Ders Saatleri:">
            <select>
                <option>09:00 - 12:10</option>
                <option>12:30 - 15:40</option>
                <option>16:00 - 19:10</option>
                <option>19:30 - 22:40</option>
                <option selected>Belirsiz</option>
            </select>
        </FormElement>

        <FormElement labelName="Kitap:">
            <select>
                <option>Verilmedi</option>
                <option>Verildi</option>
            </select>
        </FormElement>

        <FormElement labelName="Eğitim Notu:">
            <input type="text" />
        </FormElement>

        <h3 className="text-center p-3 text-lg font-bold">
          Ödeme Bilgileri
        </h3>

        <FormElement labelName="Ödeme Tipi:">
          <select>
            <option>Taksit</option>
            <option>Peşin</option>
          </select>
        </FormElement>

        <FormElement labelName="Toplam Tutar:">
          <input name="firstName" type="number" placeholder="... ₺" />
        </FormElement>

        <FormElement labelName="Peşinat:">
          <input name="lastName" type="number" placeholder="... ₺"></input>
        </FormElement>

        {/* Peşin durum */}

        <FormElement labelName="Kalan [Peşinat]:">
          <input name="tckn" type="number" placeholder="... ₺"></input>
        </FormElement>

        <FormElement labelName='Kalan Peşinat Ödeme Tarihi:'>
            <input type='date' placeholder='... ₺' />
        </FormElement>

        {/* Taksitli durum: */}

        <FormElement labelName='Taksit Sayısı'>
            <select>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
            </select>
        </FormElement>

        <h4 className="text-center mt-3 mb-1">Taksit Detayları:</h4>
        
        <FormElement labelName='1. Taksit:'>
            <input type='number' placeholder='... ₺' />
        </FormElement>

        <FormElement labelName='Ödeme Tarihi:'>
            <input type='date' placeholder='... ₺' />
        </FormElement>

        <FormElement labelName='2. Taksit'>
            <input type='number' placeholder='... ₺' />
        </FormElement>

        <FormElement labelName='Ödeme Tarihi:'>
            <input type='date' placeholder='... ₺' />
        </FormElement>

        <FormElement labelName='3. Taksit'>
            <input type='number' placeholder='... ₺' />
        </FormElement>

        <FormElement labelName='Ödeme Tarihi:'>
            <input type='date' placeholder='... ₺' />
        </FormElement>

        <button className='bg-gray-300 p-1 m-1 mt-6 border rounded hover:bg-gray-500'>Ekle</button>

      </form>

    </div>
  );
}
