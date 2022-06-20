import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  const buttonVariant = {
    hover: clicked => ({
      scale: clicked ? 1 : 0.75
    }),
    pressed: {
      scale: 1.5
    },
    rest: {
      scale: 1
    }
  }

  const [clicked, setClicked] = React.useState(true)

  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <Box position={'fixed'} zIndex={"sticky"} bottom={10} left={[7, 10]}>
        <motion.div
          style={{ display: 'inline-block' }}
          key={useColorModeValue('light', 'dark')}
          initial="rest"
          whileHover="hover"
          whileTap="pressed"
          custom={clicked}
          onClick={() => setClicked(true)}
          variants={buttonVariant}
        >
          <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
          ></IconButton>
        </motion.div>
      </Box>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
