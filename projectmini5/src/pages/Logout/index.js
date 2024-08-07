import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helper/cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionLogin } from "../../actionReducer/action";

function Logout(){
    const navigate = useNavigate();
    const dispatch =useDispatch();
    dispatch(actionLogin(false));
    deleteAllCookies();
    useEffect(()=>{
        navigate("/Login");
    },[]);
    return(
        <>
            
        </>
    )
}
export default Logout;