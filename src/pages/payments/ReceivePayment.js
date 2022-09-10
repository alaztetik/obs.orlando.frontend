import FormElement from '../../components/form/FormElement';

export default function ReceivePayment() {
  return (
    <div className="studentform flex w-full justify-center">
      <form className="flex flex-col basis-2/3">
        <h3 className="text-center p-3 text-lg font-bold">Ödeme Al</h3>

        <FormElement labelName="Öğrenci:">
          <select>
            <option>Ali Kilimci</option>
            <option>Faruk Taşıyıcı</option>
            <option>Aysun Ebe</option>
            <option>Mehmet Kibar</option>
          </select>
        </FormElement>

        <FormElement labelName="Ödeme Planı:">
        <select>
            <option>Ödeme Planı 123</option>
          </select>
        </FormElement>

        <FormElement labelName="Ödeme Tipi">
            <select>
                <option>Taksit</option>
                <option>Peşin</option>
            </select>
        </FormElement>

        <FormElement labelName="Ödeme Aracı">
          <select>
            <option>Nakit</option>
            <option>Kredi/Banka Kartı</option>
            <option>Kurumsal Hesaba Havale/EFT</option>
            <option>Bireysel Hesaba Havale/EFT</option>
          </select>
        </FormElement>

        <FormElement labelName="Tutar">
            <input type="number" placeholder="250₺" />
        </FormElement>

        <button className="bg-gray-300 p-1 m-1 border rounded hover:bg-gray-500">
          Ekle
        </button>
      </form>
    </div>
  );
}
