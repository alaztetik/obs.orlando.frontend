import { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import MainSection from "../../components/section/MainSection";
import AuthContext from "../../context/AuthProvider";

export default function Payments() {

  const UserAuthContext = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function isAllowed() {
    if (["admin", "founder", "manager"].includes(UserAuthContext.auth.role)) {
      return true;
    }
    return false;
  }

  useEffect( () => {
    if (UserAuthContext?.auth.role !== 'none') {
      setIsLoggedIn(true);
    }
  }, [UserAuthContext]);



  return (
    <>
      {/* <MainSection>
        <Button buttonText="Ödeme Planları" link="/payments" />
        <Button buttonText="Ödeme Al" link="/payments/payment" />
      </MainSection> */}
      <MainSection>
        {isAllowed() && <Button buttonText="Giderler" link="/payments/expenses" />}
      <Button buttonText="Gider Ekle" link="/payments/expense" />
      </MainSection>
    </>
  );
}
