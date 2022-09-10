import FormElement from '../../components/form/FormElement';

export default function ProspectForm() {

  return (
    <div className="studentform flex w-full justify-center">
      <form className="flex flex-col basis-2/3">

        <h3 className='text-center p-3 text-lg font-bold'>Aday Öğrenci Kaydı</h3>
        
        <FormElement labelName="Ad:">
            <input name='firstName' type="text" />
        </FormElement>

        <FormElement labelName="Soyad:">
            <input name='lastName' type="text"></input>
        </FormElement>

        <FormElement labelName="Telefon:">
            <input name='phone' type="tel" placeholder='0533...'></input>
        </FormElement>

        <FormElement labelName="İş / Okul-Bölüm">
            <input name='secondaryAddress' type='text' />
        </FormElement>

        <FormElement labelName="E-Posta:">
            <input name='email' type="email" placeholder='ornek@ornek.com' />
        </FormElement>

        <FormElement labelName="İkinci İletişim (Kişi+Telefon)">
            <input name='secondaryContact' type="text" placeholder='Ad Soyad Telefon'></input>
        </FormElement>

        {/* zorunlu */}
        <FormElement labelName="Veri Kaynağı:">
            <select>
                <option>Saha</option>
                <option>Sosyal Medya</option>
                <option>Doğrudan</option>
                <option>Toplu Veri</option>
                <option>Referans</option>
                <option>Diğer</option>
            </select>
        </FormElement>

        <FormElement labelName="Eğitim:">
            <select>
                <option>Genel İngilizce</option>
                <option>İkinci Yabancı Dil</option>
                <option>Sınav İngilizcesi</option>
                <option>Kids</option>
            </select>
        </FormElement>

        <FormElement labelName="Görüşme Tarihi:">
            <input type="date" />
        </FormElement>


        {/* Ana sayfada sıralamada olacak: tekrar arama tarihi */}
        <FormElement labelName="Tekrar Aranacak Tarih:">
            <input type="datetime-local" />
        </FormElement>

        {/* Ana sayfada sıralamada olacak: randevu tarihi */}
        <FormElement labelName="Randevu Tarihi:">
            <input type="datetime-local" />
        </FormElement>

        <FormElement labelName="Aday Öğrenci Özet Notu:">
            <input name='studentNote' type="text" />
        </FormElement>

        <button className='bg-gray-300 p-1 m-1 border rounded hover:bg-orlando-slate'>Ekle</button>

      </form>
    </div>
  );
}
