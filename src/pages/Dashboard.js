import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthProvider";
import { formatUsername } from "../utils/formats";

export default function Dashboard() {
  const UserAuthContext = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (UserAuthContext?.auth.role !== "none") setIsLoggedIn(true);
  }, [UserAuthContext]);

  return (
    <div className="dashboard m-3">
      {isLoggedIn && (
        <>
          <p className="text-xl">
            Hoşgeldin{" "}
            <span className="font-bold text-orlando-orange">
              {formatUsername(UserAuthContext.auth.username)}
            </span> !
          </p>
          <p className="mt-6 text-lg"><span className="font-bold text-orlando-orange">Orlando Language Academy</span> - <span className="font-bold text-orlando-slate">Öğrenci Bilgi Sistemi (ÖBS)</span> uygulaması ile aşağıdaki işlemleri gerçekleştirebileceksin:</p>
          <ul className="mt-6 list-disc list-inside ml-4">
            <li className="hover:text-orlando-orange">Öğrenci kayıt işlemleri <span className="text-orlando-orange font-bold">&#x2713;</span></li>
            <li className="hover:text-orlando-orange">Gider işlemleri <span className="text-orlando-orange font-bold">&#x2713;</span></li>
            <li className="hover:text-orlando-orange">Aday öğrenci kayıt işlemleri <span className="text-orlando-orange font-bold">&#8987;</span></li>
            <li className="hover:text-orlando-orange">Ders kayıt işlemleri <span className="text-orlando-orange font-bold">&#8987;</span></li>
            <li className="hover:text-orlando-orange">Grup kayıt işlemleri <span className="text-orlando-orange font-bold">&#4030;</span></li>
            <li className="hover:text-orlando-orange">Ders takvimi işlemleri <span className="text-orlando-orange font-bold">&#4030;</span></li>
            <li className="hover:text-orlando-orange">Yoklama işlemleri <span className="text-orlando-orange font-bold">&#4030;</span></li>
            <li className="hover:text-orlando-orange">Öğrenci ölçme-değerlendirme işlemleri <span className="text-orlando-orange font-bold">&#4030;</span></li>
            <li className="hover:text-orlando-orange">Sınav işlemleri <span className="text-orlando-orange font-bold">&#4030;</span></li>
            <li className="hover:text-orlando-orange">Öğretmen ve ders yönetim işlemleri <span className="text-orlando-orange font-bold">&#4030;</span></li>
            <li className="hover:text-orlando-orange">Ödeme işlemleri <span className="text-orlando-orange font-bold">&#4030;</span></li>
          </ul>
        </>
      )}
    </div>
  );
}
