export default function FormElement({ labelName, children, active=true }) {
  return (
    <label className={"form-label m-1 ".concat(!active && "text-gray-500 cursor-not-allowed")}>
      <span className="form-span">{labelName}</span>
      {children}
    </label>
  );
}
