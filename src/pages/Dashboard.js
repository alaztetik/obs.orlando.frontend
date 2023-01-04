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
            </span>{" "}
            !
          </p>
        </>
      )}
    </div>
  );
}
