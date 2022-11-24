import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
if (!isLoggedIn) {
return <Navigate to="/Art_me/" replace />;
}
return children;
};
export default Protected;