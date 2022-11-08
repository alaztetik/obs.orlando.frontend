export default function ExpenseFilter(props) {

    function handleChange(e) {
        props.handleChange(e.target.value);
    }

    
    return (
        <div className="inline-block m-1">
            <select onChange={handleChange}>
                <option className="bg-orlando-orange" value="">{props.name}</option>
                <option value="">Hepsi</option>

                    {
                        props.elements.map(element => {
                            return (
                                <option value={element.value}>
                                    {element.name}
                                </option>
                            )
                        })
                    }

            </select>
        </div>
    );
}