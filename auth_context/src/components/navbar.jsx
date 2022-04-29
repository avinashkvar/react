import { LogContext } from "../context/logContext";
import { useContext } from "react";

export const Navbar = ()=>{
    const {isAuth , handleAuth} = useContext(LogContext)
    
     return (
			<div>

				<button onClick={()=>handleAuth()}>{isAuth ? "Logout" : "Login"}</button>
				<button>Users</button>
                <h3>Status : {isAuth ? "Login" : "Logedout"}</h3>
			</div>
		);
}