import { Link, Box, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <Box align="center" mt={'2rem'} opacity={0.4} fontSize="sm">
      <Text>{new Date().getFullYear()} Roger Steve Ruiz</Text>
      <Text>Built with NextJS, Chakra-UI, and Framer Motion</Text>
      <Text>Deployed on <Link href="https://srht.site/">sourcehut Pages <ExternalLinkIcon fontSize={'1rem'} mr="3px" /></Link></Text>
    </Box>
  )
}

export default Footer
