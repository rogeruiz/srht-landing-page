import { Box, Container, Heading, Stack, Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../components/theme-toggle-button'

const Home = () => {
  return (
    <Container>
      <ThemeToggleButton />
      <Stack spacing={4} mt={'1rem'}>
        <Box>
          <Heading
            borderBottom={'1px'}
            as="h1"
            size="lg"
            textTransform={'uppercase'}
          >
            Landing page
          </Heading>
        </Box>
        <Box>
          <Text fontSize="3xl">
            I&lsquo;m Roger Steve Ruiz, an L4 Senior Engineer at
            <Link textDecor={'underline'} href="https://truss.works/">
              TrussWorks <ExternalLinkIcon fontSize={'1rem'} mr="6px" />
            </Link>
            building user-centered digital services.
          </Text>
        </Box>
      </Stack>
    </Container>
  )
}

export default Home
