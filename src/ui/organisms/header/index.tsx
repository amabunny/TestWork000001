"use client";

import { Container, Nav, Navbar } from "react-bootstrap";
import { useLink } from "@/lib/hooks";

export const Header = () => {
  const handleLinkClick = useLink();

  return (
    <Navbar
      expand={"lg"}
      className={"bg-body-tertiary"}
      bg={"dark"}
      data-bs-theme={"dark"}
    >
      <Container>
        <Navbar.Brand>Weather Forecast</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link onClick={handleLinkClick} href={"/"}>
              Главная
            </Nav.Link>
            <Nav.Link onClick={handleLinkClick} href={"/favorite"}>
              Избранное
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
