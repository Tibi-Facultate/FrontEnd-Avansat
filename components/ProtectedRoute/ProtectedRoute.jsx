import React, {useState} from "react";
import { Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {Alert} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const isAllowed = useSelector((state) => state.auth.isAuthenticated);
    const isRedirected = useSelector((state) => state.redirect.isRedirected);
    const [timer, setTimer] = useState(5)
    if (props.needLogin === true) {
        if (!isAllowed && !isRedirected) {
            setTimeout(() => {
                setTimer(timer - 1)
            }, 1000)
            if (timer === 0) {
                navigate(props.redirectTo);
            }
            return (
                <Alert status="error">
                    Nu sunteți autentificat. Veti fi redirectionat catre pagina de start in {timer} secunde!
                </Alert>
            );
        } else {
            return <Outlet/>;
        }
    } else {
        if (isAllowed && !isRedirected) {
            setTimeout(() => {
                setTimer(timer - 1)
            }, 1000)
            if (timer === 0) {
                navigate(props.redirectTo);
            }
            return (
                <Alert status="error">
                    Sunteti deja autentificat. Veti fi redirectionat catre pagina de start in {timer} secunde!
                </Alert>
            );
        } else {
            return <Outlet/>;
        }
    }
};

export default ProtectedRoute;
