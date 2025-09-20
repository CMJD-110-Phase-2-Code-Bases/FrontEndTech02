import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthProvider";

export const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleOnLogut = () => {
    logout();
    navigate("/signin");
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand as={Link} to="/">Home</Navbar.Brand> */}
          <Nav className="me-auto">
            {isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/coursematerial">
                  Course Material
                </Nav.Link>
                <Nav.Link as={Link} to="/course">
                  Course
                </Nav.Link>
                <Button variant="danger" onClick={handleOnLogut}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/signin">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
