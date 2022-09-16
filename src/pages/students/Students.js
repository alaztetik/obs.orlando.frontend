import Button from "../../components/Button";
import MainSection from "../../components/section/MainSection";

export default function Students() {
  return (
    <>
      <MainSection>
        <Button buttonText="Öğrenciler" link="/students/students" />
        <Button buttonText="Öğrenci Kaydet" link="/students/student" />
      </MainSection>
      {/* <MainSection>
        <Button buttonText="Aday Öğrenciler (CRM)" link="/students/prospects" />
        <Button
          buttonText="Aday Öğrenci Ekle (CRM)"
          link="/students/prospect"
        />
      </MainSection> */}
    </>
  );
}
