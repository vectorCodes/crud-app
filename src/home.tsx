import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Form from "./components/form";
import Dashboard from "./components/dashboard";

function Home() {
  return (
    <Box>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Form</Tab>
          <Tab>Dashboard</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box maxW={"xl"} ml={40}>
              <Form />
            </Box>
          </TabPanel>
          <TabPanel>
            <Dashboard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Home;
