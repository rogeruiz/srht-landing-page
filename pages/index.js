import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Link,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../components/theme-toggle-button'

const Home = () => {
  return (
    <Container>
      <ThemeToggleButton />
      <Stack spacing={8} mt={'1rem'}>
        <Box>
          <Heading as="h1" fontSize={'7xl'} textTransform={'uppercase'} mb={3}>
            Roger Steve Ruiz has a landing page
          </Heading>
          <Text>
            I&lsquo;m Roger Steve Ruiz, an L4 Senior Engineer at
            <Link
              textDecor={'underline'}
              mx={'2px'}
              href="https://truss.works/"
            >
              TrussWorks <ExternalLinkIcon fontSize={'1rem'} mr="3px" />
            </Link>
            building user-centered digital services.
          </Text>
        </Box>
        <Box>
          <Heading as="h2" fontSize={'md'} textTransform={'uppercase'}>
            Pertinent links
          </Heading>
          <UnorderedList spacing={2}>
            <ListItem>
              <Link textDecor={'underline'} href="https://write.rog.gr/">
                writing
              </Link>
            </ListItem>
            <ListItem>
              <Link textDecor={'underline'} href="https://github.com/rogeruiz/">
                GitHub repositories
              </Link>
            </ListItem>
            <ListItem>
              <Link textDecor={'underline'} href="https://git.sr.ht/~rogeruiz/">
                sourcehut repositories
              </Link>
            </ListItem>
            <ListItem>
              <Link
                textDecor={'underline'}
                href="https://gist.github.com/rogeruiz/"
              >
                GitHub gists
              </Link>
            </ListItem>
            <ListItem>
              <Link textDecor={'underline'} href="https://twitter.com/rogeruiz">
                Twitter
              </Link>
            </ListItem>
            <ListItem>
              <Link
                textDecor={'underline'}
                href="http://linkedin.com/in/rogeruiz/"
              >
                LinkedIn
              </Link>
            </ListItem>
            <ListItem>
              <Link
                textDecor={'underline'}
                href="https://write.rog.gr/resume.pdf"
              >
                Resume
              </Link>
            </ListItem>
            <ListItem>
              <Link textDecor={'underline'} href="https://git.sr.ht/~rogeruiz/">
                Email
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading as="h3" fontSize={'sm'} textTransform={'uppercase'}>
            Currently working with
          </Heading>
          <UnorderedList spacing={2}>
            <ListItem>
              <Link textDecor={'underline'} href="https://github.com/">
                GitHub
              </Link>
            </ListItem>
            <ListItem>
              <Link textDecor={'underline'} href="https://golang.org/">
                Go
              </Link>
            </ListItem>
            <ListItem>
              <Link textDecor={'underline'} href="https://reactjs.org/">
                React
              </Link>
            </ListItem>
            <ListItem>
              <Link textDecor={'underline'} href="https://nextjs.org/">
                Next.js
              </Link>
            </ListItem>
            <ListItem>
              {' '}
              <Link textDecor={'underline'} href="https://nixos.org/">
                NixOS
              </Link>
            </ListItem>
            <ListItem>
              {' '}
              <Link
                textDecor={'underline'}
                href="http://www.tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html"
              >
                Bash
              </Link>
            </ListItem>
            <ListItem>
              {' '}
              <Link textDecor={'underline'} href="https://yaml.org/">
                YAML
              </Link>
            </ListItem>
            <ListItem>
              {' '}
              <Link textDecor={'underline'} href="https://www.rust-lang.org/">
                Rust
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </Container>
  )
}

export default Home
