import Button from "../../components/Button";
import MainSection from "../../components/section/MainSection";

export default function Payments() {
  return (
    <>
      <MainSection>
        <Button buttonText="Ödeme Planları" link="/payments" />
        <Button buttonText="Ödeme Al" link="/payments/payment" />
      </MainSection>
      <MainSection>
      <Button buttonText="Giderler" link="/payments/expenses" />
      <Button buttonText="Gider Ekle" link="/payments/expense" />
      </MainSection>
    </>
  );
}
