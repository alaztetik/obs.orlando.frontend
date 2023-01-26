export function getStudentIdFromEnrollmentId(enrollments, enrollmentId) {
  const enrollment = enrollments.find(
    (enrollment) => enrollment._id === enrollmentId
  );
  return enrollment?.student;
}

export function getStudentFullName(students, studentId) {
  const student = students.find((student) => student._id === studentId);
  return `${student?.firstName} ${student?.lastName}`;
}


export function getLanguageName(enrollments, enrollmentId) {
  const enrollment = enrollments.find(
    (enrollment) => enrollment._id === enrollmentId
  );
  return enrollment?.preferredLanguage;
}


export function getCourseType(enrollments, enrollmentId) {
  const enrollment = enrollments.find(
    (enrollment) => enrollment._id === enrollmentId
  );
  return enrollment?.preferredCourseType;
}