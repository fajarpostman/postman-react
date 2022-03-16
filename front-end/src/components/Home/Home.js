import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, NavItem } from "react-bootstrap";
import "../Styles/Styles.scss";
import Navigation from "../Navigation/Navigation";

export default function Home() {

    return (
        <>
        <Navigation />
            {/* <Container>
                <Row>
                    <Col md={12}>
                        <div id="first-circle" className="fadeInDown"></div>
                        <div id="second-circle" className="fadeInDown"></div>
                        <div id="third-circle" className="fadeInDown"></div>
                        <div id="fourth-circle" className="fadeInDown"></div>
                        <div id="fifth-circle" className="fadeInDown"></div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="home-section-first">
                            <span className="first-paragraph">Hi. Welcome</span>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="home-section-second">
                            <div className="rectangle-1"></div>
                            <span className="second-paragraph">My Name Is</span>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="home-section-thrid">
                            <div className="rectangle-2"></div>
                            <span className="thrid-paragraph">Fajar.</span>
                        </div>
                    </Col>
                </Row>
            </Container> */}
        </>
    );
}
