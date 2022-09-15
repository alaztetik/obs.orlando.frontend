export default function FormElement(props) {
  return (
    <label className="form-label m-1">
      <span className="form-span text-orlando-gray">{props.labelName}</span>
      {props.children}
    </label>
  );
}
