import { Avatar, AvatarGroup, Badge, Box, Button, Circle, Flex, Heading, Image, Progress, Square, Stack, Tag, Text } from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";
import { RiMore2Fill } from "react-icons/ri";

const CompanyTaskCard = () => {
  return ( 
    <Box w={['360px']} mb='40px' bg='white' py='30px' px='15px' borderRadius='20px'>
      <Flex justifyContent='space-between' alignItems='center'>
        <Stack direction='row' spacing='14px' alignItems='center'>
          <Square bg='#FFF4EE' w='50px' h='50px' borderRadius='8px'>
            <Image alt='company_logo' src='./google.svg'/>
          </Square>
          <Box>
            <Heading fontSize='18px' fontWeight='700' color='black'> Google </Heading>
            <Text color='#65676D' fontSize='14px' fontWeight='500'> Google inc. </Text>
          </Box>
        </Stack>
        <Flex gap='12px' justifyContent='space-between' alignItems='center'>
          {/* <Circle size='40px' border='2px solid #E1E1E1'>
            <AiOutlineStar color='#FFA800' fontSize='28px'/>
          </Circle> */}
          <Square size='40px'>
            <RiMore2Fill color='#65676D' fontSize='28px'/>
          </Square>
        </Flex>
      </Flex>
      <Box mt='20px' w='100%'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Button h='32px' w='145px' bg='#F1F2F4' color='#65676D' textTransform='uppercase' fontWeight='700' fontSize='12px'> Select Progress </Button>
          <Badge variant ='outline' fontSize='12px' fontWeight='700' textTransform='uppercase' color='#FF6C65' py='9px' px='13px' boxShadow='inset 0 0 0px 1px #FF6C65' borderRadius='6px'>High Priority </Badge>
        </Flex>
      </Box>
      <Box mt='20px'>
        <Text fontSize='18px' fontWeight='600px' color='#65676D'> Task Done: <Text as='span' color='black'>12</Text>/20</Text>
        <Progress value={12 / 20 * 100} size='sm' borderRadius='20px' marginTop='20px' colorScheme='purple' />
        <Stack direction='row' mt='18px'>
          <Badge variant='subtle' borderRadius='6px' colorScheme='green' px='25px' py='8px' color='#60B158' fontSize='12px' fontWeight='700'> IOS APP </Badge>
          <Badge px='19px' py='9px' fontWeight='700' fontSize='12px' colorScheme='blue' color='#007AFF' borderRadius='6px' >UI/UX</Badge>
        </Stack>
      </Box>
      <Box mt='20px'>
      <AvatarGroup size='sm' max={5}>
        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
      </AvatarGroup>
      </Box>
      <Box mt='20px'>
        <Badge variant ='subtle' px='15px' borderRadius='6px' color='#FD7B38' py='9px' colorScheme='orange'> DUE Date: 20 june</Badge>
      </Box>
    </Box>
  );
}

export default CompanyTaskCard;