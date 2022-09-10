import Button from "../components/Button";


export default function Login() {

  return (
    <div className="login">
      <form className="flex w-2/6">
        <label className="block">
          Kullanıcı:
          <input type="text" name="username"  className="border border-red-900"/>
        </label>
        <label className="block">
            Şifre:
            <input type="password" name="password"  className="border border-red-900"/>
        </label>
        <Button link="/dashboard" buttonText="Giriş" />
      </form>
    </div>
  );
}
