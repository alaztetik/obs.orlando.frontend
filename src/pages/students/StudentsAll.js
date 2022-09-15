import Student from "../../components/students/Student";
import StudentWrapper from "../../components/students/StudentWrapper";
import StudentSearch from "../../components/students/StudentSearch";
import { useEffect, useState } from "react";


export default function StudentsAll() {

  const [students, setStudents] = useState([]);

  useEffect( () => {
    fetch('https://pear-shy-betta.cyclic.app/api/v0/students')
      .then(data => data.json())
      .then(data => setStudents(data))
  })

  const [query, setQuery] = useState('');

  function getSearchInput(input) {
    setQuery(input.toLowerCase());
  }

  const searchedData = students.filter(student => Object.values(student).join().toLowerCase().includes(query));

  return (
    <div className="studens-all">

      <StudentSearch inputSearch={getSearchInput} />

      <StudentWrapper className="students-page">
        {searchedData.map((student) => {
          
          return (
            <Student
              key={student.tckn}
              firstName={student.firstName}
              lastName={student.lastName}
              tckn={student.tckn}
              phone={student.phone}
              email={student.email}
              note={student.studentNotes}
            />
          );
        })}
      </StudentWrapper>
    </div>
  );
}
