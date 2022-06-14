import { Box, Container, Heading, Stack, Text, Link } from '@chakra-ui/react'
import ThemeToggleButton from '../components/theme-toggle-button'

const Home = () => {
  return (
    <Container>
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Box flex={2} align="left">
          <Heading as="h1" size="md" textTransform={'uppercase'}>
            Roger Steve Ruiz has a landing page
          </Heading>
        </Box>
        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
      <Stack spacing={3} mt={'1rem'}>
        <Text fontSize="3xl">
          I&lsquo;m Roger Steve Ruiz, an L4 Senior Engineer at
          <Link href="https://truss.works/">TrussWorks</Link>
          building user-centered digital services.
        </Text>
      </Stack>
    </Container>
  )
}

export default Home
