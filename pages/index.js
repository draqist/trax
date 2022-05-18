import { Box, Flex } from "@chakra-ui/react";
import Calendar from "react-calendar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import 'react-calendar/dist/Calendar.css';
import CompanyTaskCard from "../components/Tasks";


export default function Home() {
  return (
    <>
      <Sidebar />
      <Box w='calc(100% - 280px)' h='100%'>
        <Box px='20px' py='20px' bg='#F7F7F4' pos='relative' left='280px'>
          <Navbar />
          <Flex justifyContent='space-between' alignItems='flex-start'>
            <CompanyTaskCard/>
            <CompanyTaskCard/>
            <Calendar next2Label={null} prev2Label={null} defaultView="month" />
          </Flex>
            <Calendar next2Label={null} prev2Label={null} defaultView="month" />
          {/* <Flex justifyContent='space-between' direction='row-reverse' alignItems='flex-start'>
            <CompanyTaskCard/>
            <Box mb='40px'>
              <Calendar next2Label={null} prev2Label={null} defaultView="month" />
            </Box>
          </Flex> */}
        </Box>
      </Box>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Flex direction='row' w='100%' h='100%' >
      { page }
    </Flex>
  )
}