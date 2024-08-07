import { Link, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import { getCookie } from "../../helper/cookie";
import { useSelector } from "react-redux";
function LayoutDefault() {
  const token = getCookie("token");
  const status = useSelector(state =>state.loginReducer);
  console.log(status);
  return (
    <>
      <header className="layout__header">
        <div className="layout__logo">
          <Link to="/">Trang chủ</Link>
        </div>
        <div className="layout__menu">
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>

            {token && (
              <>
              <li>
                  <Link to={"/Quiz"}>Quiz</Link>
                </li>
                <li>
                  <Link to="/Topic">Topic</Link>
                </li>

                <li>
                  <Link to="/Answers">Answers</Link>
                </li>
                <li>
                  <Link to="/Result">Result</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="layout__account">
          <ul>
            {token ? (
              <>
                <li>
                  <Link to="/Logout">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <Link to="/Register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </header>
      <main className="layout__main">
        <Outlet />
      </main>

    </>
  );
}
export default LayoutDefault;
