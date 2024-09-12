
import ReactDOM from 'react-dom/client'
import { ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import App from './App'
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
