import React, { useEffect } from 'react';
import Enrollment from '../../components/enrollments/Enrollment';
import EnrollmentSearch from '../../components/enrollments/EnrollmentSearch';
import EnrollmentWrapper from '../../components/enrollments/EnrollmentWrapper';
import { formatPreferredCourseType, formatPreferredDays, formatPreferredHours, formatPreferredLanguage, formatLanguageLevel } from '../../utils/formats';
import StudentContext from '../../context/StudentContext';
import EnrollmentContext from '../../context/EnrollmentContext';

export default function Enrollments() {

    const students = React.useContext(StudentContext).students;

    const { enrollments } = React.useContext(EnrollmentContext);

    const [query, setQuery] = React.useState("");

    /* function getSearchInput(input) {
        setQuery(input.toLowerCase());
    } */
    // TODO fix search bug (below)

    const searchedData = enrollments.filter( (enrollment) => Object.values(enrollment).join().toLowerCase().includes(query) );

    let numberOfEnrollments = searchedData.length;

    function getStudentName(studentId) {
        const student = students.find( (student) => student._id === studentId );
        return `${student.firstName} ${student.lastName}`;
    }

    return (
        <div className='enrollments-all'>
            {/* <EnrollmentSearch inputSearch={getSearchInput} /> */}
            {/* TODO fix search bug */}

            <p className='m-2'>
                Toplam Ders Kaydı: <span className='font-bold'>{numberOfEnrollments}</span>
            </p>

            <EnrollmentWrapper>
                {searchedData.map( (enrollment) => {
                    return (
                        <Enrollment
                            key={enrollment._id}
                            no={numberOfEnrollments--}
                            student={getStudentName(enrollment.student)}
                            preferredLanguage={formatPreferredLanguage(enrollment.preferredLanguage)}
                            preferredCourseType={formatPreferredCourseType(enrollment.preferredCourseType)}
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