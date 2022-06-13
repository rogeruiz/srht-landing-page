import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import ThemeToggleButton from '../components/theme-toggle-button'

const Home = () => {
  return (
    <Container>
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Box flex={2} align="left">
          <Heading as="h1" size="md" letterSpacing={'tighter'}>
            Roger Steve Ruiz has a landing page
          </Heading>
        </Box>
        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>This is currently a work in progress.</AlertTitle>
      </Alert>
      <Stack spacing={3} mt={'1rem'}>
        <Text fontSize="3xl">
          I&lsquo;m Roger Steve Ruiz. I am an L4 Senior Engineer at TrussWorks
          building user-centered digital services.
        </Text>
      </Stack>
    </Container>
  )
}

export default Home
