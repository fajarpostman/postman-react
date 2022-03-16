import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/Styles.scss";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md={3}>
                            Fajar
                        </Col>
                        <Col md={5}>
                            <div className="jutify-content-center footer-text">
                                © Fajar Postman 2021
                            </div>
                        </Col>
                        <Col md={4}>
                            Fajar
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}