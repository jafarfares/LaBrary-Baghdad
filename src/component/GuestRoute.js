//Returning to all previous pages is prohibited.
import { Navigate } from "react-router-dom";
export default function GuestRoute({children}){
    if(!!localStorage.getItem("token")) {
        return <Navigate to="/app" replace={true} />;
    }else{
        return children;
    }
}