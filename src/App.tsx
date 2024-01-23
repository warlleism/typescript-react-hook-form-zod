import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Form } from './Views/form'

function App() {

  return (
    <ChakraProvider>
      <div style={{ background: '#e9e9e9', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form />
      </div>
    </ChakraProvider>
  )
}

export default App
