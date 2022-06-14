import { motion } from 'framer-motion'
import {
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription
} from '@chakra-ui/react'

const UnderConstructionBanner = () => {
  return (
    <motion.div
      style={{ display: 'block' }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', delay: 1, duration: 0.35 }}
    >
      <Alert status="warning" borderRadius={15} colorScheme={'purple'}>
        <AlertIcon />
        <AlertTitle>This is currently a work in progress.</AlertTitle>
        <AlertDescription>
          Encourage me to finish on Twitter, or don&apos;t.
        </AlertDescription>
      </Alert>
    </motion.div>
  )
}

export default UnderConstructionBanner
