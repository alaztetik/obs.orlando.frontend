import FormElement from "../form/FormElement";

export default function Installment(props) {
    return (
        <div className="p-1">
            <FormElement
                labelName={"Taksit Miktarı (" + props.number.toString() + ") :"}
            >
                <input
                    name={"installmentAmount".concat(props.number)}
                    type="number"
                    placeholder="... ₺"
                    min={0}
                    onChange={props.handleChange}
                />
            </FormElement>

            <FormElement labelName={"Taksit Ödeme Tarihi (" + props.number.toString() + ") :"}>
                <input
                    name={"installmentPaymentDate".concat(props.number)}
                    type="date"
                    required
                    onChange={props.handleChange}
                />
            </FormElement>

            <br />
        </div>
    );
}
