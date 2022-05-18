import { Avatar, Box, Flex, Input } from "@chakra-ui/react";
import { AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
  return (
    <Flex borderRadius='20px'  mb='40px' justifyContent={['space-between']} alignItems={['center']} px='30px' h='80px' bg='white' w='100%'>
      <Box>
        <Input placeholder="Search" bg='#F7F6F4' borderRadius='10px'/>
      </Box>
      <Flex alignItems='center'>
        <AiOutlineBell color='#65676D' fontSize='24px'/>
        <Avatar name ='something' src='https://bit.ly/dan-abramov' ml='32.5px'/>
      </Flex>
    </Flex>
  );
}

export default Navbar;