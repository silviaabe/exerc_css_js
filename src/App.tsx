import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import { Container } from './styles'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Container >
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
