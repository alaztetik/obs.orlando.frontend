export async function getStudents() {
  return await fetch(
    `${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/students`
  ).then((data) => data.json());
}

export async function addStudent(studentForm) {
  return await fetch(
    `${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/students`,
    {
      method: "POST",
      body: JSON.stringify(studentForm),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
}
