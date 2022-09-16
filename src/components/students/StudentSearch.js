export default function StudentSearch(props) {

  function getValue(e) {
    props.inputSearch(e.target.value);
  }

  return (
    <div className="student-search m-2 px-1">
      <input
        autoFocus
        className="border-2 border-orlando-slate p-1 shadow-orlando-slate focus:ring-3 focus:border-orlando-orange focus:outline-none"
        type="search"
        placeholder="Öğrenci filtrele"
        onChange={getValue}
      />
    </div>
  );
}
