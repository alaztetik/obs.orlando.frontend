export async function addPaymentPlan(paymentPlanForm) {
  return await fetch(
    `${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/paymentplans`,
    {
      method: "POST",
      body: JSON.stringify(paymentPlanForm),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  )
}


export async function getPaymentPlans() {
  return await fetch(
    `${process.env.REACT_APP_PROD_BACKEND_URL}/api/v0/paymentplans`
  ).then( data => data.json());
}