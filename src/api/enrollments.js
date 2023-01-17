export async function getEnrollments() {
  return await fetch(
    `${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/enrollments`
  ).then((data) => data.json());
}

export async function addEnrollment(enrollmentForm) {
  return await fetch(
    `${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/enrollments`,
    {
      method: "POST",
      body: JSON.stringify(enrollmentForm),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
}
