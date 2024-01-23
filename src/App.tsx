import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Form } from './Views/form'

function App() {

  return (
    <ChakraProvider>
      <Form />
    </ChakraProvider>
  )
}

export default App
