import {Flex, Image, Text} from '@chakra-ui/react'
import React from "react";
import { useState } from "react";
const NotFoundPage = () => {
    const [timer, setTimer] = useState(5)
    setTimeout( ()=>{
        setTimer(timer-1)
    }, 1000)
    if(timer === 0){
        window.location.href="/";
    }
    return(
        <Flex direction="column" alignItems="center" justifyContent="center">
            <Image src='/images/error_404_600px.gif' alt='Dan Abramov' />
            <Text color="card.200" fontSize="md">
                Pagina cautata este inexistenta. In {timer} secunde veti fi redirectionat catre pagina initiala...
            </Text>
        </Flex>
    );
}

export default NotFoundPage;