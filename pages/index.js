import {
  Box,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon, LinkIcon } from '@chakra-ui/icons'
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
        <Text fontSize={'2xl'}>
          I&lsquo;m Roger Steve Ruiz, a software engineer specializing in cloud
          infrastructure, security, and application development. I&lsquo;m currently
          open to opportunities either full-time or contracting basis. I look forward
          to hearing from you.
        </Text>
        <Text fontSize={'lg'}>
          For the past 12 years I&lsquo;ve been building user-centered digital
          services for both the public and private sector. I found my place in web
          development by coming in through the window, specifically the browser window.
          Coming from a traditional graphic design background, CSS and systems design
          were two things that felt as natural as color theory and typography. As I
          learned more about the history of and fundamentals of programming, I made my
          transition to full-stack web development with a strong focus on front-end,
          back-end, infrastructure, and automation.
        </Text>
        <Text fontSize={'lg'}>
          I try to add elements of the emotional in a world of the artificial.
          We’re all people who work on computers, or sometimes inside the
          computers e.g. cloud, and it is easy to forget that people at the end
          of the day are the ones using them. My career has taken me from the
          private sector to the public sector. I enjoy both kinds of work,
          although the latter I find has the most to improve on and biggest
          impact.
        </Text>
        <Text fontSize={'lg'}>
          Currently, my career has me in more Staff+ engineering roles.
          I&lsquo;ve been the most interested in release engineering and building the
          necessary infrastructure and processes to help teams ship and iterate on
          software of all kinds. I excel in an open-source capacity as open-source
          software has predicated much of my career in tech. I also sometimes
          find myself consistently working on a lot of different projects and am
          considered the glue interconnecting them.
        </Text>
      </GridItem>
      <GridItem colStart={[4, 4]} colSpan={[8, 3]}>
        <Stack spacing={8} mt={'1rem'}>
          <Box>
            <Heading as="h2" fontSize={'md'} textTransform={'uppercase'}>
              Pertinent links
            </Heading>
            <List spacing={2}>
              <ListItem>
                <Link href="https://write.rog.gr/">
                  <ListIcon as={LinkIcon} mr={2} />
                  writing
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/rogeruiz/">
                  <ListIcon as={ExternalLinkIcon} mr={2} />
                  GitHub repositories
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://git.sr.ht/~rogeruiz/">
                  <ListIcon as={ExternalLinkIcon} mr={2} />
                  sourcehut repositories
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://gist.github.com/rogeruiz/">
                  <ListIcon as={ExternalLinkIcon} mr={2} />
                  GitHub gists
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://twitter.com/rogeruiz">Twitter</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="http://linkedin.com/in/rogeruiz/">LinkedIn</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://write.rog.gr/resume.pdf">Resume</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://app.codesignal.com/profile/rogeruiz/overview">CodeSignal</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="mailto:hi@rog.gr">Email</Link>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </GridItem>
      <GridItem colStart={[4, 9]} colSpan={[8, 3]}>
        <Stack spacing={8} mt={'1rem'}>
          <Box>
            <Heading as="h5" fontSize={'sm'} textTransform={'uppercase'}>
              Currently working with
            </Heading>
            <List spacing={2}>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://git-scm.com/" target="_blank" rel="noopener">Git</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://www.python.org" target="_blank" rel="noopener">Python</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener">Ruby</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://www.rust-lang.org/" target="_blank" rel="noopener">Rust</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://golang.org/" target="_blank" rel="noopener">Go</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://reactjs.org/" target="_blank" rel="noopener">React</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://nextjs.org/" target="_blank" rel="noopener">Next.js</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://nixos.org/" target="_blank" rel="noopener">NixOS</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="http://www.tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html" target="_blank" rel="noopener">
                  Bash
                </Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://yaml.org/" target="_blank" rel="noopener">YAML</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://bun.sh" target="_blank" rel="noopener">Bun</Link>
              </ListItem>
              <ListItem>
                <ListIcon as={ExternalLinkIcon} mr={2} />
                <Link href="https://www.swift.org/" target="_blank" rel="noopener">Swift</Link>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default Home
