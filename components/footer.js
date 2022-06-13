import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      {new Date().getFullYear()} Roger Steve Ruiz
    </Box>
  )
}

export default Footer
