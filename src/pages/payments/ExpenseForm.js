import { useContext, useState } from "react";
import FormElement from "../../components/form/FormElement";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { addExpense } from "../../api/expenses";
import { useMutation, useQueryClient } from "react-query";

export default function ExpenseForm() {

    const queryClient = useQueryClient();

    const { status, error, mutate } = useMutation({
        mutationFn: addExpense,
        onSuccess: (newExpense) => {
            queryClient.setQueryData(["expenses"], (prevExpenses) => {
                return [...prevExpenses, newExpense];
            });
        },
    });

    const navigate = useNavigate();

    const [buttonDisabled, setButtonDisabled] = useState(false)

    const UserAuthContext = useContext(AuthContext);

    const [expenseForm, setExpenseForm] = useState({
        expenseType: "startup",
        description: "",
        personPayed: UserAuthContext.auth.username,
        payDate: "",
        paymentMethod: "creditCardCorporate",
        payAmounth: 0,
    });

    function handleChange(e) {
        setExpenseForm((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonDisabled(true);
        mutate(expenseForm);
        navigate('/payments/expenses');
    }

    return (
        <div className="studentform flex w-full justify-center">
            <form className="flex flex-col basis-2/3" onSubmit={handleSubmit}>
                <h3 className="text-center p-3 text-lg font-bold">
                    Yeni Gider Kaydı
                </h3>

                <FormElement labelName="Gider Tipi:">
                    <select
                        value={expenseForm.expenseType}
                        name="expenseType"
                        required
                        onChange={handleChange}
                    >
                        <option value="startup">Kuruluş</option>
                        <option value="electricity">Elektrik Faturası</option>
                        <option value="water">Su Faturası</option>
                        <option value="internet">Internet Faturası</option>
                        <option value="phone">Telefon Faturası</option>
                        <option value="naturalGas">Doğalgaz Faturası</option>
                        <option value="assets">Demirbaş</option>
                        <option value="stationery">Kırtasiye</option>
                        <option value="rent">Kira</option>
                        <option value="restoration">Tadilat</option>
                        <option value="transportation">Ulaşım</option>
                        <option value="taxes">Vergi</option>
                        <option value="shopping">Market</option>
                        <option value="food">Yemek</option>
                        <option value="finance">Finans</option>
                        <option value="personelSalary">Personel - Maaş</option>
                        <option value="personelInsurance">
                            Personel - SGK
                        </option>
                        <option value="personelBonus">Personel - Prim</option>
                        <option value="bookTrainingMaterial" >Kitap / Eğitim Materiyali</option>
                        <option value="payback">Kayıt İptali / İade</option>
                        <option value="promo">Reklam / Tanıtım</option>
                        <option value="event">Organizasyon / Etkinlik</option>
                        <option value="other">Diğer</option>
                    </select>
                </FormElement>

                <FormElement labelName="Açıklama:">
                    <input
                        type="text"
                        name="description"
                        autoComplete="off"
                        onChange={handleChange}
                        value={expenseForm.description}
                        placeholder="Gider notu"
                    />
                </FormElement>

                <FormElement labelName="Ödeme Tarihi:">
                    <input
                        type="date"
                        name="payDate"
                        value={expenseForm.payDate}
                        required
                        onChange={handleChange}
                    />
                </FormElement>

                <FormElement labelName="Ödeme Metodu:">
                    <select
                        value={expenseForm.paymentMethod}
                        name="paymentMethod"
                        required
                        onChange={handleChange} 
                    >
                        <option value="creditCardCorporate" >Kredi Kartı (Kurumsal)</option>
                        <option value="creditCardPersonal">Kredi Kartı (Kişisel)</option>
                        <option value="cash">Nakit</option>
                        <option value="debitCardCorporate">Banka Kartı (Kurumsal)</option>
                        <option value="debitCardPersonal">Banka Kartı (Kişisel)</option>
                        <option value="founder">Kurucu</option>
                    </select>
                </FormElement>

                <FormElement labelName="Tutar ₺: ">
                    <input
                        type="number"
                        name="payAmounth"
                        min="0"
                        step="0.01"
                        placeholder="örn. 250 ₺"
                        required
                        onChange={handleChange}
                    />
                </FormElement>

                <button
                    disabled={buttonDisabled ? true : false}
                    className="bg-gray-300 p-1 m-1 border rounded hover:bg-gray-500"
                >
                    Ekle
                </button>
            </form>
        </div>
    );
}