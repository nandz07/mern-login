import React from 'react'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../features/user'

function Header() {
    const user = useSelector((state) => state.user.value)
    const dispatch=useDispatch()
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand> <Link to='/'
                        style={{ textDecoration: 'none' }}
                    >Home</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link ><Link
                                style={{ textDecoration: 'none' }}
                                to='/register'>Register</Link></Nav.Link>
                            <Nav.Link ><Link to='/login'
                                style={{ textDecoration: 'none' }}
                            >Login</Link></Nav.Link>

                        </Nav>
                        <Form className="d-flex align-items-center">

                            {user.name && <div>
                                <Button variant="outline-success" className='mx-5'><NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item >{user.name}</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item
                                    onClick={() => {
                                        dispatch(logout())
                                    }} >
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown></Button>
                                <Navbar.Brand> welcome {user.name} </Navbar.Brand>
                            </div>}
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header