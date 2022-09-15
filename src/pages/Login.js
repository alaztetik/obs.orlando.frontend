import { useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";

export default function Login() {

  const {auth, setAuth} = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorOnLogin, setErrorOnLogin] = useState(false);

  function handleUsernameChange(e) {
    setFormData((prev) => {
      return {
        ...prev,
        username: e.target.value,
      };
    });
  }

  function handlePasswordChange(e) {
    setFormData((prev) => {
      return {
        ...prev,
        password: e.target.value,
      };
    });
  }

  async function authenticateUser(formData) {
    try {
      const response = await fetch('http://localhost:4000/api/v0/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        setAuth({username: 'none', role: 'none'});
        setErrorOnLogin(true);
        throw new Error(`Error! status: ${response.status}`); // TODO handle this error
        
      }

      const result = await response.json(); // response format: {username, role}
      //console.log(result);
      setAuth(result);
      setErrorOnLogin(false);

    } catch (err) {
      console.log('Error: ', err);
      setErrorOnLogin(true);
    } 
  }


  function handleSubmit(e) {
    e.preventDefault();
    //console.log(formData);
    authenticateUser(formData)
  }

  return (
    <div className="login">

      {errorOnLogin && <p className="border text-center text-red-700">Giriş bilgilerinizi kontrol edin...</p>}
      {auth.role === "none" 
      ? (
        <form className="flex w-2/6" onSubmit={handleSubmit}>
          <label className="block">
            Kullanıcı:
            <input
              type="text"
              name="username"
              className="border border-red-900"
              value={formData.username}
              onChange={handleUsernameChange}
            />
          </label>
          <label className="block">
            Şifre:
            <input
              type="password"
              name="password"
              className="border border-red-900"
              value={formData.password}
              onChange={handlePasswordChange}
            />
          </label>
          <button className="rounded block text-orlando-white bg-orlando-gray p-3 m-1 hover:bg-orlando-slate">Giriş</button>
        </form>
      ) : (
        <p className="p-2">Sisteme giriş yaptınız: <span className="font-bold">{auth.username}</span></p>
      )}
    </div>
  );
}
