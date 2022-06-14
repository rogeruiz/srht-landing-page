import { motion } from 'framer-motion'
import { Alert, AlertTitle, AlertIcon } from '@chakra-ui/react'

const UnderConstructionBanner = () => {
  return (
    <motion.div
      style={{ display: 'block' }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', delay: 5, duration: 0.35 }}
    >
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>This is currently a work in progress.</AlertTitle>
      </Alert>
    </motion.div>
  )
}

export default UnderConstructionBanner
