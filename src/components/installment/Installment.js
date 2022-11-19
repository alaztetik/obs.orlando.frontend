import FormElement from "../form/FormElement";

export default function Installment(props) {
    return (
        <>
            <FormElement
                labelName={props.number.toString() + ". Taksit Miktarı:"}
            >
                <input
                    name={"amount".concat(props.number)}
                    type="number"
                    placeholder="... ₺"
                    min={0}
                    onChange={props.handleChange}
                />
            </FormElement>

            <FormElement labelName="Ödeme Tarihi:">
                <input
                    name={"paymentDate".concat(props.number)}
                    type="date"
                    placeholder="... ₺"
                    required
                    onChange={props.handleChange}
                />
            </FormElement>

            <br />
        </>
    );
}
