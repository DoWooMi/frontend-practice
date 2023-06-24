import { useNavigate } from "react-router-dom";

export default function LoginButton(props) {
  console.log(props);
  const navigate = useNavigate();
  function login() {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }
  return <button onClick={login}>Log in</button>;
}
