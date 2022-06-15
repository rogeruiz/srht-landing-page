import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" mt={'2rem'} opacity={0.4} fontSize="sm">
      <Text>{new Date().getFullYear()} Roger Steve Ruiz</Text>
      <Text>Built with NextJS, Chakra-UI, and Framer Motion</Text>
    </Box>
  )
}

export default Footer
