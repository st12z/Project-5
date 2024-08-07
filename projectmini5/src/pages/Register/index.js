import { useEffect } from "react";
import { generateToken } from "../../helper/generateToken.js";
import { get, post } from "../../ulities";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const info = {
      fullName: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      token: generateToken(9),
    };
    const data = await get(`users?email=${info.email}`);
    if(data.length>0){
        alert("Tài khoản đã tồn tại")
    }
    else{
        const response = await post("users", info);
        console.log(response);
        navigate("/Login");
    }
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Nhập tên" />
        </div>
        <div>
          <input type="email" placeholder="Nhập email" />
        </div>
        <div>
          <input type="password" placeholder="Nhập password" />
        </div>
        <button type="submit">Đăng kí</button>
      </form>
    </>
  );
}
export default Register;
