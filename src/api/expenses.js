
export async function getExpenses() {
  return await fetch(
    `${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/expenses`
  ).then((data) => data.json());
}

export async function addExpense(expenseForm) {
  return await fetch(
    `${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/expenses`,
    {
      method: "POST",
      body: JSON.stringify(expenseForm),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
}