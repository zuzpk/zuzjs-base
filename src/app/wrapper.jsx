"use client"
import { useEffect } from "react"
import { Provider } from "@zuzjs/store"
import { Box } from "@zuzjs/ui";

const Wrapper = ({ children }) => {

  useEffect(() => {
        
  }, []);

  return <Main children={children} />

}

const Main = ({ children }) => {

  useEffect(() => {
        
  }, []);

  return <Provider
    initialState={{
      app: {
        debug: true
      }
    }}>
    <Box as={`app flex minH:100vh`}>{children}</Box>
  </Provider>

}

export default Wrapper