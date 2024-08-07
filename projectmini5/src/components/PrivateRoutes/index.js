import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes(){
    const isLogin=true;
    return(
        <>  
            {isLogin?<Outlet/>:<Navigate to="/Login"/>}
        </>
    )
}
export default PrivateRoutes;