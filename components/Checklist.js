import { Box, Checkbox, Flex, Heading, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { BsPlus } from 'react-icons/bs'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { GrTree } from 'react-icons/gr'
import { useRef, useState } from "react";

const CheckList = () => {
  const [check, setcheck] = useState(false)
  const textRef = useRef(null)
  return ( 
    <Box w='360px' borderRadius='20px' bg='#FFFFFF' px='15px' py='30px'>
      <Flex justifyContent='space-between' alignItems='center' mb='16px'>
        <Heading fontSize='20px' fontWeight='700' color='black'> My Tasks <Text color='#65676D' as='span'>(05)</Text> </Heading>
        <Text fontSize='36px' color='#65676D'>
          <BsPlus/>
        </Text>
      </Flex>
      <List>
        <ListItem>
          <Flex alignItems='center' justifyContent='space-between' py='10px' borderBottom ='1px solid rgba(0, 0, 0, 0.1)'>
            <Stack direction='row' gap='20px'>
              <Text color='#65676D' fontSize='14px' fontWeight='600'>01</Text>
              <Heading color='#65676D' fontSize='14px' fontWeight='600'> Create Wireframe </Heading>
              <Box></Box>
              <Box>
                <Flex alignItems='center' gap='6px' w='40px' fontSize='14px' color='#65676D'> 3 <Text as='span'> <BiMessageSquareDetail /></Text></Flex>
              </Box>
            </Stack>
            <Box>
              <Checkbox _focus={{ outline:'none' }} size='md'> </Checkbox>
            </Box>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex alignItems='center' justifyContent='space-between' py='10px' borderBottom ='1px solid rgba(0, 0, 0, 0.1)'>
            <Stack direction='row' gap='20px'>
              <Text color='#65676D' fontSize='14px' fontWeight='600'>01</Text>
              <Heading color='#65676D' fontSize='14px' fontWeight='600'> Create Wireframe </Heading>
            </Stack>
            <Box>
              <Checkbox _focus={{ outline:'none' }} size='md'> </Checkbox>
            </Box>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex alignItems='center' justifyContent='space-between' py='10px' borderBottom ='1px solid rgba(0, 0, 0, 0.1)'>
            <Stack direction='row' gap='20px'>
              <Text color='#65676D' fontSize='14px' fontWeight='600'>01</Text>
              <Heading color='#65676D' fontSize='14px' fontWeight='600'> Create Wireframe </Heading>
            </Stack>
            <Box>
              <Checkbox _focus={{ outline:'none' }} size='md'> </Checkbox>
            </Box>
          </Flex>
        </ListItem>
        <ListItem>
          <Flex alignItems='center' justifyContent='space-between' py='10px' borderBottom ='1px solid rgba(0, 0, 0, 0.1)'>
            <Stack direction='row' gap='20px'>
              <Text color='#65676D' fontSize='14px' fontWeight='600'>01</Text>
              <Heading color='#65676D' fontSize='14px' fontWeight='600' ref={textRef}> Create Wireframe </Heading>
              <Box></Box>
              <Box>
                <Flex alignItems='center' gap='4px' w='10px' fontSize='14px' color='#65676D'> 3 <Text as='span' color='#65676D'> <BiMessageSquareDetail /></Text></Flex>
              </Box>
              <Box>
                <Flex alignItems='center' gap='4px' w='40px' fontSize='14px' color='#65676D'> 5 <Text as='span' color='#65676D'> <GrTree /></Text></Flex>
              </Box>
            </Stack>
            <Box>
              <Checkbox _focus={{ outline: 'none' }} size='md' isChecked={check} onChange={() => {
                setcheck(!check);
                check ? textRef.current.style.textDecorationLine ='none'  : textRef.current.style.textDecorationLine = 'line-through'
                console.log(textRef.current)
              }}> </Checkbox>
            </Box>
          </Flex>
        </ListItem>
      </List> 
    </Box>
  );
}

export default CheckList; 