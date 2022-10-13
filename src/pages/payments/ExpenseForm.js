import { useContext, useState } from "react";
import FormElement from "../../components/form/FormElement";
import AuthContext from "../../context/AuthProvider";

export default function ExpenseForm() {
    const UserAuthContext = useContext(AuthContext);

    const [expenseForm, setExpenseForm] = useState({
        expenseType: "",
        description: "",
        personPayed: UserAuthContext.auth.username,
        payDate: "",
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
        
        try {
            const response = await fetch('https://pear-shy-betta.cyclic.app/api/v0/expenses', {
                method: 'POST',
                body: JSON.stringify(expenseForm),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            console.log(result);

        } catch (error) {
            console.log("Error: ", error);
        }
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
                        <option value="assests">Demirbaş</option>
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
                    className="bg-gray-300 p-1 m-1 border rounded hover:bg-gray-500"
                >
                    Ekle
                </button>
            </form>
        </div>
    );
}
