import { Badge, Box, Button, Circle, Flex, Heading, Image, Square, Tag, Text } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { RiMore2Fill } from "react-icons/ri";

const TaskCard = () => {
  return ( 
    <Box w='380px' bg='white' py='30px' px='15px' borderRadius='20px'>
      <Flex justifyContent='space-between' alignItems='center'>
        <Box mr='20px'>
          <Tag bg='#FFF4EE' w='64px' h='64px' borderRadius='18.67px'>
            <Image alt='company_logo' src='./google.svg'/>
          </Tag>
        </Box>
        <Box w='200px'>
          <Heading fontSize='20px' fontWeight='700' color='black'> Google </Heading>
          <Text color='#65676D' fontSize='16px' fontWeight='500'> Google inc. </Text>
        </Box>
        <Flex gap='12px' alignItems='center'>
          <Circle size='40px' border='2px solid #E1E1E1'>
            <AiOutlineStar color='#FFA800' fontSize='28px'/>
          </Circle>
          <Square size='40px'>
            <RiMore2Fill color='#65676D'/>
          </Square>
        </Flex>
      </Flex>
      <Box mt='30px' w='100%'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Button h='32px' w='145px' bg='#F1F2F4' color='#65676D' textTransform='uppercase' fontWeight='700' fontSize='12px'> Select Progress </Button>
          <Badge variant ='outline' fontSize='12px' fontWeight='700' textTransform='uppercase' color='#FF6C65' py='9px' px='13px' boxShadow='inset 0 0 0px 1px #FF6C65' borderRadius='6px'>High Priority </Badge>
        </Flex>
      </Box>
    </Box>
  );
}

export default TaskCard;