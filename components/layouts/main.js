import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../footer'

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head></Head>
      <Container maxW="container.xl" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
