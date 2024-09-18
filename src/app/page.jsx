import { Box, Heading } from "@zuzjs/ui"
import { APP_VERSION } from "@/config"

const Page = () => {

  return <Box as={`dashboard p:25 flex aic jcc w:100vw h:100vh cols abs abc`}>
    <Heading as={`flex s:50 b:900`}>ZuzCMS</Heading>
    <Heading as={`flex s:24`}>ZuzJS Boilerplate v{APP_VERSION}</Heading>
  </Box>
}

export default Page