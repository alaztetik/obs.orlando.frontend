import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import FormElement from "../form/FormElement";
import { useNavigate } from "react-router-dom";

export default function StudentEditModal({ student }) {

    const [opened, setOpened] = useState(false);

    const [studentInfo, setStudentInfo] = useState(student);

    const navigate = useNavigate();
    

    function handleChange(event) {
        const {name, value} = event.target;

        setStudentInfo(prev => {
            return {
                ...prev,
                [name]: value
            };
        });
    }


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/students`, {
                method: "PATCH",
                body: JSON.stringify(studentInfo),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error('Error: ' + response.status);
            }

            navigate('/students');

        } catch (error) {
            console.log('Some error occured: ' + error);
        }

        setOpened(false);
    }


    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Kişiyi Düzenle"
            >
                <form onSubmit={handleSubmit}>

                <FormElement labelName="Ad:">
                    <input
                        name="firstName"
                        type="text"
                        autoComplete="off"
                        required
                        onChange={handleChange}
                        value={studentInfo.firstName}
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
                        value={studentInfo.lastName}
                        className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
                    />
                </FormElement>

                <FormElement labelName="Telefon:">
                    <input
                        name="phone"
                        type="tel"
                        placeholder="0533..."
                        autoComplete="off"
                        required
                        onChange={handleChange}
                        value={studentInfo.phone}
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
                        value={studentInfo.email}
                        className="border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
                    />
                </FormElement>
                
                <FormElement labelName="Notlar:">
                    <textarea
                        rows={4}
                        name="studentNotes"
                        type="textarea"
                        autoComplete="off"
                        onChange={handleChange}
                        value={studentInfo.studentNotes}
                        className="resize-none border-2 border-orlando-slate focus:border-orlando-orange focus:outline-none"
                    />
                </FormElement>
                    <br />
                    <button className="p-1 m-1 mt-6 border rounded bg-orlando-gray hover:bg-orlando-orange text-orlando-white hover:text-orlando-gray disabled:bg-gray-600 disabled:text-black">Tamam</button>
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
