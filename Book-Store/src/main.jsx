import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ApicontextProvider } from './components/Contextapi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ChakraProvider>
      <ApicontextProvider>
    <App />
    </ApicontextProvider>
    </ChakraProvider>
  </StrictMode>,
)
