
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavB = ({setSeccion}) => {
    return (
<Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={()=> setSeccion('memes')}>Home</Nav.Link>
                    <Nav.Link onClick={()=> setSeccion('login')}>Login</Nav.Link> 
                    <Nav.Link onClick={()=> setSeccion('perfil')}>Perfil</Nav.Link>
                    <Nav.Link onClick={()=> setSeccion('admin')}>Subir Nuevo meme</Nav.Link>                      
                </Nav>
            </Navbar.Collapse>            
        </Container>
</Navbar>
    )
}

export default NavB
