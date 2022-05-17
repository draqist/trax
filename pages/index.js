import { Box, Flex } from "@chakra-ui/react";
import Calendar from "react-calendar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import 'react-calendar/dist/Calendar.css';
import TaskCard from "../components/Tasks";


export default function Home() {
  return (
    <>
      <Sidebar />
      <Box w='100%' pr='20px'>
        <Navbar />
        <Flex justifyContent='space-between' alignItems='flex-start'>
          <TaskCard/>
          <Calendar next2Label={null} prev2Label={null} defaultView="month" />
        </Flex>
      </Box>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Flex direction='row' gap='25px' bg='#F7F7F4' >
      { page }
    </Flex>
  )
}