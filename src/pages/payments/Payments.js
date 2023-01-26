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
      <MainSection>
        {isAllowed() && <Button buttonText="Giderler" link="/payments/expenses" />}
        <Button buttonText="Gider Ekle" link="/payments/expense" />
      </MainSection>
      
      <MainSection>
        <Button buttonText="Ödeme Planları" link="/payments/paymentplans" />
        <Button buttonText="Ödeme Planı Oluştur" link="/payments/paymentplanform" />
      </MainSection>

      <MainSection>
        <Button buttonText="Ödeme Al" link="/payments" />
      </MainSection>
    </>
  );
}
