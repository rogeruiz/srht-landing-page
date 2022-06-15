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
      animate={{ y: 15, opacity: 1 }}
      transition={{
        type: 'tween',
        ease: 'easeIn',
        delay: 3.5,
        duration: 0.35
      }}
    >
      <Alert
        status="warning"
        borderRadius={15}
        colorScheme={'purple'}
        flexDir={['column', 'column', 'row']}
      >
        <AlertIcon mb={[2, 1, 0]} />
        <AlertTitle mb={[1, 2, 0]}>
          This is currently a work in progress.
        </AlertTitle>
        <AlertDescription display={['block', 'inline-block']}>
          Encourage me to finish on Twitter, or don&apos;t.
        </AlertDescription>
      </Alert>
    </motion.div>
  )
}

export default UnderConstructionBanner
