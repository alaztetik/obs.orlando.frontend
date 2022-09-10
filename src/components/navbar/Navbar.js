
import NavButton from "./NavButton";
import NavLogo from "./NavLogo";

export default function Navbar() {
  
  return (

    <nav>
      <div className="flex bg-orlando-gray">
          
          <NavLogo imageSource="logo_orlando_min.png" />
          <NavButton link="/students" buttonText="Öğrenci" />
          <NavButton link="/education" buttonText="Eğitim" />
          <NavButton link="/payments" buttonText="Muhasebe" />
          <NavButton link="/reports" buttonText="Rapor" />
      </div>
    </nav>
  );
}
