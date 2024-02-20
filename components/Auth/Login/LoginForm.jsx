import {Alert, Text} from '@chakra-ui/react'
import React from "react";
import { useState } from "react";
import {getAuth, signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {setIsRedirected, unsetIsRedirected} from "../../../store/redirect.reducer";
import {useDispatch} from "react-redux";
import {logout} from "../../../store/auth.reducer";

const LogoutForm = () => {
    const auth = getAuth();
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    if(timer === 0){
        dispatch(unsetIsRedirected());
        navigate("/");
    }
    signOut(auth).then(() => {
        dispatch(setIsRedirected());
        dispatch(logout());
        setError("SUCCESS");
    }).catch((error) => {
        setError(error.message);
    });
    const renderMessage = () => {
        if (error === "SUCCESS") {
            setTimeout( ()=>{
                setTimer(timer-1)
            }, 1000)
            return(
                <Alert status="success" marginBottom={4}>
                    <Text color="card.200" fontSize="md">
                        Ati fost deconectat cu succes. In {timer} secunde veti fi redirectionat catre pagina initiala...
                    </Text>
                </Alert>
            );
        } else if (error !== "") {
            return(
                <Alert status="error" marginBottom={4}>
                    <Text color="card.200" fontSize="md">
                        A avut loc o eroare in procesul de deconectare: {error}. Va rugam sa reincercati. In {timer} secunde veti fi redirectionat catre pagina initiala...
                    </Text>
                </Alert>
            );
        }
    };

    return(renderMessage());
}

export default LogoutForm;
