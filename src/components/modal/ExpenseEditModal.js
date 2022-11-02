import { useState } from "react";
import moment from "moment";
import { Modal, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import FormElement from "../form/FormElement";

export default function ExpenseEditModal({ expense }) {
    const [opened, setOpened] = useState(false);

    const [expenseInfo, setExpenseInfo] = useState(expense);

    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;

        setExpenseInfo((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // const response = await fetch('http://localhost:4000/api/v0/expenses', {
            const response = await fetch('https://pear-shy-betta.cyclic.app/api/v0/expenses', {
                method: 'PATCH',
                body: JSON.stringify(expenseInfo),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Error: ' + response.status);
            }

            navigate('/payments');
        } catch (error) {
            console.log('Error is: ' + error);
        }

        setOpened(false);
    };

    function formatDate(stringDate) {
        moment.locale();
        const date = moment(stringDate).format('YYYY-MM-DD');
        return date;
    }

    const formattedDate = formatDate(expense.payDate);

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Gideri Düzenle"
            >
                <form onSubmit={handleSubmit}>
                    <FormElement labelName="Gider Tipi:">
                        <select
                            value={expenseInfo.expenseType}
                            name="expenseType"
                            required
                            onChange={handleChange}
                        >
                            <option value="startup">Kuruluş</option>
                            <option value="electricity">
                                Elektrik Faturası
                            </option>
                            <option value="water">Su Faturası</option>
                            <option value="internet">Internet Faturası</option>
                            <option value="phone">Telefon Faturası</option>
                            <option value="naturalGas">
                                Doğalgaz Faturası
                            </option>
                            <option value="assests">Demirbaş</option>
                            <option value="stationery">Kırtasiye</option>
                            <option value="rent">Kira</option>
                            <option value="restoration">Tadilat</option>
                            <option value="transportation">Ulaşım</option>
                            <option value="taxes">Vergi</option>
                            <option value="shopping">Market</option>
                            <option value="food">Yemek</option>
                            <option value="finance">Finans</option>
                            <option value="personelSalary">
                                Personel - Maaş
                            </option>
                            <option value="personelInsurance">
                                Personel - SGK
                            </option>
                            <option value="personelBonus">
                                Personel - Prim
                            </option>
                            <option value="bookTrainingMaterial">
                                Kitap / Eğitim Materiyali
                            </option>
                            <option value="payback">Kayıt İptali / İade</option>
                            <option value="event">
                                Organizasyon / Etkinlik
                            </option>
                            <option value="other">Diğer</option>
                        </select>
                    </FormElement>

                    <FormElement labelName="Açıklama:">
                        <input
                            type="text"
                            name="description"
                            autoComplete="off"
                            onChange={handleChange}
                            value={expenseInfo.description}
                            placeholder="Gider notu"
                        />
                    </FormElement>

                    <FormElement labelName="Ödeme Tarihi:">
                        <input
                            type="date"
                            name="payDate"
                            value={formattedDate}
                            required
                            onChange={handleChange}
                        />
                    </FormElement>

                    <FormElement labelName="Ödeme Metodu:">
                        <select
                            value={expenseInfo.paymentMethod}
                            name="paymentMethod"
                            required
                            onChange={handleChange}
                        >
                            <option value="creditCardCorporate">
                                Kredi Kartı (Kurumsal)
                            </option>
                            <option value="creditCardPersonal">
                                Kredi Kartı (Kişisel)
                            </option>
                            <option value="cash">Nakit</option>
                            <option value="debitCardCorporate">
                                Banka Kartı (Kurumsal)
                            </option>
                            <option value="debitCardPersonal">
                                Banka Kartı (Kişisel)
                            </option>
                            <option value="founder">Kurucu</option>
                        </select>
                    </FormElement>

                    <FormElement labelName="Tutar ₺: ">
                        <input
                            type="number"
                            name="payAmounth"
                            min="0"
                            step="0.01"
                            value={expense.payAmounth}
                            placeholder="örn. 250 ₺"
                            required
                            onChange={handleChange}
                        />
                    </FormElement>
                    <br />
                    <button className="p-1 m-1 mt-6 border rounded bg-orlando-gray hover:bg-orlando-orange text-orlando-white hover:text-orlando-gray disabled:bg-gray-600 disabled:text-black">
                        Tamam
                    </button>
                </form>
            </Modal>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>
                    <img
                        src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/000000/external-edit-ui-basic-anggara-basic-outline-anggara-putra.png"
                        alt="edit"
                    />
                </Button>
            </Group>
        </>
    );
}
