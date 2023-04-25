import NavbarComponent from './components/Navbar/NavbarComponent';
import CarouselComponent from './components/Carousel/CarouselComponent';
import CardsComponent from './components/Cards/CardsComponent';
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
        </Container>
      </header>
    </div>
  );
}

export default App;