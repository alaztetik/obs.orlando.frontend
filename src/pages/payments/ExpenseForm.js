import FormElement from "../../components/form/FormElement";

export default function ExpenseForm() {
  return (
    <div className="studentform flex w-full justify-center">
      <form className="flex flex-col basis-2/3">
        <h3 className="text-center p-3 text-lg font-bold">Yeni Gider Kaydı</h3>

        <FormElement labelName="Gider Tipi:">
          <select>
            <option>Kuruluş</option>
            <option>Elektrik Faturası</option>
            <option>Su Faturası</option>
            <option>Internet Faturası</option>
            <option>Telefon Faturası</option>
            <option>Doğalgaz Faturası</option>
            <option>Demirbaş</option>
            <option>Kırtasiye</option>
            <option>Kira</option>
            <option>Tadilat</option>
            <option>Ulaşım</option>
            <option>Vergi</option>
            <option>Market</option>
            <option>Yemek</option>
            <option>Finans</option>
            <option>Personel - Maaş</option>
            <option>Personel - SGK</option>
            <option>Personel - Prim</option>
          </select>
        </FormElement>

        <FormElement labelName="Açıklama:">
            <input type="text" />
        </FormElement>

        {/* Ödemeyi yapan seçerken, role göre değiştir */}

        <FormElement labelName='Ödeme Tarihi:'>
            <input type='date' />
        </FormElement>

        <FormElement labelName='Tutar: '>
            <input type='number' min='0' step='0.01' placeholder="250 ₺" />
        </FormElement>

        <button className="bg-gray-300 p-1 m-1 border rounded hover:bg-gray-500">
          Ekle
        </button>
      </form>
    </div>
  );
}
