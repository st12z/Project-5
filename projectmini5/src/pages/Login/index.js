import { useNavigate } from "react-router-dom";
import { get } from "../../ulities";
import { setCookie } from "../../helper/cookie";
import { useDispatch, useSelector } from "react-redux";
import { actionLogin } from "../../actionReducer/action";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);
    const response = await get(`users?email=${email}&password=${password}`);
    if (response.length > 0) {
      dispatch(actionLogin(true));
      console.log(response);
      setCookie("email", response[0].email, 1);
      setCookie("password", response[0].password, 1);
      setCookie("token", response[0].token, 1);
      setCookie("userId",response[0].id,1);
      navigate("/");
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <input type="text" placeholder="Nhập email" />
        </div>
        <div>
          <input type="password" placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
