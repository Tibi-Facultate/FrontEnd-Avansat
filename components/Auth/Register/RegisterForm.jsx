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
    Button,
    Divider,
    FormControl,
    Heading, Alert
} from "@chakra-ui/react";

import { FaRegEnvelope, FaLock } from "react-icons/fa";
import PageContainer from "../Layout/PageContainer"
import Footer from "../Layout/Footer"

import "./Register.module.css";

import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase";

export default function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState("");
    const [timer, setTimer] = useState(5);

    const [isSubmitting, setSubmitting] = useState(false);

    const onRegister = async () => {
        if(password === password2) {
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                setError("SUCCESS");
            } catch (error) {
                setError(error.message);
            }
        } else {
            setError("Parolele nu se potrivesc! Te rugam sa reincerci!")
        }
    };

    /////////////////////////////////////////////////////////


    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Demo: Submit registration form
        setSubmitting(true);
        setTimeout(function () {
            setSubmitting(false);
        }, 700);
        // End demo
    };

    const renderMessage = () => {
        if(timer === 0){
            navigate("/login");
        }
        if (error === "SUCCESS") {
            setTimeout( ()=>{
                setTimer(timer-1)
            }, 1000)
            return(
                <Alert status="success" marginBottom={4}>
                    <Text width="100%" textAlign="center"> Ati fost inregistrat cu succes! Veti fi redirectionat catre
                    pagina de logare in {timer} secunde! </Text>
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

                <Heading marginBottom="1.5rem">Sign up</Heading>
                <form onSubmit={handleFormSubmit}>
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
                            <Stack justifyContent="space-between">
                                <FormLabel htmlFor="password">Password</FormLabel>
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

                        <FormControl>
                            <Stack justifyContent="space-between">
                                <FormLabel htmlFor="password2">Confirm Password</FormLabel>
                            </Stack>
                            <InputGroup>
                                <InputLeftElement
                                    children={<Icon as={FaLock} color="secondary.inputHelper" />}
                                />
                                <Input
                                    focusBorderColor="main.500"
                                    name="password2"
                                    id="password2"
                                    type="password"
                                    placeholder="Confirm your password"
                                    _placeholder={{color:"card.200"}}
                                    onChange={(event) => {
                                        setPassword2(event.target.value);
                                        setError("");
                                    }}
                                />
                            </InputGroup>
                        </FormControl>
                    </Stack>
                    <Stack marginBottom="1rem">
                        <Button
                            isLoading={isSubmitting}
                            onClick={onRegister}
                            loadingText="Please wait.."
                            colorScheme="main"
                        >
                            Sign up
                        </Button>
                    </Stack>
                </form>
                <Divider marginBottom="1rem" />
                <Stack>
                    <Text textAlign="center" fontWeight="500">
                        Already have an account?
                    </Text>
                    <Button colorScheme="main" variant="outline" onClick={() => {navigate("/login");}}>
                        Sign in
                    </Button>
                </Stack>
            </Box>
            <Footer />
        </PageContainer>
    );
}
