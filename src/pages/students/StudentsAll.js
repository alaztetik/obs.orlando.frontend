import Student from "../../components/students/Student";
import StudentWrapper from "../../components/students/StudentWrapper";
import StudentSearch from "../../components/students/StudentSearch";
import { useState } from "react";
import { getStudents } from "../../api/students";
import { useQuery } from "react-query";
import { Dna } from "react-loader-spinner";

export default function StudentsAll() {
  const {
    status,
    error,
    data: students = [],
  } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  const [query, setQuery] = useState("");

  function getSearchInput(input) {
    setQuery(input.toLowerCase());
  }

  const searchedData = students.filter((student) =>
    Object.values(student).join().toLowerCase().includes(query)
  );

  let numberOfStudents = searchedData.length;

  if (status !== "success") {
    return (
      <div className="top-10 grid justify-items-center align-middle">
        <Dna
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  return (
    <div className="studens-all">
      <StudentSearch inputSearch={getSearchInput} />

      <p className="m-2">
        Toplam Öğrenci: <span className="font-bold">{numberOfStudents}</span>
      </p>

      <StudentWrapper className="students-page">
        {searchedData.map((student) => {
          return (
            <Student
              student={student}
              no={numberOfStudents--}
              key={student._id}
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
