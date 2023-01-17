import React, { useEffect } from "react";
import Enrollment from "../../components/enrollments/Enrollment";
import EnrollmentSearch from "../../components/enrollments/EnrollmentSearch";
import EnrollmentWrapper from "../../components/enrollments/EnrollmentWrapper";
import {
  formatPreferredCourseType,
  formatPreferredDays,
  formatPreferredHours,
  formatPreferredLanguage,
  formatLanguageLevel,
} from "../../utils/formats";
import { useQuery } from "react-query";
import { getEnrollments } from "../../api/enrollments";
import { getStudents } from "../../api/students";
import { Dna } from "react-loader-spinner";

export default function Enrollments() {
  const {
    status: enrollmentStatus,
    error: enrollmentError,
    data: enrollments = [],
  } = useQuery({
    queryKey: ["enrollments"],
    queryFn: getEnrollments,
  });

  const {
    status: studentStatus,
    error: studentError,
    data: students = [],
  } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });

  function getStudentName(studentId) {
    const student = students.find((student) => student._id === studentId);
    return `${student?.firstName} ${student?.lastName}`;
  }

  if (studentStatus !== "success" || enrollmentStatus !== "success") {
    return <div className="top-10 grid justify-items-center align-middle">
    <Dna
      visible={true}
      height="100"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
  }

  let numberOfEnrollments = enrollments.length;

  return (
    <div className="enrollments-all">
      <p className="m-2">
        Toplam Ders Kaydı:{" "}
        <span className="font-bold">{numberOfEnrollments}</span>
      </p>

      <EnrollmentWrapper>
        {enrollments.map((enrollment) => {
          return (
            <Enrollment
              key={enrollment._id}
              no={numberOfEnrollments--}
              student={getStudentName(enrollment.student)}
              preferredLanguage={formatPreferredLanguage(
                enrollment.preferredLanguage
              )}
              preferredCourseType={formatPreferredCourseType(
                enrollment.preferredCourseType
              )}
              preferredDays={formatPreferredDays(enrollment.preferredDays)}
              preferredHours={formatPreferredHours(enrollment.preferredHours)}
              languageLevel={formatLanguageLevel(enrollment.languageLevel)}
              booksGiven={enrollment.booksGiven}
              enrollmentNotes={enrollment.enrollmentNotes}
            />
          );
        })}
      </EnrollmentWrapper>
    </div>
  );
}
