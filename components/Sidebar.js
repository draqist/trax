import { Box, Image, List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { IoBriefcaseOutline,IoCalendarOutline,IoSettingsOutline } from 'react-icons/io5'
import { AiOutlinePieChart, AiOutlineProfile } from 'react-icons/ai'
import NextLink from 'next/link'

const Sidebar = () => {
  return ( 
    <Box w='280px' bg='white' h='100%' borderRightRadius='0px' boxShadow='xl' pos='fixed' zIndex='2'>
      <Box mb='60px' pt='40px' px='138px' zIndex={'20'}>
        <Image src='logo.svg' alt='dashlogo' w='42px' maxW={'unset'}/>
      </Box>
      <Box w='100%' h='532px'>
        <List w='100%' color='#65676D' >
          <NextLink href='/'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38'}} _hover={{bg:'#FFF4EE', color:'#FD7B38', borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={MdOutlineSpaceDashboard} mr='20px'  fontSize='22px' />
              dashboard
            </ListItem>
          </NextLink>
          <NextLink href='/projects'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={IoBriefcaseOutline} mr='20px'  fontSize='22px' />
              projects
            </ListItem>
          </NextLink>
          <NextLink href='tasks'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={AiOutlineProfile} mr='20px'  fontSize='22px' />
              my tasks
            </ListItem>
          </NextLink>
          <NextLink href='calendar'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={IoCalendarOutline} mr='20px'  fontSize='22px' />
              calendar
            </ListItem>
          </NextLink>
          <NextLink href='mgmt'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={AiOutlinePieChart} mr='20px'  fontSize='22px' />
              time management
            </ListItem>
          </NextLink>
          <NextLink href='settings'>
            <ListItem w='100%'  textTransform='uppercase' fontWeight='600' fontSize='18px' py='24px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '6px solid #FD7B38'}}>
              <ListIcon as={IoSettingsOutline} mr='20px'  fontSize='22px' />
              settings
            </ListItem>
          </NextLink>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;