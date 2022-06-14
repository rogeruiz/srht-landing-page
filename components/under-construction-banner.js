import { motion } from 'framer-motion'
import { Alert, AlertTitle, AlertIcon } from '@chakra-ui/react'

const UnderConstructionBanner = () => {
  return (
    <motion.div
      style={{ display: 'inline-block' }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
    >
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>This is currently a work in progress.</AlertTitle>
      </Alert>
    </motion.div>
  )
}

export default UnderConstructionBanner
