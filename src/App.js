import NavbarComponent from './components/Navbar/NavbarComponent';
import CarouselComponent from './components/Carousel/CarouselComponent';
import CardsComponent from './components/Cards/CardsComponent';
import CardsDigimonsComponent from './components/CardsDigimon/CardsDigimonsComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarComponent/>
        <CarouselComponent/>
        <Container>
          <Row className="justify-content-between removeGutter">
            <CardsComponent/>
          </Row>
          <Row className="justify-content-between removeGutter">
            <CardsDigimonsComponent/>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;