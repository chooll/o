import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";

const NavBar = ({userData}) => {
    return (
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="logo/steam_logo.png"
                        alt="logo"
                        width="30"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">
                        <Nav.Link href="/orders">Услуги</Nav.Link>
                        <Nav.Link href="/">Информация</Nav.Link>
                        <Nav.Link href="/bar">Корзина</Nav.Link>
                    </Nav>

                    <Nav >
                        <Button variant="primary" href="/login" className="me-2">Войти</Button>
                        <Button variant="success" href="/reg" className="me-2">Регистрация</Button>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default NavBar;