import Button from "../../components/Button";
import MainSection from "../../components/section/MainSection";

export default function Education() {
  return (
    <>
      <MainSection>
        <Button buttonText="Ders Kayıtları" link="/education/enrollments" />
        <Button buttonText="Ders Kaydı Oluştur" link="/education/enrollment" />
      </MainSection>
      {/* <MainSection> 
        <Button buttonText="Gruplar" link="/education/groups" />
        <Button buttonText="Grup Oluştur" link="/education/group" />
        <Button buttonText="Ders Takvimi" link="/education" />
      </MainSection>
      <MainSection>
        <Button buttonText="Yoklama" link="/education" />
        <Button buttonText="Ölçme Değerlendirme" link="/education" />
        <Button buttonText="Sınavlar" link="/education" />
      </MainSection>
      <MainSection>
      <Button buttonText="Öğretmenler" link="/education" />
      <Button buttonText="Dersler" link="/education" />
      </MainSection> */}
    </>
  );
}
