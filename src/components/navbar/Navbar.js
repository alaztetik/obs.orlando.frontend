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
            <NavButton disabled link="/students" buttonText=" Öğrenci">
              <img className="inline-block" src="https://img.icons8.com/ios-glyphs/22/FAB005/student-center.png" alt="student"/>
            </NavButton>
            <NavButton link="/education" buttonText=" Eğitim">
              <img className="inline-block" src="https://img.icons8.com/ios-filled/22/FAB005/school.png" alt="money"/>
            </NavButton>
            <NavButton link="/payments" buttonText=" Muhasebe">
              <img className="inline-block" src="https://img.icons8.com/ios/22/FAB005/exchange-lira.png" alt="money"/>
            </NavButton>
            {/* <NavButton link="/reports" buttonText="Rapor" /> */}
          </>
        )}
      </div>
    </nav>
  );
}
