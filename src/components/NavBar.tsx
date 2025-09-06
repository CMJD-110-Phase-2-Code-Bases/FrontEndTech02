import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavBar = ()=>{
    return (
        <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Course</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/coursematerial">Course Material</Nav.Link>
            <Nav.Link as={Link} to="/course">Course</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
}