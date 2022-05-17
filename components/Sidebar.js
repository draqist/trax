import { Box, Image, List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { IoBriefcaseOutline,IoCalendarOutline,IoSettingsOutline } from 'react-icons/io5'
import { AiOutlinePieChart,AiOutlineProfile } from 'react-icons/ai'

const Sidebar = () => {
  return ( 
    <Box w='318px' bg='white' h='100%' borderRightRadius='20px'>
      <Box mb='60px' pt='40px' px='138px' zIndex={'20'}>
        <Image src='logo.svg' alt='dashlogo' w='42px' maxW={'unset'}/>
      </Box>
      <Box w='100%' h='532px'>
        <List w='100%' >
          <ListItem w='100%' h='76px' textTransform='uppercase' fontWeight='800' fontSize='18px' py='20px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38'}} _hover={{bg:'#FFF4EE', color:'#FD7B38', borderRight: '3px solid #FD7B38'}}>
            <ListIcon as={MdOutlineSpaceDashboard} color='#65676D' mr='20px'  fontSize='24px' _hover={{color:'#FD7B38'}} />
            dashboard
          </ListItem>
          <ListItem w='100%' h='76px' textTransform='uppercase' fontWeight='800' fontSize='18px' py='20px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '3px solid #FD7B38'}}>
            <ListIcon as={IoBriefcaseOutline} color='#65676D' mr='20px'  fontSize='24px' _hover={{color:'#FD7B38'}} />
            projects
          </ListItem>
          <ListItem w='100%' h='76px' textTransform='uppercase' fontWeight='800' fontSize='18px' py='20px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '3px solid #FD7B38'}}>
            <ListIcon as={AiOutlineProfile} color='#65676D' mr='20px'  fontSize='24px' _hover={{color:'#FD7B38'}} />
            my tasks
          </ListItem>
          <ListItem w='100%' h='76px' textTransform='uppercase' fontWeight='800' fontSize='18px' py='20px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '3px solid #FD7B38'}}>
            <ListIcon as={IoCalendarOutline} color='#65676D' mr='20px'  fontSize='24px' _hover={{color:'#FD7B38'}} />
            calendar
          </ListItem>
          <ListItem w='100%' h='76px' textTransform='uppercase' fontWeight='800' fontSize='18px' py='20px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '3px solid #FD7B38'}}>
            <ListIcon as={AiOutlinePieChart} color='#65676D' mr='20px'  fontSize='24px' _hover={{color:'#FD7B38'}} />
            time management
          </ListItem>
          <ListItem w='100%' h='76px' textTransform='uppercase' fontWeight='800' fontSize='18px' py='20px' pl='20px' _hover={{bg:'#FFF4EE', color:'#FD7B38',borderRight: '3px solid #FD7B38'}}>
            <ListIcon as={IoSettingsOutline} color='#65676D' mr='20px'  fontSize='24px' _hover={{color:'#FD7B38'}} />
            settings
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;