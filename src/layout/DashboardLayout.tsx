import { ReactElement } from 'react'
import {
  Box, useColorModeValue, useDisclosure, Drawer, DrawerOverlay, DrawerContent,
} from '@chakra-ui/react'
import {
  SidebarContent, DashboardHeader,
} from '@/components'
import {
  motion, AnimatePresence,
} from 'framer-motion'

export const DashboardLayout = ({ children }: { children: ReactElement }) => {
  const {
    isOpen, onOpen, onClose,
  } = useDisclosure()

  return (
    <Box
      minH="100vh"
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{
          base: 'none',
          md: 'block',
        }}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
      >
        <DashboardHeader onOpen={onOpen} />
        <Box
          as="main"
          p="4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </Box>
  )
}
