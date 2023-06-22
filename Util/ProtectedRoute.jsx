import { Navigate,useLocation  } from "react-router-dom";
const ProtectedRoute = ({children}) => {
  const user = JSON.parse(localStorage.getItem("token"))
  const location = useLocation();
  console.log(location.pathname.includes("/")); 
  if (user != null) {
    if (user.UserId) {
        return children;
    }else (<Navigate to="/" replace />)
  }
  return (<Navigate to="/" replace />);
};
export default ProtectedRoute;