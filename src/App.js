import logo from './logo.svg';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './App.css';



function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" id="mainNav">
        <Container>
          <Navbar.Brand href="#">AT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <svg width="960" height="500"></svg>
      <script src="/src/scripts/bundle.js"></script>
      <Card style={{ color: 'black', width: '18em' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Test Title</Card.Title>
          <Card.Text>
            Here is my example text.  This might be interesting.  This might also be UNinteresting.
            The choice is yours.
          </Card.Text>
          <Button variant="primary">Let's GO!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
