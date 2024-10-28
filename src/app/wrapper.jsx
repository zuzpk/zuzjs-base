"use client"
import { useEffect, useMemo } from "react"
// import { Provider } from "@zuzjs/store"
import { Box } from "@zuzjs/ui";
import "@zuzjs/ui/styles";
import Header from "./header";
import createStore from "@zuzjs/react-store";

const Wrapper = ({ children }) => {

  useEffect(() => {
        
  }, []);

  return <Main children={children} />

}

const Main = ({ children }) => {

  const { Provider } = createStore(`app`, {
    version: 1.1,
    debug: true
  })

  useEffect(() => {


  }, []);

  return <Provider>
    <Box as={`app flex minH:100vh cols`}>
      <Header />
      {children}
      </Box>
  </Provider>


}

export default Wrapper