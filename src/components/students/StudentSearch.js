export default function StudentSearch(props) {

  function getValue(e) {
    props.inputSearch(e.target.value);
  }

  return (
    <div className="student-search m-2">
      <input
        autoFocus
        className="border border-orlando-slate shadow-sm shadow-orlando-slate focus:ring-3 focus:border-orlando-orange"
        type="search"
        placeholder="Öğrenci Ara..."
        onChange={getValue}
      />
    </div>
  );
}
