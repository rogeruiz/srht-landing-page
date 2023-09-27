import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../footer'
// import UnderConstructionBanner from '../under-construction-banner.js'

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head></Head>
      <Container maxW="container.xl" pt={12}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
