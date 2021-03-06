import { Box, Image, Link, List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { IoBriefcaseOutline,IoCalendarOutline,IoSettingsOutline } from 'react-icons/io5'
import { AiOutlinePieChart, AiOutlineProfile } from 'react-icons/ai'
import NextLink from 'next/link'

const Sidebar = () => {
  return ( 
    <Box w={['','','','120px','280px']} bg='white' h='100%' borderRightRadius='0px' boxShadow='xl' pos='fixed' zIndex='2'>
      <Box mb='40px' pt='40px' px={['20px','20px','20px','38px','100px']} zIndex={'20'}>
        <Image src='logo.svg' alt='dashlogo' w='42px' maxW={'unset'}/>
      </Box>
      <Box display={['none','none','none','none','block']} w='100%' h='532px'>
        <List w='100%' color='#65676D' >
          <NextLink passHref href='/' active={{bg:'#FFF4EE', color:'#FD7B38', borderRight: '6px solid #FD7B38'}}>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38', borderRight: '6px solid #FD7B38'}}>
                  <ListIcon as={MdOutlineSpaceDashboard} mr='20px'  fontSize='22px' />
                  dashboard
            </ListItem>
          </NextLink>
          <NextLink passHref href='/projects'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={IoBriefcaseOutline} mr='20px'  fontSize='22px' />
              projects
            </ListItem>
          </NextLink>
          <NextLink passHref href='/tasks'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={AiOutlineProfile} mr='20px'  fontSize='22px' />
              my tasks
            </ListItem>
          </NextLink>
          <NextLink passHref href='/calendar'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={IoCalendarOutline} mr='20px'  fontSize='22px' />
              calendar
            </ListItem>
          </NextLink>
          <NextLink passHref href='/mgmt'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={AiOutlinePieChart} mr='20px'  fontSize='22px' />
              time management
            </ListItem>
          </NextLink>
          <NextLink passHref href='/settings'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={IoSettingsOutline} mr='20px'  fontSize='22px' />
              settings
            </ListItem>
          </NextLink>
        </List>
      </Box>
      <Box display={['none','none','none','block','none']} w='100%' h='532px' mt='80px'>
        <List w='100%' color='#65676D' >
          <NextLink passHref href='/'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='36px' px='40px' _active={{bg:'#FFF4EE', color:'#FD7B38', borderRight: '6px solid #FD7B38'}} _hover={{bg:'#FFF4EE', color:'#FD7B38', borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={MdOutlineSpaceDashboard} mr='20px'  fontSize='36px' />
            </ListItem>
          </NextLink>
          <NextLink passHref href='/projects'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='36px' _active={{bg:'#FFF4EE', color:'#FD7B38', borderRight: '6px solid #FD7B38'}} px='40px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={IoBriefcaseOutline} mr='20px'  fontSize='36px' />
            </ListItem>
          </NextLink>
          <NextLink passHref href='/tasks'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='36px' _active={{bg:'#FFF4EE', color:'#FD7B38', borderRight: '6px solid #FD7B38'}} px='40px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={AiOutlineProfile} mr='20px'  fontSize='36px' />
            </ListItem>
          </NextLink>
          <NextLink passHref href='/calendar'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='36px' _active={{bg:'#FFF4EE', color:'#FD7B38', borderRight: '6px solid #FD7B38'}} px='40px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={IoCalendarOutline} mr='20px'  fontSize='36px' />
            </ListItem>
          </NextLink>
          <NextLink passHref href='/mgmt'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='36px' _active={{bg:'#FFF4EE', color:'#FD7B38', borderRight: '6px solid #FD7B38'}} px='40px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={AiOutlinePieChart} mr='20px'  fontSize='36px' />
            </ListItem>
          </NextLink>
          <NextLink passHref href='/settings'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='36px' _active={{bg:'#FFF4EE', color:'#FD7B38', borderRight: '6px solid #FD7B38'}} px='40px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={IoSettingsOutline} mr='20px'  fontSize='36px' />
            </ListItem>
          </NextLink>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;