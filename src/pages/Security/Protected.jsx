import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMe } from "../redux/Actions/AuthActions";

const Protected = ({ children }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   // const userRole = useSelector((state) => state.auth?.user?.role);

   useEffect(() => {
      dispatch(getMe(navigate, null, "/login"));
   }, [dispatch, navigate]);

   // useEffect(() => {
   //    if (role && userRole && role !== userRole) {
   //       navigate("/unauthorized");
   //    }
   // }, [role, userRole, navigate]);

   // useEffect(() => {
   //    if (role && userRole && !role.includes(userRole)) {
   //       navigate("/unauthorized");
   //    }
   // }, [role, userRole, navigate]);

   return children;
};

export default Protected;