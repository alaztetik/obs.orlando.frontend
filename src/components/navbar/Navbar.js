import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import NavButton from "./NavButton";
import NavLogo from "./NavLogo";

export default function Navbar() {

  const UserAuthContext = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (UserAuthContext?.auth.role !== 'none') setIsLoggedIn(true)
  }, [UserAuthContext?.auth?.role]);

  return (
    <nav className="font-bold">
      <div className="flex bg-orlando-gray">
        <NavLogo imageSource="logo_orlando_min.png" />
        {isLoggedIn && (
          <>
            <NavButton disabled link="/students" buttonText="&#127891; Öğrenci" />
            {/* <NavButton link="/education" buttonText="Eğitim" />
            <NavButton link="/payments" buttonText="Muhasebe" />
            <NavButton link="/reports" buttonText="Rapor" /> */}
          </>
        )}
      </div>
    </nav>
  );
}
