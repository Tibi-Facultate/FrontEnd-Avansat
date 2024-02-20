import React, { useState } from "react";
import {
    Box,
    Text,
    Stack,
    InputGroup,
    Input,
    InputLeftElement,
    Icon,
    FormLabel,
    Checkbox,
    Link,
    Button,
    Divider,
    FormControl,
    Heading, Alert,
} from "@chakra-ui/react";

import { FaRegEnvelope, FaLock } from "react-icons/fa";
import PageContainer from "../Layout/PageContainer"
import Footer from "../Layout/Footer"
import "./Login.module.css";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import {setIsRedirected, unsetIsRedirected} from "../../../store/redirect.reducer";
export default function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const [timer, setTimer] = useState(5);
    if(timer === 0){
        dispatch(unsetIsRedirected());
        navigate("/profile");
    }

    const onLogin = async () => {
        try {
            setError("SUCCESS");
            dispatch(setIsRedirected());
            const user = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    const renderMessage = () => {
        if (error === "SUCCESS") {
            setTimeout( ()=>{
                // dispatch(setIsRedirected());
                setTimer(timer-1);
            }, 1000)
            return(
                <Alert status="success" marginBottom={4}>
                    <Text width="100%" textAlign="center"> Ati fost autentificat cu succes! Veti fi redirectionat catre
                        profilul dumneavoastra in {timer} secunde! </Text>
                </Alert>
            );
        } else if (error !== "") {
            return(
                <Alert status="error" marginBottom={4}>
                    <Text width="100%" textAlign="center"> Eroare! {error} </Text>
                </Alert>
            );
        }
    }
    return (
        <PageContainer>
            {renderMessage()}
            <Box
                width={{ base: "90%", md: "400px" }}
                bg="secondary.card"
                rounded="lg"
                p={5}
            >
                <Heading marginBottom="1.5rem">Sign in</Heading>
                <form>
                    <Stack spacing={4} marginBottom="1rem">
                        <FormControl>
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    children={
                                        <Icon as={FaRegEnvelope} color="secondary.inputHelper" />
                                    }
                                />
                                <Input
                                    focusBorderColor="main.500"
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="name@example.com"
                                    _placeholder={{color:"card.200"}}
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                        setError("");
                                    }}
                                />
                            </InputGroup>
                        </FormControl>

                        <FormControl>
                            <Stack justifyContent="space-between" isInline>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Link
                                    href="#"
                                    color="secondary.link"
                                    fontSize="sm"
                                    fontWeight="500"
                                >
                                    Forgot Password?
                                </Link>
                            </Stack>
                            <InputGroup>
                                <InputLeftElement
                                    children={<Icon as={FaLock} color="secondary.inputHelper" />}
                                />
                                <Input
                                    focusBorderColor="main.500"
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    _placeholder={{color:"card.200"}}
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                        setError("");
                                    }}
                                />
                            </InputGroup>
                        </FormControl>
                    </Stack>
                    <Stack justifyContent="space-between" isInline marginBottom="1rem">
                        <Stack isInline>
                            <Checkbox
                                size="md"
                                fontWeight="500"
                                colorScheme="main"
                                name="remember_me"
                                id="remember_me"
                            >
                                Remember me
                            </Checkbox>
                        </Stack>
                    </Stack>
                    <Stack marginBottom="1rem">
                        <Button
                            onClick={onLogin}
                            loadingText="Please wait.."
                            colorScheme="main"
                        >
                            Sign in
                        </Button>
                    </Stack>
                </form>
                <Divider marginBottom="1rem" />
                <Stack>
                    <Text textAlign="center" fontWeight="500">
                        Don't have an account?
                    </Text>
                    <Button colorScheme="main" variant="outline" onClick={() => {navigate("/register");navigate(0);}}>
                        Sign up
                    </Button>
                </Stack>
            </Box>
            <Footer />
        </PageContainer>
    );
}
