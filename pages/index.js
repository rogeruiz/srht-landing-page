import {
  Box,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  Link,
  UnorderedList,
  ListItem,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../components/theme-toggle-button'

const Home = () => {
  return (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      <ThemeToggleButton />
      <GridItem colSpan={3}>
        <Image
          borderRadius="full"
          boxSize="4xs"
          src="/images/headshot-2021.jpg"
          alt="Roger Steve Ruiz"
        />
      </GridItem>
      <GridItem colSpan={9}>
        <Heading as="h1" fontSize={'5xl'} textTransform={'uppercase'} mb={3}>
          Roger Steve Ruiz has a landing page
        </Heading>
        <Text>
          I&lsquo;m Roger Steve Ruiz, an L4 Senior Engineer at
          <Link mx={'2px'} href="https://truss.works/">
            TrussWorks <ExternalLinkIcon fontSize={'1rem'} mr="3px" />
          </Link>
          building user-centered digital services.
        </Text>
      </GridItem>
      <GridItem colStart={[4, 4]} colSpan={[8, 3]}>
        <Stack spacing={8} mt={'1rem'}>
          <Box>
            <Heading as="h2" fontSize={'md'} textTransform={'uppercase'}>
              Pertinent links
            </Heading>
            <UnorderedList spacing={2}>
              <ListItem>
                <Link href="https://write.rog.gr/">writing</Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/rogeruiz/">
                  GitHub repositories
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://git.sr.ht/~rogeruiz/">
                  sourcehut repositories
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://gist.github.com/rogeruiz/">
                  GitHub gists
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://twitter.com/rogeruiz">Twitter</Link>
              </ListItem>
              <ListItem>
                <Link href="http://linkedin.com/in/rogeruiz/">LinkedIn</Link>
              </ListItem>
              <ListItem>
                <Link href="https://write.rog.gr/resume.pdf">Resume</Link>
              </ListItem>
              <ListItem>
                <Link href="https://git.sr.ht/~rogeruiz/">Email</Link>
              </ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </GridItem>
      <GridItem colStart={[4, 9]} colSpan={[8, 3]}>
        <Stack spacing={8} mt={'1rem'}>
          <Box>
            <Heading as="h5" fontSize={'sm'} textTransform={'uppercase'}>
              Currently working with
            </Heading>
            <UnorderedList spacing={2}>
              <ListItem>
                <Link href="https://github.com/">GitHub</Link>
              </ListItem>
              <ListItem>
                <Link href="https://golang.org/">Go</Link>
              </ListItem>
              <ListItem>
                <Link href="https://reactjs.org/">React</Link>
              </ListItem>
              <ListItem>
                <Link href="https://nextjs.org/">Next.js</Link>
              </ListItem>
              <ListItem>
                {' '}
                <Link href="https://nixos.org/">NixOS</Link>
              </ListItem>
              <ListItem>
                {' '}
                <Link href="http://www.tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html">
                  Bash
                </Link>
              </ListItem>
              <ListItem>
                {' '}
                <Link href="https://yaml.org/">YAML</Link>
              </ListItem>
              <ListItem>
                {' '}
                <Link href="https://www.rust-lang.org/">Rust</Link>
              </ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default Home
