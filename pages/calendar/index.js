import { Box, Flex } from "@chakra-ui/react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import CheckList from "../../components/Checklist";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import CompanyTaskCard from "../../components/Tasks";


export default function MyCalendar() {
  return (
    <>
      <Sidebar />
      <Box w={['calc(100% - 280px)','calc(100% - 280px)','calc(100% - 280px)','calc(100% - 120px)','calc(100% - 280px)']} h='100%'>
        <Box px={['','','','40px','20px']} py='20px' bg='#F7F7F4' pos='relative' left={['','','','120px','280px']}>
          <Navbar />
          <Flex justifyContent='space-between' alignItems='flex-start'>
              <CompanyTaskCard/>
            <Box display={['none','none','','none','block']}>
            <CheckList/>
            </Box>
            <Calendar next2Label={null} prev2Label={null} defaultView="month" />
          </Flex>
          <Flex justifyContent='space-between' alignItems='flex-start'>
            <CompanyTaskCard />
            <Calendar next2Label={null} prev2Label={null} defaultView="month" />
            <CheckList/>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

MyCalendar.getLayout = function getLayout(page) {
  return (
    <Flex direction='row' w='100%' h='100%' >
      { page }
    </Flex>
  )
}